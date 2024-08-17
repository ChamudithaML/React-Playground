import React, { useEffect, useState } from 'react'

function Cat() {

  const [data, setData] = useState({});

  console.log(data.cats);

  useEffect(() => {
    fetch("/cats")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.cats ? data.cats.map(
        (cat, index) => <p key={index}>{cat}</p>
      ) : <p>Loading...</p>}
    </div>
  )
}

export default Cat;