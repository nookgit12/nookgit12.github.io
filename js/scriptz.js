const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');

// Create grid blocks
for (let i = 0; i < 100; i++) {
  const block = document.createElement('div');
  block.classList.add('block');
  grid.appendChild(block);
}

// Add click event to change block color using the selected color
grid.addEventListener('click', (e) => {
  if (e.target.classList.contains('block')) {
    const selectedColor = colorPicker.value;
    e.target.style.backgroundColor = selectedColor; // Set selected color on click
  }
});
