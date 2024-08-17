import React, { useEffect, useState } from 'react'

function Movies() {

    const [movie, setMovie] = useState({});

    useEffect(
        () => {
            fetch("/movies")
                .then(response => response.json()).then(data => setMovie(data))
                .catch(err => console.log("Couldn't fetch data", err))
        }, []
    )

    // console.log(Object.entries(movie));
    // console.log(Object.entries(movie)[1]);
    // console.log(Object.entries(movie)[1][0]);

    // console.log(movie)

    return (
        <div>

            {Object.entries(movie).map(
                ([key, value], index) => <p key={index}>key : {key} --- value : {typeof (value) === 'string' ? value : JSON.stringify(value)}</p>
            )}

            {/* {movie['Title']} */}
        </div>
    )
}

export default Movies;
