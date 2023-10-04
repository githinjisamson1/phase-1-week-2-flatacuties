function handleVotesFormSubmission(e, characterVotes) {
  // prevent refresh default behavior
  e.preventDefault();

  const votesValue = document.querySelector("#votes").value;
  characterVotes.innerHTML = votesValue;

  //   clear form values upon submission
  e.target.reset();
}

function handleSpanCharacterClick(e, animal) {
  const characterName = document.querySelector("#name");
  const img = document.querySelector("#image");
  const characterVotes = document.querySelector("#vote-count");

  const votesForm = document.querySelector("#votes-form");

  //   manipulate dom
  characterName.innerHTML = animal.name;
  img.src = animal.image;
  characterVotes.innerHTML = animal.votes;

  //   submitting form
  votesForm.addEventListener("submit", (e) => {
    handleVotesFormSubmission(e, characterVotes);
  });
}

function seeAllCharacters(data) {
  // iterate received data
  data.forEach((animal) => {
    const characterBar = document.querySelector("#character-bar");
    const spanCharacter = document.createElement("span");

    // manipulate dom
    spanCharacter.innerHTML = animal.name;
    characterBar.appendChild(spanCharacter);

    // clicking one character
    spanCharacter.addEventListener("click", (e) => {
      handleSpanCharacterClick(e, animal);
    });
  });
}

function handleDOMContentLoaded(e) {
  // fetch API - all
  fetch("http://localhost:3000/characters")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      seeAllCharacters(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// wait HTML to load first
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
