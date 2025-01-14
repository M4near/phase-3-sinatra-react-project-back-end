import React, { useState } from 'react';

function NewTripForm({addTrip}) {
    const [trip_title, setTrip_title] = useState();
    const [city_id, setCity_id] = useState();
   


    const handleSubmit = async (e) => {
        // e.preventDefault();
    
        addTrip({
          trip_title
        })
      };

    return (
        <>
      <h1 className="new-trip-form-title">New Trip</h1>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newMuseumFieldset">
          <label className="" htmlFor="name">
            Trip Title:
          </label>
          <input
            type="text"
            className="input"
            name="name"
            id="name"
            value={trip_title}
            onChange={(e) => setTrip_title(e.target.value)}
          />
        </fieldset>

        <button
          className=""
          type="submit"
        >
          Add Trip
        </button>
      </form>
    </>
  );
    
}

export default NewTripForm;