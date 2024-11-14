import './style.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


export const CenterDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {

        const response = await fetch(`http://localhost:4000/api/centers/${id}`);
        const result = await response.json();
        setDetail(result.data);
    };

    fetchDetail();
  }, [id]);

  return (
    <div className="container">
      Info
      <h1>Informace o pobočce {detail.name}</h1> 
       <p>Adresa: {detail.address}</p>
      <p>Kapacita: {detail.capacity}</p>
      <h3>Otevírací doba:</h3>
      <p>{detail.open}</p>
      <p>Info:{detail.info}</p>
    </div>
 
  );
};
