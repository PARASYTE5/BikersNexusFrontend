import React from 'react';
import './Testomonials.css';
import img1 from './Images/Testimonials_1.png';
import img2 from './Images/Testimonials_2.png';
import img3 from './Images/Testimonials_3.png';
import img4 from './Images/Testimonials_4.png';
import img5 from './Images/Testimonials_5.png';
import img6 from './Images/Testimonials_6.png';


export default function Testimonials() {
  return (
    <div className="testimonials-main-section container-fluid pt-4">
      <h1 className="testimonials-heading text-center">HAPPY CUSTOMERS OF BIKERS NEXON</h1>
      <div id="testimonialsCarousel" className="carousel slide mx-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item mt-3 active">
            <div className="row g-4 py-3">
              <div className="col-md-4">
                <div className="card testimonials-card h-100">
                  <img src={img1} alt="Customer" className="testimonials-img" />
                  <div className="card-body">
                    <p className="testimonials-text card-text fw-bold">"BikersNX is the ultimate hub for bikers! Thrilling challenges, an interactive community, and engaging ride stories keep me hooked." </p>
                    <div className="customer-info">
                      <p className="customer-name fw-bold"> Liam Anderson, Mumbai</p>
                      <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card testimonials-card h-100">
                  <img src={img2} alt="Customer" className="testimonials-img" />
                  <div className="card-body">
                    <p className="card-text fw-bold">"BikersNX’s eCommerce has top-quality biking gear at great prices! Rider reviews helped me pick the perfect jacket. A must-visit for every biker!" </p>
                    <div className="customer-info">
                      <p className="customer-name fw-bold"> Elijah Carter, Delhi</p>
                      <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card testimonials-card h-100">
                  <img src={img3} alt="Customer" className="testimonials-img" />
                  <div className="card-body">
                    <p className="card-text fw-bold">"BikersNX challenges like Bullet Ran and Agnipath pushed my limits! Tracking progress and seeing other riders compete is exciting." </p>
                    <div className="customer-info">
                      <p className="customer-name fw-bold">Mateo Ramirez, Pune</p>
                      <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                        <span className="star">&#9734;</span>
                        <span className="star">&#9734;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item mt-3">
            <div className="row g-4 py-3">
              <div className="col-md-4">
                <div className="card testimonials-card h-100">
                  <img src={img4} alt="Customer" className="testimonials-img img-fluid" />
                  <div className="card-body">
                    <p className="card-text fw-bold">
                      "I love how BikersNX lets me share ride stories, post pictures, and discuss everything from routes to bike modifications."
                    </p>
                    <div className="customer-info">
                      <p className="customer-name fw-bold"> Noah Sullivan, Bengaluru</p>
                      <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card testimonials-card h-100">
                  <img src={img5} alt="Customer" className="testimonials-img" />
                  <div className="card-body">
                    <p className="card-text fw-bold">
                      "Thanks to BikersNX, I found an awesome biking event in my city. The event calendar is super useful, and I got to meet so many fellow riders!"
                    </p>
                    <div className="customer-info">
                      <p className="customer-name fw-bold">Oliver Bennett, Delhi</p>
                      <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                        <span className="star">&#9734;</span>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="col-md-4">
                <div className="card testimonials-card h-100">
                  <img src={img6} alt="Customer" className="testimonials-img" />
                  <div className="card-body">
                    <p className="card-text fw-bold">
                      "Thanks to BikersNX, I found an awesome biking event in my city. The event calendar is super useful, and I got to meet so many fellow riders!"
                    </p>
                    <div className="customer-info">
                      <p className="customer-name fw-bold">Benjamin Foster, Jaipur</p>
                      <div className="stars">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-controls" >
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
