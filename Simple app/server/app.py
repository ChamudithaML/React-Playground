from flask import Flask

app = Flask(__name__)

@app.route('/cats')
def myCats():
    return {"cats": ["Ginger", "Chong", "Grey"]}

if __name__ == '__main__':
    app.run(debug=True)
