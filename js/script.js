document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  alert(`Thanks for signing up, ${name}!`);
});
