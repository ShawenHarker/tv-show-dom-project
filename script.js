//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  const root = document.getElementById('root');
  let makePageForEpisodes = allEpisodes.map((episode) => {
    let divTag = document.createElement('div'); 
    root.appendChild(divTag);
    divTag.setAttribute('class', 'card'); // creating a class called card for the div to be accessed with.
    divTag.style.backgroundColor = "lightblue";
    divTag.style.maxWidth = "18em";
    divTag.style.padding = "1em"
    divTag.style.margin = "5px";
    let imgTag = document.createElement('img');
    imgTag.src = episode.image.medium;
    divTag.appendChild(imgTag);
    let h3Tag = document.createElement('h3');
    divTag.appendChild(h3Tag);
    h3Tag.innerText = episode.name;
    h3Tag.style.textAlign = "center"; 
    h3Tag.style.color = "black";
    let h4Tag = document.createElement('h4');
    divTag.appendChild(h4Tag);
    h4Tag.innerText = `S${episode.season}E${episode.number}`; 
    h4Tag.style.textAlign = "center"; 
    h4Tag.style.color = "black";
    let h4Tag2 = document.createElement('h4');
    h4Tag2.innerHTML = episode.summary;
    divTag.appendChild(h4Tag2);
    h4Tag2.style.color = "black";
    let linkTag = document.createElement('link');
    linkTag.href = episode._links.self.href;
    divTag.appendChild(linkTag);
  });
}

window.onload = setup;