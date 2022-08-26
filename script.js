header = document.querySelector('nav')

console.log(header.style);

window.onscroll = function() {
    header.style.backgroundColor = 'white';
    header.style.boxShadow = '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)'
    console.log(header.style.boxShadow);
}