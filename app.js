let modeIcon=document.querySelector('.modeIcon');
let cards=document.querySelectorAll('.card');
let changeMode=document.querySelector('#chageWebMode');
let heads=document.querySelectorAll('.head');
let progressBarWidths=document.querySelectorAll('.progressBarWidth');
let modeText = document.getElementById('modeText');
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
            });
            heads.forEach(function(head) {
                head.style.color = "blue";
            });
            progressBarWidths.forEach(function(progressBarWidth) {
                progressBarWidth.style.backgroundColor = "rgb(194, 194, 194)";
            });
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
            });
            heads.forEach(function(head) {
                head.style.color = "";
            });
            progressBarWidths.forEach(function(progressBarWidth) {
                progressBarWidth.style.backgroundColor = "";
            });
        }, 1000);
    }
})