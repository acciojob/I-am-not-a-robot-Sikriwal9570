//your code here
const images = document.querySelectorAll('img');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');

let selectedImages = [];
let verifyState = false;

// Shuffle images and assign class names
const classNames = ['img1', 'img2', 'img3', 'img4', 'img5'];
const randomClassName = classNames[Math.floor(Math.random() * classNames.length)];

images.forEach((img, index) => {
    img.src = `https://via.placeholder.com/100?text=${index + 1}`;
    img.classList.add(randomClassName);
    img.addEventListener('click', () => handleClick(img));
});

// Handle image click event
function handleClick(img) {
    if (verifyState || selectedImages.length === 2) {
        return;
    }

    if (selectedImages.length === 0) {
        selectedImages.push(img);
        img.style.border = '2px solid #007acc';
    } else if (selectedImages.length === 1 && selectedImages[0] !== img) {
        selectedImages.push(img);
        img.style.border = '2px solid #007acc';
        resetButton.style.display = 'inline-block';
        verifyButton.style.display = 'inline-block';
    }
}

// Handle Reset button click
resetButton.addEventListener('click', () => {
    selectedImages.forEach(img => (img.style.border = 'none'));
    selectedImages = [];
    resetButton.style.display = 'none';
    verifyButton.style.display = 'none';
    para.textContent = '';
    verifyState = false;
});

// Handle Verify button click
verifyButton.addEventListener('click', () => {
    if (selectedImages.length === 2) {
        verifyState = true;
        if (selectedImages[0].classList.contains(randomClassName) && selectedImages[1].classList.contains(randomClassName)) {
            para.textContent = 'You are a human. Congratulations!';
        } else {
            para.textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
        }
        verifyButton.style.display = 'none';
    }
});

