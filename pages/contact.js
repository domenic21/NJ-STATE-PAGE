
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting by default
    
    const email1 = document.getElementById('email1').value;
    const email2 = document.getElementById('email2').value;
    const messageDisplay = document.getElementById('message');
    const emailForm = document.getElementById('emailForm');
    const returnHome = document.getElementById('returnHome');
    // Check if emails match
    if (email1 !== email2) {
        alert('Emails do not match!');
    } else {
      // Validation for email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email1)) {
        alert('Invalid email format!');
      } else {
        // Emails match and have valid format - proceed with submission
        messageDisplay.textContent = ' Email sent.';
        //display message and hide form
        messageDisplay.style.display = 'block';
        emailForm.style.display = 'none';
        //display return home 
        returnHome.style.display = 'block';
      }
    }
  });
  
  