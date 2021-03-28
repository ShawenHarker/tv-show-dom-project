//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  const root = document.getElementById('root');
  root.setAttribute('class', 'container');
  let makePageForEpisodes = allEpisodes.map((episode) => {
    let divTag = document.createElement('div'); 
    root.appendChild(divTag);
    divTag.setAttribute('class', 'card'); // creating a class called card for the div to be accessed with.
    let imgTag = document.createElement('img');
    divTag.appendChild(imgTag);
    imgTag.src = episode.image.medium;
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
  });
  console.log(root);
}

window.onload = setup;