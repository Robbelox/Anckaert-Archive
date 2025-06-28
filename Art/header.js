function injectHeader() {
    document.querySelector('header').innerHTML = `
        <h1>Art Archive</h1>
        <nav>
        <a href="index.html">Home</a>
        ||
        <a href="early-work.html">Early Work</a>
        <a href="illustrations.html">Illustrations</a>
        <a href="animations.html">Animations</a>
        <a href="paintings.html">Paintings</a>
        <a href="sketches.html">Sketches</a>
        <a href="skins.html">Skins</a>
        <a href="collaborations.html">Collaborations</a>
        </nav>
    `;
}
// Optionally, call injectHeader() automatically if desired:
injectHeader();