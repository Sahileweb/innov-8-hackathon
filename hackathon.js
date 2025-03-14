// window.addEventListener('scroll', () => {
//     const timeline = document.querySelector('.timeline');
//     const progressLine = document.getElementById('progress-line');
//     const dots = document.querySelectorAll('.dot');
//     const timelineTop = timeline.offsetTop;
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const totalHeight = timeline.scrollHeight;

//     const progressHeight = Math.min(
//         ((scrollPosition - timelineTop) / totalHeight) * 100,
//         100
//     );
//     progressLine.style.height = `${progressHeight}%`;

//     dots.forEach(dot => {
//         if (dot.getBoundingClientRect().top < window.innerHeight * 0.8) {
//             dot.classList.add('active-dot');
//         } else {
//             dot.classList.remove('active-dot');
//         }
//     });
// });
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight * 0.8) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
function updateCountdown() {
    const eventDate = new Date('2025-03-19T08:00:00+05:30').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.querySelector('.timer').innerHTML = '<div>Registration Closed!</div>';
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();