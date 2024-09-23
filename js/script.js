document.addEventListener('DOMContentLoaded', function () {
    const checkBox = document.getElementById('check');
    const cancelIcon = document.getElementById('cancel');
    const hamburgerIcon = document.getElementById('btn');

    if (checkBox) {
        checkBox.addEventListener('change', function () {
            if (this.checked) {
                cancelIcon.style.display = 'block';
                hamburgerIcon.style.display = 'none';
            } else {
                cancelIcon.style.display = 'none';
                hamburgerIcon.style.display = 'block';
            }
        });
    }
});

window.onscroll = function () {
    updateProgressCircle();
};

function updateProgressCircle() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;

    // Update the progress circle stroke offset
    var circumference = 2 * Math.PI * 20; // Circle radius is now 20 (smaller circle)
    var offset = circumference - (scrollPercent / 100) * circumference;
    document.getElementById("progressCircle").style.strokeDashoffset = offset;
}

// JavaScript to handle modal opening/closing
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';

        // Extract game details from the clicked card
        const gameCard = button.closest('.game-card');
        const gameTitle = gameCard.querySelector('h3').textContent;
        const gameDetails = gameCard.querySelector('p').textContent;

        // Update modal content with game details
        modal.querySelector('h2').textContent = gameTitle;
        modal.querySelector('p').textContent = gameDetails;
    });
});

// JavaScript to handle closing the modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Close modal if user clicks outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// JavaScript for the "Buy Now" button functionality
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        const gameTitle = button.closest('.game-card').querySelector('h3').textContent;

        // Replace the following with actual purchase logic, like redirecting to the store page.
        alert(`You are now buying: ${gameTitle}`);
        // For example, you can redirect to a store page:
        // window.location.href = `/buy/${gameTitle.toLowerCase().replace(/\s+/g, '-')}`;
    });
});



document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const gameplay = document.querySelector('input[name="gameplay"]:checked');
    const history = document.querySelector('input[name="history"]:checked');
    const multiplayer = document.querySelector('input[name="multiplayer"]:checked');
    const setting = document.querySelector('input[name="setting"]:checked');
    const exploration = document.querySelector('input[name="exploration"]:checked');

    let recommendation = '';

    // Simple logic to recommend a game based on answers
    if (gameplay && history) {
        if (gameplay.value === 'stealth' && history.value === 'yes') {
            recommendation = "We recommend Assassin's Creed: Unity because it offers immersive stealth gameplay in a richly detailed historical setting.";
        } else if (gameplay.value === 'action' && multiplayer.value === 'very') {
            recommendation = "We recommend Assassin's Creed: Valhalla because it features expansive open-world exploration and engaging combat.";
        } else {
            recommendation = "We recommend Assassin's Creed: Odyssey for its RPG elements and rich storytelling.";
        }
    } else {
        recommendation = "Please answer all questions to get a recommendation.";
    }

    // Show the result
    document.getElementById('result').innerHTML = recommendation;
    document.getElementById('retake-quiz').style.display = 'block'; // Show retake button

    // Clear the form
    this.reset();
});

// Retake quiz button functionality
document.getElementById('retake-quiz').addEventListener('click', function () {
    document.getElementById('result').innerHTML = ''; // Clear result
    this.style.display = 'none'; // Hide retake button
});
