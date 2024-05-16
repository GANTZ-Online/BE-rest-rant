const React = require('react');
const Default = require('../default');

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6" key={place.id}>
        <h2>
          <a href={`/places/${place.id}`} >
            {place.name}
          </a>
        </h2>
        <a href={`/places/${place.id}`}>
          <img src={place.pic} alt={place.name} />
        </a>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Default>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        {placesFormatted}
      </main>
    </Default>
  );
}

module.exports = index;

  