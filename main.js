
function video(){
    document.querySelector('.section-d-vid-placeholder').classList.add("d-none")
    document.querySelector('.play-icon').classList.add("d-none")
    document.querySelector('.section-d-yt-video').classList.remove("d-none")
}
y = 0
x = 0
function expand(){
    document.querySelector('.new-table1-row1').classList.toggle("d-none")
    document.querySelector('.expander1').style.backgroundImage="url(assets/minus-icons-opacity.png)"
    if (x == 1){
        document.querySelector('.expander1').style.backgroundImage="url(assets/plus-icons-opacity.png)"
        x = 0
    }
    else{
        x = 1;
    }

}
function expand2(){
    document.querySelector('.new-table1-row2').classList.toggle("d-none")
    document.querySelector('.expander2').style.backgroundImage="url(assets/minus-icons-opacity.png)"
    if (y == 1){
        document.querySelector('.expander2').style.backgroundImage="url(assets/plus-icons-opacity.png)"
        y = 0
    }
    else{
        y = 1;
    }
}
window.addEventListener("hashchange", () => window.history.pushState({}, "", '/steinengraben/index.html'), {});