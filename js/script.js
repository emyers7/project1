document.getElementById('signup-form').addEventListener('submit', function(event) {
  const email = document.getElementById('email').value;
  
  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault(); // Prevent submission if validation fails
  } else {
    // Redirect to the thank you page after successful validation
    window.location.href = 'thank-you.html';
  }
});
