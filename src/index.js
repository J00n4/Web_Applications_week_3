import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  let container_div = document.createElement("div");
  container_div.className = "container";
  console.log("This is working");
  for (var amount = 0; amount < 5; amount++) {
    console.log("This is also working");
    let item = document.createElement("div");
    let header = document.createElement("h1");
    let content = document.createElement("div");
    let text = document.createElement("p");
    let image_container = document.createElement("div");
    let image = document.createElement("img");
    item.className = "wiki-item";
    header.className = "wiki-header";
    content.className = "wiki-content";
    text.className = "wiki-text";
    image_container.className = "img-container";
    //image.setAttribute("id", "wiki-img");
    image.className = "wiki-img";
    image.src = "";

    var htext = document.createTextNode("");
    if (amount === 0) {
      htext.textContent = "Shiba";
      image.setAttribute("id", "wiki-img1");
      text.setAttribute("id", "wiki-text1");
      loadJson("shiba");
      loadShiba();
      //var htext = document.createTextNode("Shiba");
    }
    if (amount === 1) {
      htext.textContent = "Puggle";
      image.setAttribute("id", "wiki-img2");
      text.setAttribute("id", "wiki-text2");
      loadJson("puggle");
      loadPuggle();
      //loadJson(htext.nodeValue);
      //var htext = document.createTextNode("Puggle");
    }
    if (amount === 2) {
      htext.textContent = "Pitbull";
      image.setAttribute("id", "wiki-img3");
      text.setAttribute("id", "wiki-text3");
      loadJson("pitbull");
      loadPitbull();
      //var htext = document.createTextNode("Pitbull");
    }
    if (amount === 3) {
      htext.textContent = "Husky";
      image.setAttribute("id", "wiki-img4");
      text.setAttribute("id", "wiki-text4");
      loadJson("husky");
      loadHusky();
      //var htext = document.createTextNode("Stbernard");
    }
    if (amount === 4) {
      htext.textContent = "Doberman";
      image.setAttribute("id", "wiki-img5");
      text.setAttribute("id", "wiki-text5");
      loadJson("doberman");
      loadDoberman();
      //var htext = document.createTextNode("Doberman");
    }
    header.appendChild(htext);
    console.log(htext.nodeValue);
    //loadJson(htext.nodeValue);
    //header.textContent = "Breed X";
    var ptext = document.createTextNode("Some text about this breed.");
    text.appendChild(ptext);
    //text.innerText = "Some text about this breed.";

    image_container.appendChild(image);
    content.appendChild(image_container);
    content.appendChild(text);
    item.appendChild(header);
    item.appendChild(content);
    console.log("Still working!");
    container_div.appendChild(item);
    console.log(image);
  }
  var adding = document.getElementById("app");
  adding.appendChild(container_div);

  /*fetch("https://dog.ceo/api/breed/shiba/images/random")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log("right here");
      console.log(data);
      display_image(data.message);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });*/

  /*async function loadJson(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    console.log(url);
    let response = await fetch(url);

    let picture = await response.json();
    let newBreedPicture = document.createElement("div");
    newBreedPicture.appendChild(picture);
    //console.log(pictures);

    //pictures.forEach((picture) => {
    //addNewBreed(picture.title);
  }*/
}

async function loadJson(breed) {
  let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
  console.log(url);
  let response = await fetch(url);

  let pictures = await response.json();
  console.log(pictures);
  if (breed === "shiba") {
    display_image(pictures.message, 1);
  }
  if (breed === "puggle") {
    display_image(pictures.message, 2);
  }
  if (breed === "pitbull") {
    display_image(pictures.message, 3);
  }
  if (breed === "husky") {
    display_image(pictures.message, 4);
  }
  if (breed === "doberman") {
    display_image(pictures.message, 5);
  }
  /*pictures.forEach((picture) => {
    display_image(picture);
  });*/

  //display_image(picture);
  //let newBreedPicture = document.createElement("div");
  //newBreedPicture.appendChild(picture);
  //console.log(pictures);

  //pictures.forEach((picture) => {
  //addNewBreed(picture.title);
}

async function loadShiba() {
  let url = "https://en.wikipedia.org/api/rest_v1/page/summary/shiba";

  console.log(url);
  let response = await fetch(url);

  let info = await response.json();
  display_info(info.extract, 1);
}

async function loadPuggle() {
  let url = "https://en.wikipedia.org/api/rest_v1/page/summary/puggle";

  console.log(url);
  let response = await fetch(url);

  let info = await response.json();
  display_info(info.extract, 2);
}

async function loadPitbull() {
  let url = "https://en.wikipedia.org/api/rest_v1/page/summary/pitbull";

  console.log(url);
  let response = await fetch(url);

  let info = await response.json();
  display_info(info.extract, 3);
}

async function loadHusky() {
  let url = "https://en.wikipedia.org/api/rest_v1/page/summary/husky";

  console.log(url);
  let response = await fetch(url);

  let info = await response.json();
  display_info(info.extract, 4);
}

async function loadDoberman() {
  let url = "https://en.wikipedia.org/api/rest_v1/page/summary/doberman";

  console.log(url);
  let response = await fetch(url);

  let info = await response.json();
  display_info(info.extract, 5);
}

function display_info(info, num) {
  if (num === 1) {
    document.getElementById("wiki-text1").textContent = info;
  }
  if (num === 2) {
    document.getElementById("wiki-text2").textContent = info;
  }
  if (num === 3) {
    document.getElementById("wiki-text3").textContent = info;
  }
  if (num === 4) {
    document.getElementById("wiki-text4").textContent = info;
  }
  if (num === 5) {
    document.getElementById("wiki-text5").textContent = info;
  }
}

function display_image(source, num) {
  /*var element = document.getElementById("wiki-img").src;
  console.log(element);
  element.forEach((source) => {
    element.src = source;
  });*/
  if (num === 1) {
    document.getElementById("wiki-img1").src = source;
  }
  if (num === 2) {
    document.getElementById("wiki-img2").src = source;
  }
  if (num === 3) {
    document.getElementById("wiki-img3").src = source;
  }
  if (num === 4) {
    document.getElementById("wiki-img4").src = source;
  }
  if (num === 5) {
    document.getElementById("wiki-img5").src = source;
  }
}

/*function addNewBreed(picture) {
  const theContainer = document.getElementsByClassName("img-container");
  let newBreedPicture = document.createElement("img");
  console.log("testing");
  console.log(picture.value);
  newBreedPicture.appendChild(picture);
  theContainer.appendChild(newBreedPicture);
}*/
//}
