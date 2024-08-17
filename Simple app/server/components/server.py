from components import app
from flask import Flask, jsonify, request

from components.simple_api_calls import get_games
from components.simple_api_calls import get_movies

@app.route('/cats')
def cats():
    return {"cats": ["Ginger", "Chong", "Grey"]}

@app.route('/games')
def games():
    return jsonify(get_games)

@app.route('/movies')
def movies():
    
    response = get_movies(request)
    
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch data from OMDb"}), response.status_code
    
