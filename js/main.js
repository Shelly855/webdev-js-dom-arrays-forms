document.getElementById('myHeading').innerHTML = "Your Name";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

document.getElementById('myTestEvent').addEventListener('click',
function(ev) {
    console.dir(ev);
})

document.querySelector(".red").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "redBack");
})

document.querySelector(".blue").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "blueBack");
})

document.querySelector(".green").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "greenBack");
})

document.querySelector(".reset").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', 'resetBack');
})

let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg', 'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];
document.getElementById('myImages').setAttribute('src', imageAr[2]);

function chgImage(){
    console.info('Called');
}
setInterval(chgImage, 2000);
