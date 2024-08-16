import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', file);

        axios.post('http://localhost:5000/upload', formData)
            .then((response) => {
                alert('File uploaded successfully');
            })
            .catch((error) => {
                alert('Error uploading file');
            });
    };

    return (
        <div className="App">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default App;
