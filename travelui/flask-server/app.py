from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/attractions')
@cross_origin()
def attractions():
    return [
        {
            "url": "https://www.ricksteves.com/europe/italy/itinerary",
            "title": "Italy Itinerary: Where to Go in Italy by Rick Steves",
            "cities": [
                "Rome",
                "Milan",
                "Naples",
                "Florence",
                "Venice",
                "Verona",
                "Bolzano",
                "Pisa",
                "Como",
                "Siena",
                "Best",
                "Assisi",
                "Orvieto",
                "Sorrento",
                "Lake Como",
                "Italy",
                "Vernazza",
                "Varenna",
                "Civita",
                "Castelrotto",
                "Pompeii"
            ]
        },
        {
            "url": "https://wanderlustcrew.com/10-days-in-italy/",
            "title": "How to Spend 10 Days in Italy: 5 Amazing Itinerary Ideas for your Trip to Italy | Wanderlust Crew",
            "cities": [
                "London",
                "Rome",
                "Paris",
                "Milan",
                "Naples",
                "Florence",
                "Venice",
                "Livorno",
                "Cagliari",
                "David",
                "Tours",
                "La Spezia",
                "Pisa",
                "Mestre",
                "Lucca",
                "Como",
                "Olbia",
                "Siena",
                "Santa Lucia",
                "Amalfi",
                "Vinci",
                "Much",
                "San Gimignano",
                "Star",
                "San Vito Lo Capo",
                "Murano",
                "Garda",
                "Positano",
                "Bellagio",
                "Campo",
                "Menaggio",
                "Sardinia",
                "Ponte",
                "Lago",
                "Lake Como",
                "Riomaggiore",
                "Lake",
                "Don",
                "Italy",
                "Atrani",
                "Vernazza",
                "Duomo",
                "Varenna",
                "Spanish",
                "Island",
                "Peter",
                "Colosseum",
                "Sicily",
                "Click",
                "Cost",
                "Monterosso",
                "Piazza",
                "Isola Bella",
                "Swiss",
                "Burano",
                "Corniglia",
                "Manarola",
                "Switzerland",
                "Euro",
                "Palace",
                "Buonarroti",
                "Ponte Vecchio",
                "Gondola"
            ]
        }
    ]


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
