//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
const totalEpisodes = allEpisodes.length;

function searchBar (event) {
  // console.log(event.target.value);
  const getEpisodes = getAllEpisodes();
  addEpisodeList(getEpisodes.filter((episode) => {
    return episode.name.toUpperCase().includes(event.target.value.toUpperCase()) || episode.summary.toUpperCase().includes(event.target.value.toUpperCase())

  }));
}

function setup () {
  const allEpisodes = getAllEpisodes();
  addEpisodeList(allEpisodes);
  let search = document.getElementsByClassName("search-bar-input");
  search[0].addEventListener('input', searchBar);
  // let [search] = document.getElementsByClassName("search-bar-input");
  // search.addEventListener('change', searchBar); 
};

function addEpisodeList (episodes) {
  const root = document.getElementById('root');
  root.setAttribute('class', 'container');
  root.innerHTML = ''; // clearing my container.
  root.innerHTML = `Showing eposide ${episodes.length} of ${totalEpisodes}`;
  // console.log(`Showing eposide ${episodes.length} of ${totalEpisodes}`);
  episodes.forEach(episode => {
    addEpisode(episode); // draw one box for one episode.
  });
}

function addEpisode(episode) {
  let divTag = document.createElement('div');
  root.appendChild(divTag);
  divTag.setAttribute('class', 'card'); // creating a class called card for the div to be accessed with.

  //In this step I created a div tag, placed my image tag inside of it as it is easier to style and center the image. 
  let divImg = document.createElement('div');
  divImg.setAttribute('class', 'div-image');
  divTag.appendChild(divImg);
  let imgTag = document.createElement('img');
  divImg.appendChild(imgTag);
  imgTag.src = episode.image.medium;
  imgTag.setAttribute('class', 'image');

  let h3Tag = document.createElement('h3');
  divTag.appendChild(h3Tag);
  h3Tag.innerText = episode.name;
  h3Tag.setAttribute('class', 'h3Tag');

  let h4Tag = document.createElement('h4');
  divTag.appendChild(h4Tag);
  h4Tag.innerText = `S0${episode.season}E0${episode.number}`;
  h4Tag.setAttribute('class', 'h4Tag');

  let h4Tag2 = document.createElement('h4');
  divTag.appendChild(h4Tag2);
  h4Tag2.innerHTML = episode.summary;
  h4Tag2.setAttribute('class', 'h4Tag2');
}

window.onload = setup;