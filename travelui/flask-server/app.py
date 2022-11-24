from flask import Flask, request
import pymongo
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import api_functions
import json
import jsonpickle
import jsonpickle.ext.numpy as jsonpickle_numpy
from bson import json_util

app = Flask(__name__)
client = MongoClient(
    "mongodb+srv://cz4125:cz4125@travelui.twfhvbi.mongodb.net/test")
db = client.travelui

# # 1. Delete all records
# # COMMENT OUT IF DONT WANT TO DELETE VALUES FROM MONGODB COLLECTIONS
# db['attractions'].delete_many({})
# db['accommodations'].delete_many({})
# db['airbnb'].delete_many({})
# db['airfare_price'].delete_many({})
# db['banner'].delete_many({})
# db['food'].delete_many({})
# db['passengers'].delete_many({})
# db['traveltips'].delete_many({})
# db['tiktok_food'].delete_many({})
# db['tiktok_attraction'].delete_many({})

# # 2. Add some records
# # COMMENT OUT IF DONT WANT TO POPULATE MONGODB COLLECTIONS
# # change destination
# destination = 'Rome'
# f = open('tripadvisor_link.json')
# trip_advisor = json.load(f)
# link_dict = trip_advisor[destination.lower()]
# # attractions
# attractions_url = link_dict['Attractions']
# attractions_scrape = api_functions.get_attractions(
#     attractions_url, destination)
# attraction_col = db['attractions']
# attraction_col.insert_many(attractions_scrape)
# # acommodations
# accommodations_url = link_dict['Hotel']
# accommodations_scrape = api_functions.get_hotels(
#     accommodations_url, destination)
# accommodations_col = db['accommodations']
# accommodations_col.insert_many(accommodations_scrape)
# airbnb
# airbnb_scrape = api_functions.getairbnb(destination)
# airbnb_col = db['airbnb']
# airbnb_col.insert_many(airbnb_scrape)
# banner
# banner_url = link_dict['Hotel']
# banner_scrape = api_functions.get_banner(
#     banner_url, destination)
# banner_col = db['banner']
# banner_col.insert_many(banner_scrape)
# # food
# food_scrape = api_functions.get_food(destination)
# food_col = db['food']
# food_col.insert_many(food_scrape)
# # passengers
# passenger_scrape = api_functions.get_passengers(destination)
# passengers_col = db['passengers']
# passengers_col.insert_many(passenger_scrape)
# # airfare prices
# airfareprice_scrape = api_functions.get_airprices(destination)
# airfareprice_col = db['airfare_price']
# airfareprice_col.insert_many(airfareprice_scrape)
# # travel tips
# tips_scrape = api_functions.find_tips_from_google(destination)
# tips_col = db['traveltips']
# tips_col.insert_many(tips_scrape)

# print('Finish populating')

# # POPULATE TIKTOK INTO MONGODB -DONT UNCOMMENT-
# tiktok_attraction_col = db['tiktok_attraction']
# tiktok_food_col = db['tiktok_food']
# cities = ['Bali', 'India', 'Japan', 'London', 'Malaysia',
#           'Paris', 'Rome', 'Seoul', 'Singapore', 'Zurich']
# for i in cities:
#     f = open(f'.\CZ4125-Project\Tiktok_JSON\Travel\{i}_travel.json')
#     tiktok_att = json.load(f)
#     for j in tiktok_att:
#         tiktok = j['TiktokUrl']
#         tiktokid= tiktok.split('/')[-1]
#         newurl = 'https://www.tiktok.com/embed/' +tiktokid
#         j['TiktokUrl'] = newurl
#     tiktok_attraction_col.insert_many(tiktok_att)
#
#     f = open(f'.\CZ4125-Project\Tiktok_JSON\Food\{i}_food.json')
#     tiktok_food = json.load(f)
#     for j in tiktok_food:
#         tiktok = j['TiktokUrl']
#         tiktokid= tiktok.split('/')[-1]
#         newurl = 'https://www.tiktok.com/embed/' +tiktokid
#         j['TiktokUrl'] = newurl
#     tiktok_food_col.insert_many(tiktok_food)


