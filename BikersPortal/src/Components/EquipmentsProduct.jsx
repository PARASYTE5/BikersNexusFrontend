import React, { useEffect, useState } from 'react';


const EquipmentsProduct = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch()
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="new-in-section">
      <h2 className="section-title text-center pt-3">New In</h2>
      <div id="carouselEquipments" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="Cardrow row">
              {data.map((item) => (
                <div className="col-md-3" key={item.id}>
                  <div className="card">
                    <img src={item.image} alt={item.title} className="card-img-top" />
                    <div className="card-body text-center">
                      <h5 className="card-title text-dark">{item.title}</h5>
                      <p className="card-text">${item.price}</p>
                      <button className="btn btn-primary">Shop Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentsProduct;
