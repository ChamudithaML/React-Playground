import requests

games = [
    {"id": 1, "title": "The Witcher 3: Wild Hunt", "developer": "CD Projekt Red", "year": 2015},
    {"id": 2, "title": "Red Dead Redemption 2", "developer": "Rockstar Games", "year": 2018},
    {"id": 3, "title": "The Legend of Zelda: Breath of the Wild", "developer": "Nintendo", "year": 2017},
    {"id": 4, "title": "God of War", "developer": "Santa Monica Studio", "year": 2018},
    {"id": 5, "title": "Cyberpunk 2077", "developer": "CD Projekt Red", "year": 2020},
    {"id": 6, "title": "Horizon Zero Dawn", "developer": "Guerrilla Games", "year": 2017},
    {"id": 7, "title": "Sekiro: Shadows Die Twice", "developer": "FromSoftware", "year": 2019},
    {"id": 8, "title": "Elden Ring", "developer": "FromSoftware", "year": 2022},
    {"id": 9, "title": "Ghost of Tsushima", "developer": "Sucker Punch Productions", "year": 2020},
    {"id": 10, "title": "Spider-Man", "developer": "Insomniac Games", "year": 2018}
]

def get_games():
    return games

OMDB_API_KEY = "6eba8d28"

def get_movies(request):    
    title = request.args.get('title', 'Inception')  
    params = {
        'apikey': OMDB_API_KEY,
        't': title 
    }

    response = requests.get('http://www.omdbapi.com/', params=params)
    return response
