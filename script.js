//write a javascript code for the contents to be loaded
document.addEventListener('DOMContentLoaded', () => {
    const boxOne = document.getElementById('color-box');
    const boxTwo = document.getElementById('change-box-btn');

    function getrandomColor() {
        const firstRandom = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return firstRandom;
    }

    if (boxOne && boxTwo) {
        boxTwo.addEventListener('click', function() {
            boxOne.style.backgroundColor = getrandomColor();
        });
    } else {
        console.log('Element not found');
    }
});
