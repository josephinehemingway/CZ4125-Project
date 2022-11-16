from flask import Flask, request
from flask_cors import CORS, cross_origin
import api_functions
import json
import jsonpickle

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'application/json'

@app.route('/attractions')
@cross_origin()
def attractions():
    return jsonpickle.encode([
        {
            "name": "St. Peter's Basilica",
            "activity": "Historic Sites • Points of Interest & Landmarks",
            "location": "Vatican / Borgo",
            "ratings": "5.0 of 5",
            "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/01/ff/1f/photo1jpg.jpg?w=500&h=-1&s=1",
            "review_url": "https://www.tripadvisor.com/Attraction_Review-g187793-d631111-Reviews-St_Peter_s_Basilica-Vatican_City_Lazio.html#REVIEWS"
        },
        {
            "name": "Duomo di Milano",
            "activity": "Religious Sites • Churches & Cathedrals",
            "location": "Centro Storico",
            "ratings": "4.5 of 5",
            "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2b/65/8c/natele-al-duomo.jpg?w=500&h=-1&s=1",
            "review_url": "https://www.tripadvisor.com/Attraction_Review-g187849-d195239-Reviews-Duomo_di_Milano-Milan_Lombardy.html#REVIEWS"
        },
        {
            "name": "Gallerie Degli Uffizi",
            "activity": "Art Museums",
            "location": "Florence Historic Center",
            "ratings": "4.5 of 5",
            "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/93/4f/fd/uffizi-gallery.jpg?w=500&h=400&s=1",
            "review_url": "https://www.tripadvisor.com/Attraction_Review-g187895-d191153-Reviews-Gallerie_Degli_Uffizi-Florence_Tuscany.html#REVIEWS"
        },
        {
            "name": "Doge's Palace",
            "activity": "Speciality Museums • Historic Sites",
            "location": "San Marco",
            "ratings": "4.5 of 5",
            "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/62/d4/a6/20160525-134703-largejpg.jpg?w=500&h=-1&s=1",
            "review_url": "https://www.tripadvisor.com/Attraction_Review-g187870-d194251-Reviews-Doge_s_Palace-Venice_Veneto.html#REVIEWS"
        },
        {
            "name": "Underground Naples",
            "activity": "Historic Walking Areas",
            "location": "Pendino",
            "ratings": "4.5 of 5",
            "photo": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/14/ed/76/20190113-115853-largejpg.jpg?w=500&h=400&s=1",
            "review_url": "https://www.tripadvisor.com/Attraction_Review-g187785-d2466778-Reviews-Underground_Naples-Naples_Province_of_Naples_Campania.html#REVIEWS"
        },


    ])

@app.route('/attractions-api')
def attractions_api():
    destination = request.args.get('destination')
    print(destination)
    f= open('tripadvisor_link.json')
    trip_advisor= json.load(f)
    link_dict = trip_advisor[destination]
    attractions_url = link_dict['Attractions']
    return jsonpickle.encode(api_functions.get_attractions(attractions_url))


@app.route('/accommodations')
def hotels():
    return jsonpickle.encode([
        {
            "id": 1,
            "name": "Hotel Moresco",
            "url": "https://www.tripadvisor.com/Hotel_Review-g187870-d3348175-Reviews-Hotel_Moresco-Venice_Veneto.html",
            "rating": 5.0
        },
        {
            "id": 2,
            "name": "Hotel Artemide",
            "url": "https://www.tripadvisor.com/Hotel_Review-g187791-d205044-Reviews-Hotel_Artemide-Rome_Lazio.html",
            "rating": 5.0
        },
        {
            "id": 3,
            "name": "Turin Palace Hotel",
            "url": "https://www.tripadvisor.com/Hotel_Review-g187855-d8333271-Reviews-Turin_Palace_Hotel-Turin_Province_of_Turin_Piedmont.html",
            "rating": 5.0
        },
        {
            "id": 4,
            "name": "Hotel Spadai",
            "url": "https://www.tripadvisor.com/Hotel_Review-g187895-d230717-Reviews-Hotel_Spadai-Florence_Tuscany.html",
            "rating": 5.0
        },
        {
            "id": 5,
            "name": "Hotel Antiche Figure",
            "url": "https://www.tripadvisor.com/Hotel_Review-g187870-d289202-Reviews-Hotel_Antiche_Figure-Venice_Veneto.html",
            "rating": 5.0
        },
    ])

@app.route('/accommodations-api')
def hotels_api():
    destination = request.args.get('destination')
    print(destination)

    f= open('tripadvisor_link.json')
    trip_advisor= json.load(f)
    link_dict = trip_advisor[destination]
    accomodations_url = link_dict['Hotel']
    return jsonpickle.encode(api_functions.get_hotels(accomodations_url))

@app.route('/banner')
def get_banner():
    destination = request.args.get('destination')
    print(destination)

    f= open('tripadvisor_link.json')
    trip_advisor= json.load(f)
    link_dict = trip_advisor[destination]
    accomodations_url = link_dict['Hotel']

    return jsonpickle.encode(api_functions.getbanner(accomodations_url))
        
if __name__ == '__main__':
    app.run(debug=True, threaded=True)
