// Write your helper functions here!

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let ele = document.getElementById("missionTarget");
  ele.innerHTML = `<h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`;

  // let head = document.createElement("h2");
  // head.innerHTML = "Mission Destination";

  // let planetImg = document.createElement("img");
  // planetImg.src = imageUrl;
  
  // let planetItems = document.createElement("ol");
  // let liName = document.createElement("li");
  // let liDiameter = document.createElement("li");
  // let liStar = document.createElement("li");
  // let liDistance = document.createElement("li");
  // let liMoons = document.createElement("li");

  // liName.innerHTML = `Name: ${name}`;
  // liDiameter.innerHTML = `Diameter: ${diameter}`;
  // liStar.innerHTML = `Star: ${star}`;
  // liDistance.innerHTML = `Distance from Earth: ${distance}`;
  // liMoons.innerHTML = `Number of Moons: ${moons}`;
  
  // planetItems.appendChild(liName);
  // planetItems.appendChild(liDiameter);
  // planetItems.appendChild(liStar);
  // planetItems.appendChild(liDistance);
  // planetItems.appendChild(liMoons);

  // ele.appendChild(head);
  // ele.appendChild(planetItems);
  // ele.appendChild(planetImg);
  // Here is the HTML formatting for our mission target div.
  /*
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: </li>
                   <li>Diameter: </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: </li>
                   <li>Number of Moons: </li>
               </ol>
               <img src="">
  */
}

function validateInput(testInput) {
  if (testInput.length === 0) {
    return "Empty";
  } else if (Number.isNaN(Number(testInput))) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
    let informative = document.querySelector("#launchStatus");
    list.style.visibility = "hidden";
    informative.innerHTML = "Awaiting Information Before Launch";
    informative.style.color = "";
    alert("Make sure to enter valid information for each field!")
    return false;
  } else {
    let listItems = list.querySelectorAll("li");
    listItems[0].innerHTML = `Pilot ${pilot} is ready for launch`;
    listItems[1].innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (Number(fuelLevel) < 10000) {
      listItems[2].innerHTML = "Fuel level too low for launch";
    } else {
      listItems[2].innerHTML = "Fuel level high enough for launch"
    }

    if (Number(cargoLevel) > 10000) {
      listItems[3].innerHTML = "Cargo mass too heavy for launch"
    } else {
      listItems[3].innerHTML = "Cargo mass low enough for launch"
    }

    let header = document.querySelector("#launchStatus");
    if (Number(fuelLevel) < 10000 || Number(cargoLevel) > 10000) {
      header.style.color = "rgb(199, 37, 78)";
      header.innerHTML = "Shuttle Not Ready for Launch";
    } else {
      header.style.color = "rgb(65, 159, 106)";
      header.innerHTML = "Shuttle is Ready for Launch";
    }
    list.style.visibility = "visible";
    return true;
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}
