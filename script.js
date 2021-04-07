//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
const root = document.getElementById('root');
root.setAttribute('class', 'container');

function setup() {
  let makePageForEpisodes = allEpisodes.map((episode) => {
    // Create a div tag store all of my information in it, which I retrieved from the object in the episodes.js file. 
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
    imgTag.setAttribute('class', 'image')

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
    function search () {
      let input = document.getElementsByClassName('search-bar-input').value;
      input = input.toLowerCase();
      let findCard = document.getElementsByClassName('card');

      for (let i = 0; i < findCard.length; i++) {
        if (findCard[i].innerHTML.toLowerCase().includes(input)) {
          findCard[i];
        }
        else {
          findCard[i].style.display="none";                 
        }
      }
    }
  });
  console.log(root);
}

// function search () {
//   let getSearch = document.getElementsByClassName('search-bar-input');
//   let TypeSearch = allEpisodes.filter((episode) => {
//     if (getSearch.includes(episode.name.indexOf('A-Z')) || getSearch.includes(episode.name.indexOf('a-z'))) {
//       return setup(divTag);
//     }
//   })
// };

window.onload = setup;