const buttonHide = document.getElementsByTagName('button')[0];

buttonHide.onclick = function () {
    document.getElementById('text').remove();
    // document.getElementById('text').style.height = 0;
    // document.getElementById('text').style.display = "none";
};