document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  
  // Redirect to the thank you page after submission
  window.location.href = 'thank-you.html';
});
