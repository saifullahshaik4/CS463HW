let starships = {};

function formatNumStr(s) {
  let n = Number(s);
  if (isNaN(n)) {
    return s;
  } else {
    return n.toLocaleString();
  }
}

const fetchData = (url) => {
  // REtrieve the data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      starships = data.results;
    })
    .catch((error) => console.error(error));
};
fetchData("https://swapi.dev/api/starships/");

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line

  container.classList.add("starship-component");

  const shipname = document.createElement("div");
  shipname.textContent = spaceship.name;

  const creditcost = document.createElement("div");
  creditcost.textContent = formatNumStr(spaceship.cost_in_credits) + " credits";

  const top = document.createElement("div");
  top.classList.add("top-grid");
  top.append(shipname, creditcost);

  const manufacturer = document.createElement("div");
  manufacturer.textContent = "Manufactured by " + spaceship.manufacturer;
  manufacturer.classList.add("middle-grid");

  const maxspeed = document.createElement("div");
  maxspeed.textContent = "Max atmosphering speed";
  const speedstat = document.createElement("span");
  speedstat.textContent = formatNumStr(spaceship.max_atmosphering_speed);
  speedstat.style.fontWeight = "bold";
  maxspeed.prepend(speedstat, document.createElement("br"));
  maxspeed.classList.add("stat-col");

  maxspeed.style.borderRight = "2px solid var(--light-gray)";

  const cargocapacity = document.createElement("div");
  cargocapacity.textContent = "Cargo capacity";
  const cargostat = document.createElement("span");
  cargostat.textContent = formatNumStr(spaceship.cargo_capacity);
  cargostat.style.fontWeight = "bold";
  cargocapacity.prepend(cargostat, document.createElement("br"));
  cargocapacity.classList.add("stat-col");

  const bottom = document.createElement("div");
  bottom.classList.add("bottom-grid");
  bottom.append(maxspeed, cargocapacity);

  container.append(top, manufacturer, bottom);
  return container; // do not modify this line
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  let filteredStarships = [];
  for (const starship of input) {
    let crew = starship.crew;
    if (Number(crew) == NaN) {
      if (crew.includes("-")) {
        crew = crew.split("-")[0];
      } else {
        continue;
      }
    } else {
      crew = Number(crew);
    }
    let passengers = Number(starship.passengers);
    if (passengers == NaN) {
      continue;
    }
    if (passengers < 10 && crew > 1) {
      filteredStarships.push(starship);
    }
  }
  return filteredStarships;
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  let totalCost = 0;

  for (const starship of input) {
    let price = Number(starship.cost_in_credits);
    if (!isNaN(price)) {
      totalCost += price;
    }
  }
  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};
