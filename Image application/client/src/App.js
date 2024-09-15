import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css'

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
        <div className='main-container'>
            <div className="d-flex flex-column align-items-center mt-3">
                <h1>Image Upload</h1>
                <p>This project is for practicing image uploading to a server and saving the image on the server using Python</p>
                <input
                    type="file"
                    className="form-control mb-3 w-50 mt-3"
                    onChange={handleFileChange}
                />
                <button
                    className="btn btn-primary w-50"
                    onClick={handleUpload}
                >
                    Upload
                </button>
            </div>
        </div>
    );
}

export default App;
