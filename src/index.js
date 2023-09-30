// Your code here

function handleDOMContentLoaded() {
  // grab elements
  const characterBar = document.querySelector("#character-bar");
  const detailedInfo = document.querySelector("#detailed-info");
  const image = document.querySelector("#image");
  const voteCount = document.querySelector("#vote-count");
  const votesForm = document.querySelector("#votes-form");
  const votes = document.querySelector("#votes");
  const resetBtn = document.querySelector("#reset-btn");

  //   fetch API
  fetch("http://localhost:3000/characters")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      //   see all character names in a div
      data.map((character) => {
        const spanCharacter = document.createElement("span");
        spanCharacter.textContent = character.name;
        characterBar.appendChild(spanCharacter);
      });
    });
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
