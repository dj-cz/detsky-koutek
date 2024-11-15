import './style.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


export const CenterDetail = () => {

  const { id } = useParams();
  const [detail, setDetail] = useState({name:""});

  useEffect(() => {
    const fetchDetail = async () => {

        const response = await fetch(`http://localhost:4000/api/centers/${id}`);
        const result = await response.json();
        setDetail(((prevState) => ({
          ...prevState,
          name: result.data.name,
          address: result.data.address,
          info: result.data.info,
          openMon: result.data.open.mon,
          openTue: result.data.open.tue,
          openWed: result.data.open.wed,
          openThu: result.data.open.thu,
          openFri: result.data.open.fri,
          openSat: result.data.open.sat,
          openSun: result.data.open.sun
        })));
    };
  
        fetchDetail();
   }, [id]);


  return (
    <div className="container">
      
      <h1>Informace o pobočce {detail.name}</h1>
      <p>Adresa: {detail.address}</p>
      <p>Kapacita: {detail.capacity}</p>
      <h3>Otevírací doba:</h3>
            <table>
                <tr>
                    <td>Pondělí: </td>
                    <td>{detail.openMon}</td>
                </tr>
                <tr>  
                    <td>Úterý: </td>
                    <td>{detail.openTue}</td>
                </tr>
                <tr>
                    <td>Středa: </td>
                    <td>{detail.openWed}</td>
                </tr>
                <tr>
                    <td>Čtvrtek: </td>
                    <td>{detail.openThu}</td>
                </tr>
                <tr>
                    <td>Pátek: </td>
                    <td>{detail.openFri}</td>
                </tr>
                <tr>
                    <td>Sobota: </td>
                    <td>{detail.openSat || "Zavřeno"}</td>
                </tr>
                <tr>
                    <td>Neděle: </td>
                    <td>{detail.openSun || "Zavřeno"}</td>
                </tr>
            </table>
      <p>Info: {detail.info}</p>
    </div>
 
  );
};
