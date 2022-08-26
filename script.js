header = document.querySelector('header')
modal = document.getElementById("myModal")
img = document.querySelectorAll('.img1 img')
img2 = document.querySelectorAll('.img2 img')
console.log(img);
modalImg = document.getElementById("img01")
caption = document.getElementById("caption")
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

img2.forEach((imgs) => {

  imgs.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

//for responsive 
txk = document.querySelector('.txt h1')
const res = window.matchMedia("(max-width: 600px) and (min-width: 350px)")

function listen(res) {
  if (res.matches) { // If media query matches
    txk.textContent = 'MY LOGO'
  } else {
    txk.textContent = 'MY WEBSITE LOGO'
  }
}

listen(res)
res.addListener(listen)

bar = document.querySelector('.fa-bars')
nav = document.querySelector('nav')
nDiv = document.querySelectorAll('nav div > a')
console.log(nDiv);

bar.addEventListener('click', () => {
  // nDiv.style.display.toggle('block')

  for (let i = 1; i < nDiv.length; i++) {
    if (nDiv[i].style.display === "none") {
      nDiv[i].style.display = "block";
      nav.style.backgroundColor = 'white';
    } else {
      nDiv[i].style.display = "none";
      nav.style.backgroundColor = 'transparent';
    }
  }

});