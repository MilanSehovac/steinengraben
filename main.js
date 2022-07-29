
function video(){
    document.querySelector('.section-d-vid-placeholder').classList.add("d-none")
    document.querySelector('.play-icon').classList.add("d-none")
    document.querySelector('.section-d-yt-video').classList.remove("d-none")
}
function expand(){
    document.querySelector('.new-table1-row1').classList.toggle("d-none")
}
window.addEventListener("hashchange", () => window.history.pushState({}, "", '/steinengraben/index.html'), {});