const colors = document.getElementsByClassName("colors__color");
let secondColor = false;
for(let i = 0; i < colors.length; i++){
    /* set color */
    if(secondColor === false){
        colors[i].children[0].style.background = "#6096B4"
        secondColor = true;
    }
    else{
        colors[i].children[0].style.background = "#F48484"
        secondColor = false;
    }

    /* onlick */
    colors[i].onclick = function(){
        colors[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(colors[i].children[0].style.background);
        document.title = colors[i].children[0].style.background;
    }
}