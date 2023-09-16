function changeBg(){

    const images = [
        'url("1.png")',
        'url("2.jpg")',
        'url("3.jpg")',
        'url("4.jfif")',
        'url("5.jfif")',
        'url("6.jfif")',
        'url("7.jfif")',
    ]

    const section = document.getElementById("section-one")

    const bg = images[Math.floor(Math.random() * 
    images.length)];
    section.style.backgroundImage = bg;
}

setInterval(changeBg, 3000);