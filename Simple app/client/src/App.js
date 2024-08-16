import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from './components/Cat';

function App() {
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      {data.cats ? data.cats.map(
        (cat, index) => <Cat key={index} cat={cat} />
      ) : <p>Loading...</p>}
    </div>
  );
}

export default App;
