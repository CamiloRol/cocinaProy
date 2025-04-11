import React from "react";
import Recipes from "./Recipes";

export default function Carrousel(){

    return(
    
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://th.bing.com/th/id/R.b1cb3ad4d6dad2d04bc3f7c8a37ef662?rik=nn0z5fx6Uvfpog&pid=ImgRaw&r=0"
              className="d-block mx-auto"
              style={{ width: "100%", height: "auto" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.fOWRmQQgEhjueANMW8k7kgHaE8?rs=1&pid=ImgDetMain"
              className="d-block mx-auto"
              style={{ width: "100%", height: "auto" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.dB9RW6g_PNnGgPKOwv-sQQHaEK?rs=1&pid=ImgDetMain"
              className="d-block mx-auto"
              style={{ width: "130%", height: "auto" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      )
    
    
;}