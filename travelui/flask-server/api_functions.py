import requests
from bs4 import BeautifulSoup
import time
import urllib.parse
import re
import json
import numpy as np
# from TikTokApi import TikTokApi
from sklearn.cluster import KMeans
import geopy.distance
from collections import ChainMap
import pandas as pd
from html.parser import HTMLParser
from geopy import geocoders

import geograpy


base_url = 'https://www.tripadvisor.com'
base_url_sgairlines = 'https://www.singaporeair.com/en_UK/sg/special-offers/flight-from-Singapore/'


def parse_html(url, print_soup=False):
    headers = {
        "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Safari/537.36",
    }

    soup_source = requests.get(url, headers=headers).text
    time.sleep(5)
    soup = BeautifulSoup(soup_source, 'html.parser')

    if print_soup:
        print(soup.prettify())

    return soup


def get_attractions(url, destination):
    soup = parse_html(url, print_soup=False)
    attractions = []
    results = soup.find_all('div', class_="ScCHL")

    for i in results:
        attraction = {}
        edited_name = i.find('div', class_='XfVdV o AIbhI').text
        name = edited_name.split(' ')[1:]
        name = ' '.join(name)
        attraction['City'] = destination
        attraction['Name'] = name
        details = i.find_all('div', class_="biGQs _P pZUbB hmDzD")
        attraction['Activity'] = details[0].text
        attraction['Location'] = details[1].text
        ratings = i.find('svg', class_='UctUV d H0')['aria-label']
        ratings = ratings.split(' ')[0]
        ratings = float(ratings)
        attraction['Ratings'] = ratings
        url = i.find('a', class_="BMQDV _F G- wSSLS SwZTJ FGwzt ukgoS")['href']
        photo_url = i.find('img')['src']
        attraction['ImageUrl'] = photo_url
        attraction['Review_url'] = base_url+url

        address = name + destination
        mapurl = 'https://nominatim.openstreetmap.org/search/' + \
            urllib.parse.quote(address) + '?format=json'

        response = requests.get(mapurl).json()
        try:
            lat = response[0]["lat"]
            lon = response[0]["lon"]
        except:
            lat = None
            lon = None

        attraction['Lat'] = lat
        attraction['Lon'] = lon
        attractions.append(attraction)

    return(attractions)
#     results = soup.findAll('div', {'class':'ui_column is-8 main_col allowEllipsis'})


def get_hotels(url, destination):
    soup = parse_html(url)
    results = soup.findAll(
        'div', {'class': 'prw_rup prw_meta_hsx_responsive_listing ui_section listItem'})
    hotels = []
    count = 1

    for res in results:
        hotel = {}
        listing = res.find('div', {'class': 'listing_title'})
        hotel_name = listing.text.strip()  # need to remove numbers - maybe using regex

        if 'Sponsored' not in hotel_name:
            hotel_link = base_url + listing.find('a')['href']
            rating = res.find('a', {'class': 'ui_bubble_rating'})['alt']
            try:
                hotel_image = res.find('img', class_='_C _Z w')['src']
            except:
                hotel_image = None

            if count < 10:
                hotel_name_stripped = hotel_name[3:]
            elif count >= 10 and count < 100:
                hotel_name_stripped = hotel_name[4:]
            else:
                hotel_name_stripped = hotel_name[5:]

            address = hotel_name_stripped + destination
            mapurl = 'https://nominatim.openstreetmap.org/search/' + \
                urllib.parse.quote(address) + '?format=json'

            response = requests.get(mapurl).json()
            try:
                lat = response[0]["lat"]
                lon = response[0]["lon"]
            except:
                lat = None
                lon = None

            hotel['City'] = destination
            hotel['Name'] = hotel_name_stripped
            hotel['ImageUrl'] = hotel_image
            hotel['ReviewUrl'] = hotel_link
            hotel['Rating'] = float(rating[:-13])
            hotel['Lat'] = lat
            hotel['Lon'] = lon
            hotels.append(hotel)
        count += 1

    return hotels


def get_banner(hotel_url, destination):
    banner = {}
    bannerurl = parse_html(hotel_url, print_soup=False)
    banner_result = bannerurl.find('img', class_='image')['src']
    banner['City'] = destination
    banner['CoverUrl'] = banner_result
    return [banner]


