from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'application/json'


@app.route('/attractions')
@cross_origin()
def attractions():
    return [
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
    ]


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
