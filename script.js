//You can edit ALL of the code here
// Created global variables to get a global scope on all variables not to rewrite the same line of code.
const allEpisodes = getAllEpisodes();
const displayEpisode = document.querySelector(".selectBar");
let root = document.getElementById("root");
const selectEpisodeButton = document.createElement("select");
displayEpisode.appendChild(selectEpisodeButton);
//______________________________________________________//

// The functions takes the addEpisodeList with the parameter of allEpisodes and itirate through it and display it on the page. It links the seach bar function and the addEpisodeList function to have the page work in unison with one another as the search bar is set at a zero index.
function setup () {
  addEpisodeList(allEpisodes);
  selectMenu(allEpisodes);
  let search = document.getElementsByClassName("search-bar-input");
  search[0].addEventListener('input', searchBar); 
  selectEpisodeButton.addEventListener("change", selectEpisode);
};
//_______________________________________________________//

// In this function I'm creating a search event that filters through my array of objects via the allEpisode variable and convert everything to upper case as the keys fire via the event target value route, checking if the value inputted is the same as the value in the cards of the episode name or summary. 
function searchBar (event) {
  addEpisodeList(allEpisodes.filter((episode) => {
    return episode.name.toUpperCase().includes(event.target.value.toUpperCase()) || episode.summary.toUpperCase().includes(event.target.value.toUpperCase())
  }));
}
//___________________________________________________________//

// This function filters through the array of objects and print it to the select bar.
function selectMenu(episodesArray) {
  const option = document.createElement("option");
  option.innerText = 'All';
  selectEpisodeButton.appendChild(option);
  episodesArray.forEach((episode) => {
    const option = document.createElement('option');
    option.innerText = `S0${episode.season}E0${episode.number} - ${episode.name}`;
    selectEpisodeButton.appendChild(option);
  })
}

function selectEpisode(selectElement) {
  let displayEpisode = selectElement.target.value;
  if (displayEpisode === 'All') {
    addEpisodeList(allEpisodes);
  }
  else {
    let chooseEpisode = displayEpisode.substring(
      displayEpisode.indexOf("-") + 2
    );
    let filteredEpisode = allEpisodes.filter(
      (episode) => episode.name === chooseEpisode
    );
    addEpisodeList(filteredEpisode);
  }
}
//_____________________________________________________//

// This function takes the addEpisode function (card) and create each episode with a new card as it itirates through the array of objects and append it to the root div. It also clears the root div for every search done, it also displays how much episodes is being displayed on the page by checking the array as the search is being done. 
function addEpisodeList (episodesArray) {
  root.setAttribute('class', 'container');
  root.innerHTML = ''; // clearing my container.
  const totalEpisodes = allEpisodes.length;
  root.innerHTML = `Displaying ${episodesArray.length} of ${totalEpisodes}`;
  episodesArray.forEach((episode) => {
    addEpisode(episode); // draw one box for one episode.
  });
}

// Creating a card that contains only one episode in the array of objects.
function addEpisode(episode) {
  // Creating a div tag to be the holding div of the card that will be stored in the root div in my HTML.
  let divTag = document.createElement('div');
  root.appendChild(divTag);
  divTag.setAttribute('class', 'card'); // creating a class called card for the div to be accessed with.

  //In this step I created a div tag, placed my image tag inside of it as it is easier to style and center the image using the div tag. 
  let divImg = document.createElement('div');
  divImg.setAttribute('class', 'div-image');
  divTag.appendChild(divImg);
  let imgTag = document.createElement('img');
  divImg.appendChild(imgTag);
  imgTag.src = episode.image.medium;
  imgTag.setAttribute('class', 'image');

  // This h3 tag stores the name of the episodes
  let h3Tag = document.createElement('h3');
  divTag.appendChild(h3Tag);
  h3Tag.innerText = episode.name;
  h3Tag.setAttribute('class', 'h3Tag');

  // This h4 tgag stores the season and episode number of card.
  let h4Tag = document.createElement('h4');
  divTag.appendChild(h4Tag);
  h4Tag.innerText = `S0${episode.season}E0${episode.number}`;
  h4Tag.setAttribute('class', 'h4Tag');

  // This h4 tag is storing the summary of the episode in the card.
  let h4Tag2 = document.createElement('h4');
  divTag.appendChild(h4Tag2);
  h4Tag2.innerHTML = episode.summary;
  h4Tag2.setAttribute('class', 'h4Tag2');
}
//_______________________________________//

window.onload = setup;