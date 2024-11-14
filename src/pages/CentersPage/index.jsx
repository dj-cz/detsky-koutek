import './style.css';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from "react"


export const CentersPage = () => {

    const [centers, setCenter] = useState([])

    useEffect(() => {
      const fetchCenter = async () => {
          
              const response = await fetch('http://localhost:4000/api/centers');
              const result = await response.json();
              setCenter(result.data);
      };
  
      fetchCenter();
    }, []);


  return (
    <div className="container">
      <h1>Pobočky</h1>
      <nav className="centersList">
        {centers.map((center) => <Link key={center.id} to={`/centers/${center.id}`}>Pobočka {center.name}</Link>)}
      </nav>
      <Outlet />

    </div>
  );
};


  