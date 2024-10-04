const images = document.querySelectorAll('#hero .hero-image img');
let currentIndex = 0;

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Change image every 5 seconds
setInterval(changeImage, 5000);

// Quotes array
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar"
];

// Display a daily quote with fade effect
function displayQuote() {
    const quoteElement = document.querySelector('#daily-quotes blockquote');
    quoteElement.classList.remove('fade'); // Start with fade out

    setTimeout(() => {
        const date = new Date();
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const quoteIndex = dayOfYear % quotes.length;
        quoteElement.textContent = quotes[quoteIndex];
        quoteElement.classList.add('fade'); // Fade in after text change
    }, 300); // Timing to match fade out
}

// Call the function to display the quote on page load
displayQuote();

// Toggle navbar visibility on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const isActive = navList.classList.contains('active');
    menuToggle.textContent = isActive ? '✖' : '☰';
});

// Recommendations section
const recommendations = [
    {
        name: "Isha",
        message: "Irfan Study Circl helped me improve my grades dramatically!"
    },
    {
        name: "Samiksha",
        message: "The tutors are very knowledgeable and supportive!"
    },
    {
        name: "Mohit",
        message: "I loved the interactive classes and the friendly environment!"
    },
    {
        name: "Aditya",
        message: "The study materials provided are excellent!"
    },
    {
        name: "Ayush",
        message: "I highly recommend Irfan Study Circl for anyone looking to excel!"
    },
    {
        name: "Shruti",
        message: "Where learning is fun, friendships are built, and your future begins!"
    },
    {
        name: "Disha",
        message: "The chase to better learning will take you to better marks."
    },
    {
        name: "Nafiza",
        message: "Where learning is fun, friendships are built, and your future begins!"
    },
    {
        name: "Himani",
        message: "A hub of excellence where learning leads to success and dreams become reality."
    },
    {
        name: "Rashmi",
        message: "The light of knowledge will reflect in your personality."
    },
    {
        name: "Kamil",
        message: "At ISC, learning feels interactive, and questions are always encouraged!"
    },
    {
        name: "Arushi",
        message: "Where you take your first step towards deep learning and a radiant future."
    },
    {
        name: "Diya",
        message: "A good tutor can bring the real fire that's hidden in a student's heart."
    },
    {
        name: "Tushar",
        message: "A good education can change anyone. A good teacher can change everything!"
    },
    {
        name: "Jigyasa",
        message: "The dreams of achieving high scores become realistic with great guidance here!"
    },
    {
        name: "Ashwat",
        message: "Crack the Success Code with ISC."
    },
    {
        name: "Rashmi",
        message: "Your enthusiasm is contagious! The classroom comes alive because of you!"
    },
];


let recommendationIndex = 0;

function displayRecommendation() {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';
    const { name, message } = recommendations[recommendationIndex];

    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial');
    testimonial.innerHTML = `<strong>${name}</strong>: ${message}`;

    recommendationList.appendChild(testimonial);
}

// Initial recommendation display
displayRecommendation();

// Next and Previous buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    recommendationIndex = (recommendationIndex + 1) % recommendations.length;
    displayRecommendation();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    recommendationIndex = (recommendationIndex - 1 + recommendations.length) % recommendations.length;
    displayRecommendation();
});
