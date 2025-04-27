
function Place(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  
  
  Place.prototype.getDetails = function() {
    return `${this.location} - Visited in ${this.timeOfYear}. Notable landmarks: ${this.landmarks.join(", ")}. Notes: ${this.notes}`;
  };

  let placesVisited = [];
  

  function addPlace(location, landmarks, timeOfYear, notes) {
    let newPlace = new Place(location, landmarks, timeOfYear, notes);
    placesVisited.push(newPlace);
  }
  

  function displayPlaces() {
    const placesList = document.getElementById('placesList');
    placesList.innerHTML = '';
    placesVisited.forEach(place => {
      const placeDiv = document.createElement('div');
      placeDiv.classList.add('place');
      placeDiv.innerHTML = `
        <h3>${place.location}</h3>
        <p>Landmarks: ${place.landmarks.join(", ")}</p>
        <p>Visited in: ${place.timeOfYear}</p>
        <p>Notes: ${place.notes}</p>
      `;
      placesList.appendChild(placeDiv);
    });
  }

  document.getElementById('placeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const location = document.getElementById('location').value;
    const landmarks = document.getElementById('landmarks').value.split(",").map(item => item.trim());
    const timeOfYear = document.getElementById('timeOfYear').value;
    const notes = document.getElementById('notes').value;
  
    
    addPlace(location, landmarks, timeOfYear, notes);

    displayPlaces();
  
   
    document.getElementById('placeForm').reset();
  });
  