import requests
from bs4 import BeautifulSoup
import time
import urllib.parse
import re
import json

base_url = 'https://www.tripadvisor.com'
def parse_html(url, print_soup = False):
    headers = {
        "User-Agent": 
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Safari/537.36",
    }

    soup_source = requests.get(url, headers=headers).text
    time.sleep(5)
    soup = BeautifulSoup(soup_source,'html.parser')
    
    if print_soup:
        print(soup.prettify())
    
    return soup

def get_attractions(url):
    soup = parse_html(url, print_soup=False)
    attractions = []
    results = soup.find_all('div',class_="ScCHL")
    
    for i in results:
        attraction={}
        edited_name = i.find('div', class_='XfVdV o AIbhI').text
        attraction_id = edited_name.split(' ')[0]
        attraction_id = int(re.sub(r'[^\w\s]', '', attraction_id))
        name = edited_name.split(' ')[1:]
        name = ' '.join(name)
        attraction['Id']= attraction_id
        attraction['Name'] = name
        details = i.find_all('div', class_="biGQs _P pZUbB hmDzD")
        attraction['Activity'] = details[0].text
        attraction['Location'] = details[1].text
        ratings = i.find('svg',class_='UctUV d H0')['aria-label']
        ratings = ratings.split(' ')[0] 
        ratings = float(ratings)
        attraction['Ratings']= ratings
        url = i.find('a', class_="BMQDV _F G- wSSLS SwZTJ FGwzt ukgoS")['href']
        photo_url = i.find('img')['src']
        attraction['ImageUrl'] = photo_url
        attraction['Review_url'] = base_url+url
        
        address = name + ' Italy'
        mapurl = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'

        response = requests.get(mapurl).json()
        try:
            lat = response[0]["lat"]
            lon = response[0]["lon"]
        except:
            lat= None
            lon= None
        
        attraction['Lat']= lat
        attraction['Lon']=lon
        attractions.append(attraction)
            
    return(attractions)
#     results = soup.findAll('div', {'class':'ui_column is-8 main_col allowEllipsis'})


def get_hotels(url):
    soup = parse_html(url)
    results = soup.findAll('div', {'class':'prw_rup prw_meta_hsx_responsive_listing ui_section listItem'})
    hotels = []
    count = 1
    
    for res in results:
        hotel = {}
        listing = res.find('div', {'class':'listing_title'})
        hotel_name = listing.text.strip() #need to remove numbers - maybe using regex?
        hotel_link = base_url + listing.find('a')['href']
        rating = res.find('a', {'class':'ui_bubble_rating'})['alt']
        try:
            hotel_image = res.find('img',class_='_C _Z w')['src']
        except:
            hotel_image= None
        
        if count < 10:
            hotel_name_stripped = hotel_name[3:]
        elif count >= 10 and count < 100:
            hotel_name_stripped = hotel_name[4:]
        else:
            hotel_name_stripped = hotel_name[5:]
        
        address = hotel_name_stripped + ' Italy'
        mapurl = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(address) +'?format=json'

        response = requests.get(mapurl).json()
        try:
            lat = response[0]["lat"]
            lon = response[0]["lon"]
        except:
            lat= None
            lon= None
        
        hotel['Id'] = count
        hotel['Name'] = hotel_name_stripped
        hotel['ImageUrl']= hotel_image
        hotel['ReviewUrl'] = hotel_link
        hotel['Rating'] = float(rating[:-13])
        hotel['Lat']= lat
        hotel['Lon']=lon
        hotels.append(hotel)
        count += 1
        
    return hotels

def getbanner(hotel_url):
    bannerurl = parse_html(hotel_url,print_soup=False)
    banner_result=bannerurl.find('img',class_='image')['src']
    
    return banner_result