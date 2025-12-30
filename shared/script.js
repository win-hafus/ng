const reveals = document.querySelectorAll('.reveal');
const music = document.getElementById('bg-music');

const futureScreen = document.querySelector('.future');
const bgHeart = document.querySelector('.bg-heart');


function heartOnFuture() {
    const rect = futureScreen.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.6;

    if (rect.top < triggerPoint) {
        bgHeart.classList.add('active');
    }
}

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', heartOnFuture);

heartOnFuture();
revealOnScroll();

/* Music toggle */
let playing = false;
function toggleMusic() {
    if (!playing) {
        music.play();
        playing = true;
    } else {
        music.pause();
        playing = false;
    }
}
