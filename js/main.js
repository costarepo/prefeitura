const banner = function() {
    const img = document.querySelector('#banner');
    let newBanner = img.src.substring(img.src.length - 5);
    newBanner = parseInt(newBanner[0]);
    let x;
    while ( true ) {
        x = parseInt(Math.random() * 7 + 1);
        if (x !== newBanner) {
            break; 
        }
        console.log('nha');
    }
    img.src = 'img/' + x + '.jpg';
};

setInterval(banner, 3000);
