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

