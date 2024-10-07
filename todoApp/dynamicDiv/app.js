// Select the container and the range inputs
const container = document.querySelector('.container');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const borderInput = document.getElementById('border');
const shadowInput = document.getElementById('shadow');

// Add event listeners to each input
widthInput.addEventListener('input', function () {
    container.style.width = `${widthInput.value}%`; // Adjusting width based on range value
});

heightInput.addEventListener('input', function () {
    container.style.height = `${heightInput.value}px`; // Adjusting height based on range value
});

borderInput.addEventListener('input', function () {
    container.style.borderWidth = `${borderInput.value}px`; // Adjusting border width based on range value
});

shadowInput.addEventListener('input', function () {
    container.style.boxShadow = `0 0 ${shadowInput.value}px rgba(0, 0, 0, 0.5)`; // Adjusting shadow based on range value
});
