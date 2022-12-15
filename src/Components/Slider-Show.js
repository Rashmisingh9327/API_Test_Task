import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Slider_Data from "./Slider-Data";

function Slider_Show() {
  // user data store array
  const [users, fetchUsers] = useState([]);

  // getdata funtion fetch data api
  
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())  
      .then(json => fetchUsers(json))
  };

  // call data effect
  useEffect(() => {
    getData();
  }, []);

  // slick slider effect
  var effects = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <Slider {...effects}>
            {users.map((data) => (
              <div className="col-5 h-100 mx-1" key={data.id}>
                <div className="card box-user bg-danger text-center text-white">
                  <div className="card-body h-100">
                    <Link className="text-white" to={`userdata/${data.id}`}>
                    <h3 className="card-title text-nowrap">{data.username}</h3>

                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slider_Show;
