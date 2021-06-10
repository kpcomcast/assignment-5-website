// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listContainer = document.querySelector("#faultyItems");
  listContainer.style.visibility = "hidden";
  let inform = document.querySelector("#launchStatus");
  let pilotName = document.querySelector("input[name=pilotName]");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoLevel = document.querySelector("input[name=cargoMass]");
  
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    let formInputs = form.querySelectorAll("input[type=text]");
    let formFilled = true;
    for (let i of formInputs) {
      if (i.value === "") {
        formFilled = false;
      }
    }
    if (!formFilled) {
      listContainer.style.visibility = "hidden";
      inform.innerHTML = "Awaiting Information Before Launch";
      inform.style.color = "";
      event.preventDefault();
      alert("All fields are required!");
      return false;
    }
    
    
    let results = formSubmission(document, listContainer, pilotName.value, copilotName.value, fuelLevel.value, cargoLevel.value)
    if (!results) {
      event.preventDefault();
      return false;
    } else {
      event.preventDefault();
    }

  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
  }).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let pick = pickPlanet(listedPlanets);
    addDestinationInfo(document, pick.name, pick.diameter, pick.star, pick.distance, pick.moons, pick.image);
  })

});