@app.route('/attractions-api', methods=["GET"])
def get_attractions_api():
    destination = request.args.get('destination')
    print(destination)

    collection = db['attractions']

    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        f = open('tripadvisor_link.json')
        trip_advisor = json.load(f)

        link_dict = trip_advisor[destination.lower()]
        attractions_url = link_dict['Attractions']
        attractions_scrape = api_functions.get_attractions(
            attractions_url, destination)

        collection.insert_many(attractions_scrape)
        print(f"MongoDB has been updated")

    attractions = list(collection.find({"City": destination}))
    return json.dumps(attractions, default=json_util.default)


@app.route('/accommodations-api', methods=["GET"])
def hotels_api():
    destination = request.args.get('destination')

    print(destination)

    collection = db['accommodations']

    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        f = open('tripadvisor_link.json')
        trip_advisor = json.load(f)
        link_dict = trip_advisor[destination.lower()]
        accommodations_url = link_dict['Hotel']
        accommodations_scrape = api_functions.get_hotels(
            accommodations_url, destination)
        collection.insert_many(accommodations_scrape)
        print(f"MongoDB has been updated")

    accommodations = list(collection.find({"City": destination}))
    return json.dumps(accommodations, default=json_util.default)


@app.route('/banner-api', methods=["GET"])
def get_banner():
    destination = request.args.get('destination')
    print(destination)

    collection = db['banner']

    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        f = open('tripadvisor_link.json')
        trip_advisor = json.load(f)
        link_dict = trip_advisor[destination.lower()]
        accommodations_url = link_dict['Hotel']
        accommodations_scrape = api_functions.get_banner(
            accommodations_url, destination)
        collection.insert_many(accommodations_scrape)
        print(f"MongoDB has been updated")

    accommodations = list(collection.find({"City": destination}))
    return json.dumps(accommodations, default=json_util.default)


@app.route('/airbnb-api', methods=["GET"])
def get_airbnb():
    destination = request.args.get('destination')
    print(destination)

    collection = db['airbnb']
    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        airbnb_scrape = api_functions.getairbnb(destination)
        collection.insert_many(airbnb_scrape)
        print(f"MongoDB has been updated")

    airbnb = list(collection.find({"City": destination}))
    return json.dumps(airbnb, default=json_util.default)


@app.route('/tiktok-food-api', methods=["GET"])
def get_food_tiktok():
    destination = request.args.get('destination')
    print(destination)
    collection = db['tiktok_food']
    tiktok_food = list(collection.find({"City": destination}))
    return json.dumps(tiktok_food, default=json_util.default)


@app.route('/tiktok-attraction-api', methods=["GET"])
def get_attr_tiktok():
    destination = request.args.get('destination')
    print(destination)
    collection = db['tiktok_attraction']
    tiktok_attr = list(collection.find({"City": destination}))
    return json.dumps(tiktok_attr, default=json_util.default)


@app.route('/food-api', methods=["GET"])
def food_api():
    destination = request.args.get('destination')
    print(destination)
    collection = db['food']
    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        food_scrape = api_functions.get_food(destination)
        collection.insert_many(food_scrape)
        print(f"MongoDB has been updated")
    food = list(collection.find({"City": destination}))
    return json.dumps(food, default=json_util.default)


@app.route('/traveltips-api', methods=["GET"])
def traveltips_api():
    destination = request.args.get('destination')
    print(destination)
    collection = db['traveltips']
    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        tips_scrape = api_functions.find_tips_from_google(destination)
        collection.insert_many(tips_scrape)
        print(f"MongoDB has been updated")
    tips = list(collection.find({"City": destination}))
    return json.dumps(tips, default=json_util.default)


@app.route('/itinerary-api')
def googleitinerary_api():
    destination = request.args.get('destination')
    days = request.args.get('days')
    print(destination)
    return jsonpickle.encode(api_functions.find_itinerary_from_google(destination, days=days))


@app.route('/airfareprice-api', methods=["GET"])
def airfare_api():
    destination = request.args.get('destination')
    print(destination)
    collection = db['airfare_price']
    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        airfareprice_scrape = api_functions.get_airprices(destination)
        collection.insert_many(airfareprice_scrape)
        print(f"MongoDB has been updated")
    airfareprice = list(collection.find({"City": destination}))
    return json.dumps(airfareprice, default=json_util.default)


