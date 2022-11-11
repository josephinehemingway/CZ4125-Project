from flask import Flask
app = Flask(__name__)


@app.route('/attractions')
def attractions():
    return{"attractions": ["USS", "Zoo", "Adventure Cove"]}


if __name__ == '__main__':
    app.run(debug=True)
