import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Slider_Data({ match }) {
  const [user, fetchUser] = useState([]);
  const params = useParams();
    // getdata funtion fetch data api
  const getData = async () => {
   await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => res.json())
      .then(json => fetchUser(json));
  };
 
  // call data effect
  useEffect(() => {
    getData();
  }, []);

  return (<div className="col-5 box-center">
      <div className="card bg-danger text-center text-white">
        <div className="card-body h-100">
          <h3 className="card-title text-nowrap">FullName :- {user.name}</h3>
          <h3 className="card-title text-nowrap mt-2">Email :- {user.email}</h3>
        </div>
      </div>
    </div>
  );
}

export default Slider_Data;
