import React, { useState } from 'react';

function MuseumCards({ museum, mapTripsData, tripsData, setTripsData, addVisit}) {
    // const [trip, setTrip] = useState([]);

    // const [favorited, setFavorited] = useState(false);

    // function handleStar() {
    //     setFavorited(!favorited)
    // };

    // const [museum_id, setMuseum_id] = useState();
    // const [city_id, setCity_id] = useState();
    // const [trip_id, setTrip_id] = useState();
    // const [notes, setNotes] = useState();
    
    let museum_id = museum.id
    let city_id = museum.city_id

    const handleOnChange = async (e) => {
        e.preventDefault();
        let trip_id = e.target.value
        addVisit({
            museum_id,
            city_id,
            trip_id
        //   notes,
        })
      };

    return (
        <div className="card">
            <div className="image">
                <img src={museum.image} alt={museum.name} />
            </div>
            <div className="details">
                <strong>{museum.name}</strong>
                <br/>
                <strong>{museum.description} </strong>
                <strong> {`${museum.address} ${museum.city.city_name}, ${museum.zipcode}, Texas`}</strong>
                <br/>
                <a href={`${museum.weburl}`}><strong> Museum's Website </strong></a>
                <fieldset className="">
                <label className="" htmlFor="tripsData">
                    Add to Trip:
                    </label>
                    <select
                    // value={trip}
                    onChange={(e) => handleOnChange(e)}
                    >
                    <option>Create New Trip</option>
                    {tripsData.map((trip) => <option key={trip.id} value={trip.id}>{trip.trip_title}</option>)}
                    </select>
            </fieldset>
                {/* {favorited ? (
                    <button onClick={handleStar} className="emoji-button favorite active">★</button>
                ) : (
                    <button onClick={handleStar} className="emoji-button favorite">☆</button>
                )} */}
            </div>
        </div>
    );
}



export default MuseumCards;