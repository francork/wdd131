const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener to the button
button.addEventListener('click', () => {
  // Trim input value and check if it's not empty
  const chapter = input.value.trim();

  if (chapter === '') {
    input.focus(); // Keep focus in input
    return; // Do nothing if input is empty
  }

  // Create li and delete button
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Set contents
  li.textContent = chapter;
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

  // Add event to delete button to remove the li when clicked
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus(); // Return focus to input
  });

  // Append delete button to li and li to list
  li.append(deleteButton);
  list.append(li);

  // Reset input value and focus
  input.value = '';
  input.focus();
});