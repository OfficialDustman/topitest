const header = document.querySelector('header')
      modal = document.getElementById("myModal"),
      img = document.querySelectorAll('.img1 img'),
      secondImg = document.querySelectorAll('.img2 img'),
      modalImg = document.getElementById("img01"),
      caption = document.getElementById("caption"),
      span = document.getElementsByClassName("close")[0];

scrollTrigger = 60;

window.onscroll = function() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      header.style.backgroundColor = 'white'
      header.style.boxShadow = '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)'
  } else {
      header.style.backgroundColor = 'transparent'
      header.style.boxShadow = 'none'
  }
}

img.forEach((imgs) => {

  imgs.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
  }
});

secondImg.forEach((imgs) => {

  imgs.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function() {
  modal.style.display = "none";
}

//for responsiveness
const responsive = window.matchMedia("(max-width: 600px) and (min-width: 350px)"),
      webText = document.querySelector('.txt h1'),
      bar = document.querySelector('.fa-bars'),
      nav = document.querySelector('nav'),
      navDiv = document.querySelectorAll('nav div > a');

function listen(responsive) {

  if (responsive.matches) { 
    webText.textContent = 'MY LOGO'
    for (let i = 1; i < navDiv.length; i++) {
      navDiv[i].style.display = "none";
    }
  } else {
    webText.textContent = 'MY WEBSITE LOGO'

    for (let i = 1; i < navDiv.length; i++) {
      navDiv[i].style.display = "flex";
      navDiv[i].style.alignItems = 'center'
    }
  }
}

listen(responsive)
responsive.addListener(listen)

bar.addEventListener('click', () => {

  for (let i = 1; i < navDiv.length; i++) {
    if (navDiv[i].style.display === "none") {
      navDiv[i].style.display = "block";
      nav.style.backgroundColor = 'white';
    } else {
      navDiv[i].style.display = "none";
      nav.style.backgroundColor = 'transparent';
    }
  }

});