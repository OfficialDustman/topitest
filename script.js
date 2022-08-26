header = document.querySelector('header')
modal = document.getElementById("myModal")
img = document.querySelectorAll('.img1 img')
img2 = document.querySelectorAll('.img2 img')
console.log(img);
modalImg = document.getElementById("img01")
caption = document.getElementById("caption")

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



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}