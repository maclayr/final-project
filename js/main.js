let card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("click", flipCard));

let hideCards = document.querySelectorAll('.card');

// function to hide all divs
function hideAll() {
  hideCards.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();
document.querySelector('#fashion1').style.display = 'block';
document.querySelector('#music1').style.display = 'block';
document.querySelector('#art1').style.display = 'block';
document.querySelector('#media1').style.display = 'block';

let revealCardsFashion = document.querySelectorAll('.switchCardFashion');
let clickableBtnsFashion = document.querySelectorAll('.selectedFashion');

function hideAllFashion() {
  revealCardsFashion.forEach(function(el) {
    el.style.display = 'none';
  });
}

// when any animal is clicked, make the suitable div appear
clickableBtnsFashion.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAllFashion();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'fashionbtn1':
        document.querySelector('#fashion1')
          .style.display = 'block';
        break;
      case 'fashionbtn2':
        document.querySelector('#fashion2')
          .style.display = 'block';
        break;
      case 'fashionbtn3':
        document.querySelector('#fashion3')
          .style.display = 'block';
        break;
      case 'fashionbtn4':
        document.querySelector('#fashion4')
          .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()

let revealCardsMusic = document.querySelectorAll('.switchCardMusic');
let clickableBtnsMusic = document.querySelectorAll('.selectedMusic');

function hideAllMusic() {
  revealCardsMusic.forEach(function(el) {
    el.style.display = 'none';
  });
}

// when any animal is clicked, make the suitable div appear
clickableBtnsMusic.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAllMusic();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'musicbtn1':
        document.querySelector('#music1')
          .style.display = 'block';
        break;
      case 'musicbtn2':
        document.querySelector('#music2')
          .style.display = 'block';
        break;
      case 'musicbtn3':
        document.querySelector('#music3')
          .style.display = 'block';
        break;
      case 'musicbtn4':
        document.querySelector('#music4')
          .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()

let revealCardsArt = document.querySelectorAll('.switchCardArt');
let clickableBtnsArt = document.querySelectorAll('.selectedArt');

function hideAllArt() {
  revealCardsArt.forEach(function(el) {
    el.style.display = 'none';
  });
}

// when any animal is clicked, make the suitable div appear
clickableBtnsArt.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAllArt();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'artbtn1':
        document.querySelector('#art1')
          .style.display = 'block';
        break;
      case 'artbtn2':
        document.querySelector('#art2')
          .style.display = 'block';
        break;
      case 'artbtn3':
        document.querySelector('#art3')
          .style.display = 'block';
        break;
      case 'artbtn4':
        document.querySelector('#art4')
          .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()

let revealCardsMedia = document.querySelectorAll('.switchCardMedia');
let clickableBtnsMedia = document.querySelectorAll('.selectedMedia');

function hideAllMedia() {
  revealCardsMedia.forEach(function(el) {
    el.style.display = 'none';
  });
}

// when any animal is clicked, make the suitable div appear
clickableBtnsMedia.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAllMedia();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'mediabtn1':
        document.querySelector('#media1')
          .style.display = 'block';
        break;
      case 'mediabtn2':
        document.querySelector('#media2')
          .style.display = 'block';
        break;
      case 'mediabtn3':
        document.querySelector('#media3')
          .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
