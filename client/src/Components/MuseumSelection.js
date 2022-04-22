import MuseumCards from "./MuseumCards"

function MuseumSelection({ museumData, tripsData, setTripsData, addVisit }) {

  const mapMuseumData = museumData.map((museum) => <MuseumCards key={museum.id} museum={museum} tripsData={tripsData} setTripsData={setTripsData} addVisit={addVisit}/>)

  return (
    <div className="backgrounds">
    <div className= "museum">
      {mapMuseumData}
    </div>
    </div>
  );
}

export default MuseumSelection;