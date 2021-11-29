const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300; // 100px

function shadow(e) {
    //  get width and height of hero
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e; // get information about where the persons cursor was
    // if the we are hovering h1 instead of hero then modify x and y values
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${yWalk}px ${xWalk * -1}px 0 red,
        ${xWalk * -1}px ${yWalk}px 0 #f0c808
      `;

}

hero.addEventListener('mousemove', shadow);