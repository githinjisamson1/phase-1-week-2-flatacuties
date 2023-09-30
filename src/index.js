// Your code here

function handleDOMContentLoaded() {
  // grab elements
  const characterBar = document.querySelector("#character-bar");
  const detailedInfo = document.querySelector("#detailed-info");
  const name = document.querySelector("#name");
  const image = document.querySelector("#image");
  const voteCount = document.querySelector("#vote-count");
  const votesForm = document.querySelector("#votes-form");
  const votes = document.querySelector("#votes");
  const resetBtn = document.querySelector("#reset-btn");

  //   fetch API - all
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

        // display character details
        spanCharacter.addEventListener("click", function (e) {
          //   console.log(e.target);

          name.textContent = character.name;
          image.src = character.image;
          voteCount.textContent = character.votes;

          //   display number of votes from input field
          votesForm.addEventListener("submit", function (e) {
            //   console.log(e.target);

            e.preventDefault();
            voteCount.textContent = votes.value;
          });
        });
      });
    });
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