def getairbnb(airbnb_url, destination):
    soup = BeautifulSoup(requests.get(airbnb_url).content, 'html.parser')
    airbnb = []
    count = 1
    
    listings = soup.find_all('div', 'cy5jw6o dir dir-ltr')
    for listing_html in listings:
        features_dict = {}
        url = "https://www.airbnb.com.sg" + \
            listing_html.find('a').get('href')
        header = listing_html.find(
            "div", {"class": "t1jojoys dir dir-ltr"}).get_text()
        name = listing_html.find(
            "div", {"class": "nquyp1l s1cjsi4j dir dir-ltr"}).get_text()

        price = listing_html.find("div", {"class": "_1jo4hgw"}).get_text().split(
            "\xa0")[-3].replace("$", "")

        beds = listing_html.find_all(
            "span", class_="dir dir-ltr")[0].get_text().split(" ")[0]

        try:
            ratings = listing_html.find(
                "span", class_="t5eq1io r4a59j5 dir dir-ltr").get("aria-label").split(",")
            rate = ratings[0].split(" ")[0]
            review = ratings[1].split(" ")[-2]
        except:
            rate = np.nan
            review = np.nan

        pic = listing_html.find_all("source")[0].get("srcset")

        features_dict['City'] = destination
        features_dict['Name'] = header
        features_dict['Rating'] = rate
        features_dict['url'] = url
        features_dict['imageurl'] = pic
        features_dict['review'] = review

        count += 1

        airbnb.append(features_dict)

    return airbnb


def gettiktok(country, type):
    api = TikTokApi()

    tiktoks = []
    for vid in api.hashtag(name=[country, type]).videos(count=50):
        tiktok = {}
        info = vid.info()
        tiktok['City'] = country
        tiktok['url'] = info['video']['downloadAddr']
        tiktoks.append(tiktok)

    return tiktoks


def get_food(destination):
    food_url = f'https://www.tasteatlas.com/' + \
        str(destination) + '/restaurants'
    soup = parse_html(food_url)
    scripts = soup.find_all('script')
    base_url = 'https://www.tasteatlas.com/'
    for i in scripts:
        text = i.text
        if 'window.ta.whereToEatData' in text:
            data = i.text

    list_food = data.split('=')[1].strip()
    list_food = list_food[:-1]
    json_str = json.loads(list_food)

    food_list = []
    for i in json_str:
        food_dict = {}
        # print(i)
        food_dict['City'] = destination
        food_dict['Name'] = i['Name']
        if i['Description'] == None:
            food_dict['Description'] = ''
        else:
            food_dict['Description'] = strip_html(str(i['Description']))
        food_dict['Address'] = i['Address']
        food_dict['Rating'] = i['GoogleRating']
        food_dict['RestaurantAwardPoint'] = i['HighestRestaurantAwardPoint']
        dish_dict = i['Dishes']
        # print(type(dish_dict[0]))
        dishname = dish_dict[0]
        name = dishname['Name']
        food_dict['Dishes'] = name
        food_dict['MustTry'] = i['IsMustTry']
        image_url = i['Image']
        image = image_url['Image']

        try:
            food_dict['Image'] = base_url + image
        except:
            food_dict['Image'] = 'https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg'
        location = i['Location']
        food_dict['Lat'] = location['Lat']
        food_dict['Lon'] = location['Long']
        food_list.append(food_dict)
        # print('------------------')

    return food_list


def find_tips_from_google(city, params=''):
    query = city + ' travel tips'
    url = f'https://www.google.com/search?q={query}{params}'
    soup = parse_html(url)

    links = soup.find_all('div', class_="yuRUbf")
    websites = []

    for link in links:
        website = {}
        website_link = link.a['href']
        website['City'] = city
        website['url'] = website_link
        inner_soup = parse_html(website_link)
        website_title = inner_soup.title.text
        website['title'] = website_title
        websites.append(website)
        if len(websites) > 8:
            break

    return websites


