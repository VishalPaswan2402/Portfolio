let modeIcon=document.querySelector('.modeIcon');
let cards=document.querySelectorAll('.card');
let changeMode=document.querySelector('#chageWebMode');
let heads=document.querySelectorAll('.head');
let progressBarWidths=document.querySelectorAll('.progressBarWidth');
let modeText = document.getElementById('modeText');
let foot=document.querySelector(".footer");
changeMode.addEventListener("click",function(){
    let isDarkMode = document.body.classList.toggle('dark-mode');
    if (isDarkMode) {
        var colorBox = document.querySelector('.changeMode');
        colorBox.classList.add('changeModes');
        changeMode.style.backgroundColor = "white";
        changeMode.style.color = "black";
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        modeText.textContent = "Light";
        setTimeout(function() {
            cards.forEach(function(card) {
                card.style.backgroundColor = "white";
                card.style.color = "black";
                card.style.border="none";
            });
            heads.forEach(function(head) {
                head.style.color = "blue";
            });
            progressBarWidths.forEach(function(progressBarWidth) {
                progressBarWidth.style.backgroundColor = "rgb(194, 194, 194)";
            });
            foot.style.background = 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(220, 220, 220)50%, rgb(255, 255, 255) 100%)';
        }, 1000);
    }else {
        var colorBox = document.querySelector('.changeMode');
        colorBox.classList.remove('changeModes');
        changeMode.style.backgroundColor = "";
        changeMode.style.color = "";
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        modeText.textContent = "Dark";
        setTimeout(function() {
            cards.forEach(function(card) {
                card.style.backgroundColor = "";
                card.style.color = "";
                card.style.border="";
            });
            heads.forEach(function(head) {
                head.style.color = "";
            });
            progressBarWidths.forEach(function(progressBarWidth) {
                progressBarWidth.style.backgroundColor = "";
            });
            foot.style.background = "";
        }, 1000);
    }
})

document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const cards = document.querySelectorAll('.randomCard1');
    
    function showNextCard() {
        cards.forEach(card => card.style.display = 'none');
        cards[index].style.display = 'block';
        index = (index + 1) % cards.length;
    }
    
    showNextCard();
    setInterval(showNextCard, 300);
});
