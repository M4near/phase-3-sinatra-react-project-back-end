import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditTripForm({ trip = {}, updateTrip }) {
  const [trip_title, setTripTitle] = useState(trip.trip_title);
  
  const {id} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTrip(id, {
      trip_title
    });
  };

  useEffect(() => {
    setTripTitle(trip.trip_title);
  }, [trip])

  return (
    <>
    <div className="">
      <h1 className="Edit Trip">Edit Trip: {trip.trip_title}</h1>
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
            onChange={(e) => setTripTitle(e.target.value)}
          />
        </fieldset>

        <button
          className=""
          type="submit"
        >
          Update
        </button>
      </form>
      </div>
    </>
  );
}

export default EditTripForm;