class MLRemover(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.reset()
        self.convert_charrefs = True
        self.fed = []

    def handle_data(self, data):
        self.fed.append(data)

    def handle_entityref(self, name):
        self.fed.append(f'&{name};')

    def handle_charref(self, name):
        self.fed.append(f'&#{name};')

    def get_data(self):
        return ''.join(self.fed)


def strip_html(value):
    remover = MLRemover()

    remover.feed(value)
    remover.close()
    return remover.get_data()


def get_cities(url):
    places = geograpy.get_place_context(url=url)
    cities = places.cities
    return cities


def find_itinerary_from_google(query, days, params=''):
    query = days + ' itinerary ' + query
    url = f'https://www.google.com/search?q={query}{params}'
    soup = parse_html(url)

    links = soup.find_all('div', class_="yuRUbf")
    websites = []

    for link in links:
        website = {}
        website_link = link.a['href']
        website['City'] = query
        website['url'] = website_link
        inner_soup = parse_html(website_link)
        website_title = inner_soup.title.text
        website['title'] = website_title
#         places = get_cities(website_link)
#         website['cities'] = places
        print(website)
        websites.append(website)

    return websites


def get_airprices(destination):
    soup = parse_html(base_url_sgairlines)
    scripts = soup.find_all('script')

    for i in scripts:
        text = i.text
        if 'globalJson.promotionFareDeals' in text:
            data = i.text
    list_prices = data.split('=')[1].strip()
    json_str = json.loads(list_prices)
    airtickets = json_str['promoVO']
    air_dict = airtickets[0]
    cities = air_dict['cityVO']
    countries = []

    for i in cities:
        if i['destinationCityName'] == destination:
            flightdetails = {}
            flightdetails['City'] = i['destinationCityName']
            flightdetails['Country'] = i['destCountryDescription']
            flightdetails['Currency'] = i['currency']
            flightdetails['Price'] = i['price']
            flightdetails['Class'] = i['cabin']
            baseurl = 'https://www.singaporeair.com'
            flightdetails['ImageUrl'] = baseurl + i['imgUrl']
            flightdetails['durationStart'] = i['durationStart']
            flightdetails['durationEnd'] = i['durationEnd']
            flightdetails['bookBy'] = i['bookBy']

            countries.append(flightdetails)

    return countries


def get_passengers(city):
    # convert city to country
    g_api_key = 'AIzaSyB1rc1kUjUCkOXTzjodOzvIy81dQXL044s'
    gn = geocoders.GoogleV3(g_api_key)
    place, (lat, lng) = gn.geocode(city)
    country = place.split(' ').pop()
    df = pd.read_csv('./number-of-air-transport-passengers-carried.csv')
    df['Passengers'] = df['Passengers'].astype(int)
    df = df.loc[df['Entity'] == country].reset_index(drop=True)
    passenger_dict = {}
    passenger_dict['City'] = city
    passenger_dict['Country'] = country
    passenger_dict['Year'] = list(df['Year'])
    passenger_dict['Passengers'] = list(df['Passengers'])
    return [passenger_dict]


def get_planner(days, hotel, attractions):
    # days is the number of days for itineray
    # hotel is passed as dictionary of hotels
    # attractions is passed as dictionary of attractions

    def getShortest(start, visited, grp):
        temp_lst = [loc for loc in grp['Name'] if loc not in visited]
        dist_lst = []
        for loc in temp_lst:
            start_lat = df['Lat'][df['Name'] == start]
            start_lon = df['Lon'][df['Name'] == start]
            start_coord = list([float(start_lat), float(start_lon)])

            loc_lat = df['Lat'][df['Name'] == loc]
            loc_lon = df['Lon'][df['Name'] == loc]

            loc_coord = list([float(loc_lat), float(loc_lon)])

            distance = geopy.distance.geodesic(start_coord, loc_coord).km
            dist_lst.append((loc, distance))
        return sorted(dist_lst, key=lambda x: x[1])[0]

    def getPath(i):
        grp = df[df['group'] == i]
        grp = grp.reset_index(drop=True)
        if len(grp) > 1:
            lst = []
            start = grp['Name'][0]
            lst.append(start)
            cur = start
            tot_dist = 0
            for i in range(len(grp)-1):
                next, dist_ = getShortest(cur, lst, grp)
                lst.append(next)
                tot_dist += dist_
                cur = next
            return lst, tot_dist
        else:
            return [grp['Name'][0]], 0

    df = pd.DataFrame(attractions)

    # Drop attractions with no coordinates
    df = df[df['Lat'].notna()]
    df = df[df['Lon'].notna()]

    # change lattitude and longtitude to int
    df['Lat'] = df['Lat'].astype(float)
    df['Lon'] = df['Lon'].astype(float)

    arr_coordinates = []

    for index, row in df.iterrows():
        lat = row['Lat']
        lon = row['Lon']
        arr_coordinates.append([lat, lon])

    kmeans = KMeans(n_clusters=int(days), random_state=0).fit(arr_coordinates)

    df['group'] = kmeans.labels_

    clusters = []
    count = 0
    for i in range(days):
        cluster = {}
        # print(getPath(i))
        cluster[count] = getPath(i)
        cluster['centroid'] = list(kmeans.cluster_centers_[count])
        count = count+1
        clusters.append(cluster)

    for i in clusters:
        centre_coordinates = i['centroid']
        d = []
        for j in hotel:
            details = {}
            hotel_lat = j['Lat']
            hotel_lon = j['Lon']
            hotel_coordinates = list([hotel_lat, hotel_lon])
            dist = geopy.distance.geodesic(
                centre_coordinates, hotel_coordinates).km
            details[j['Name']] = dist
            d.append(details)

        dict_hotels = dict(ChainMap(*d))
        # print(dict_hotels)

        hotel_min_dist = min(dict_hotels.items(), key=lambda x: x[1])
        # print(hotel_min_dist)
        i['nearest_hotel'] = hotel_min_dist

    return np.array(clusters).tolist()