@app.route('/planner-api')
def planner_api():
    destination = request.args.get('destination')
    days = request.args.get('days')
    print(days)
    days = int(days)
    print(destination)
    hotel_col = db['accommodations']
    hotels = list(hotel_col.find({"City": destination}))
    # print(hotels)
    attr_col = db['attractions']
    attractions = list(attr_col.find({"City": destination}))
    return jsonpickle.encode(api_functions.get_planner(days=days, hotel=hotels, attractions=attractions))


@app.route('/passengers-api', methods=["GET"])
def passenger_api():
    destination = request.args.get('destination')
    print(destination)
    collection = db['passengers']
    existing = collection.find({'City': destination})
    results = list(existing)
    if len(results) > 0:
        print(f"Records found in MongoDB")
    else:
        passenger_scrape = api_functions.get_passengers(destination)
        collection.insert_many(passenger_scrape)
        print(f"MongoDB has been updated")
    passengers = list(collection.find({"City": destination}))
    return json.dumps(passengers, default=json_util.default)

# @app.route('/attractions')
# @cross_origin()
# def attractions():
#     return jsonpickle.encode([
#         {
#             "name": "St. Peter's Basilica",
#             "activity": "Historic Sites • Points of Interest & Landmarks",
#             "location": "Vatican / Borgo",
#             "ratings": "5.0 of 5",
#             "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/01/ff/1f/photo1jpg.jpg?w=500&h=-1&s=1",
#             "review_url": "https://www.tripadvisor.com/Attraction_Review-g187793-d631111-Reviews-St_Peter_s_Basilica-Vatican_City_Lazio.html#REVIEWS"
#         },
#         {
#             "name": "Duomo di Milano",
#             "activity": "Religious Sites • Churches & Cathedrals",
#             "location": "Centro Storico",
#             "ratings": "4.5 of 5",
#             "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2b/65/8c/natele-al-duomo.jpg?w=500&h=-1&s=1",
#             "review_url": "https://www.tripadvisor.com/Attraction_Review-g187849-d195239-Reviews-Duomo_di_Milano-Milan_Lombardy.html#REVIEWS"
#         },
#         {
#             "name": "Gallerie Degli Uffizi",
#             "activity": "Art Museums",
#             "location": "Florence Historic Center",
#             "ratings": "4.5 of 5",
#             "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/93/4f/fd/uffizi-gallery.jpg?w=500&h=400&s=1",
#             "review_url": "https://www.tripadvisor.com/Attraction_Review-g187895-d191153-Reviews-Gallerie_Degli_Uffizi-Florence_Tuscany.html#REVIEWS"
#         },
#         {
#             "name": "Doge's Palace",
#             "activity": "Speciality Museums • Historic Sites",
#             "location": "San Marco",
#             "ratings": "4.5 of 5",
#             "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/62/d4/a6/20160525-134703-largejpg.jpg?w=500&h=-1&s=1",
#             "review_url": "https://www.tripadvisor.com/Attraction_Review-g187870-d194251-Reviews-Doge_s_Palace-Venice_Veneto.html#REVIEWS"
#         },
#         {
#             "name": "Underground Naples",
#             "activity": "Historic Walking Areas",
#             "location": "Pendino",
#             "ratings": "4.5 of 5",
#             "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/14/ed/76/20190113-115853-largejpg.jpg?w=500&h=400&s=1",
#             "review_url": "https://www.tripadvisor.com/Attraction_Review-g187785-d2466778-Reviews-Underground_Naples-Naples_Province_of_Naples_Campania.html#REVIEWS"
#         },


#     ])


# @app.route('/attractions-api')
# def attractions_api():
#     destination = request.args.get('destination')
#     destination = destination.lower()

#     print(destination)
#     f = open('tripadvisor_link.json')
#     trip_advisor = json.load(f)
#     link_dict = trip_advisor[destination]
#     attractions_url = link_dict['Attractions']
#     return jsonpickle.encode(api_functions.get_attractions(attractions_url))


