import React, { useState, useEffect } from 'react';
import './News.css';
import NewsNavbar from './NewsNavbar';

const News = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state added

    useEffect(() => {
        fetch('https://gnews.io/api/v4/search?q=motorcycle&country=au&apikey=4843d1484e82cc8c3d67ec345aff19d2&max=20')
            .then(response => response.json())
            .then(json => {
                setData(json.articles || []); // Ensure articles exist
                setLoading(false); // Stop loading after fetching data
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                setLoading(false);
            });
    }, []);

    return (
        <>
        <NewsNavbar/>
        <div className="news-container-fluid px-3" style={{ backgroundColor: "#E2E2D5" }}>
            {loading ? ( 
                <div className="loading-text">Loading news...</div> // Loading indicator
            ) : (
                <div className="row">
                    {data.map((item, index) => (
                        <div className="col-sm-3 pt-5" key={index}>
                            <div className="news-item">
                                <div className="card text-dark news-card-item news-card-bg">
                                    <img src={item.image} className="news-img-top" alt="Image" height={"150px"} />
                                    <div className="card-body news-card-info">
                                        <h5 className="card-title">{item.title}</h5>
                                        <a href={item.url} className="btn btn-primary d-flex justify-content-center" target="_blank" rel="noopener noreferrer">
                                            Read More
                                        </a>
                                        <p className="card-text text-dark">Author: {item.source.name || 'Unknown'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
};

export default News;
