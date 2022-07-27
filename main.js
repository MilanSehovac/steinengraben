function video(){
    document.querySelector('.section-d-vid-placeholder').classList.add("d-none")
    document.querySelector('.play-icon').classList.add("d-none")
    document.querySelector('.section-d-yt-video').classList.remove("d-none")
}
window.addEventListener("hashchange", () => window.history.pushState({}, "", '/steinengraben/index.html'), {});