# @app.route('/accommodations')
# def hotels():
#     return jsonpickle.encode([
#         {
#             "id": 1,
#             "name": "Hotel Moresco",
#             "url": "https://www.tripadvisor.com/Hotel_Review-g187870-d3348175-Reviews-Hotel_Moresco-Venice_Veneto.html",
#             "rating": 5.0
#         },
#         {
#             "id": 2,
#             "name": "Hotel Artemide",
#             "url": "https://www.tripadvisor.com/Hotel_Review-g187791-d205044-Reviews-Hotel_Artemide-Rome_Lazio.html",
#             "rating": 5.0
#         },
#         {
#             "id": 3,
#             "name": "Turin Palace Hotel",
#             "url": "https://www.tripadvisor.com/Hotel_Review-g187855-d8333271-Reviews-Turin_Palace_Hotel-Turin_Province_of_Turin_Piedmont.html",
#             "rating": 5.0
#         },
#         {
#             "id": 4,
#             "name": "Hotel Spadai",
#             "url": "https://www.tripadvisor.com/Hotel_Review-g187895-d230717-Reviews-Hotel_Spadai-Florence_Tuscany.html",
#             "rating": 5.0
#         },
#         {
#             "id": 5,
#             "name": "Hotel Antiche Figure",
#             "url": "https://www.tripadvisor.com/Hotel_Review-g187870-d289202-Reviews-Hotel_Antiche_Figure-Venice_Veneto.html",
#             "rating": 5.0
#         },
#     ])


# @app.route('/accommodations-api')
# def hotels_api():
#     destination = request.args.get('destination')
#     destination = destination.lower()

#     print(destination)

#     f = open('tripadvisor_link.json')
#     trip_advisor = json.load(f)
#     link_dict = trip_advisor[destination]
#     accomodations_url = link_dict['Hotel']
#     return jsonpickle.encode(api_functions.get_hotels(accomodations_url))


# @app.route('/banner-api')
# def get_banner():
#     destination = request.args.get('destination')
#     destination = destination.lower()
#     print(destination)

#     f = open('tripadvisor_link.json')
#     trip_advisor = json.load(f)
#     link_dict = trip_advisor[destination]
#     accomodations_url = link_dict['Hotel']

#     return jsonpickle.encode(api_functions.get_banner(accomodations_url))


# @app.route('/airbnb-api')
# def get_airbnb():
#     destination = request.args.get('destination')
#     print(destination)

#     airbnb_url = 'https://www.airbnb.com.sg/s/' + destination + '/homes'

#     return jsonpickle.encode(api_functions.getairbnb(airbnb_url))


# @app.route('/tiktok-api')
# def get_tiktok():
#     destination = request.args.get('destination')
#     print(destination)
#     tiktok_type = "food"

#     return jsonpickle.encode(api_functions.gettiktok(destination, tiktok_type))


# @app.route('/food-api')
# def food_api():
#     destination = request.args.get('destination')
#     print(destination)
#     return jsonpickle.encode(api_functions.get_food(destination))


# @app.route('/traveltips-api')
# def traveltips_api():
#     destination = request.args.get('destination')
#     print(destination)
#     return jsonpickle.encode(api_functions.find_tips_from_google(destination))


# @app.route('/itinerary-api')
# def googleitinerary_api():
#     destination = request.args.get('destination')
#     days = request.args.get('days')
#     print(destination)
#     return jsonpickle.encode(api_functions.find_itinerary_from_google(destination, days=days))


# @app.route('/airfareprice-api')
# def airfare_api():
#     destination = request.args.get('destination')
#     print(destination)
#     return jsonpickle.encode(api_functions.get_airprices(destination))


# @app.route('/planner-api')
# def planner_api():
#     destination = request.args.get('destination')
#     destination = destination.lower()
#     days = request.args.get('days')
#     days = int(days)
#     print(destination)
#     f = open('tripadvisor_link.json')
#     trip_advisor = json.load(f)
#     link_dict = trip_advisor[destination]
#     accomodations_url = link_dict['Hotel']
#     attractions_url = link_dict['Attractions']
#     hotels = api_functions.get_hotels(accomodations_url)
#     attractions = api_functions.get_attractions(attractions_url)
#     return jsonpickle.decode(jsonpickle.encode(api_functions.get_planner(days=days, hotel=hotels, attractions=attractions)))


# @app.route('/passenger-api')
# def passenger_api():
#     destination = request.args.get('destination')
#     print(destination)
#     return jsonpickle.encode(api_functions.get_passengers(destination))


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
