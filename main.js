plusIconTwo = 0
plusIconOne = 0

function video(){
    document.querySelector('.section-d-vid-placeholder').classList.add("d-none")
    document.querySelector('.play-icon').classList.add("d-none")
    document.querySelector('.section-d-yt-video').classList.remove("d-none")
}

function expand(){
    document.querySelector('.new-table1-row1').classList.toggle("d-none")
    document.querySelector('.expander1').style.backgroundImage="url(assets/minus-icons-opacity.png)"
    if (plusIconOne == 1){
        document.querySelector('.expander1').style.backgroundImage="url(assets/plus-icons-opacity.png)"
        plusIconOne = 0
    }
    else{
        plusIconOne = 1;
    }

}
function expand2(){
    document.querySelector('.new-table1-row2').classList.toggle("d-none")
    document.querySelector('.expander2').style.backgroundImage="url(assets/minus-icons-opacity.png)"
    if (plusIconTwo == 1){
        document.querySelector('.expander2').style.backgroundImage="url(assets/plus-icons-opacity.png)"
        plusIconTwo = 0
    }
    else{
        plusIconTwo = 1;
    }
}
window.addEventListener("hashchange", () => window.history.pushState({}, "", '/steinengraben/index.html'), {});