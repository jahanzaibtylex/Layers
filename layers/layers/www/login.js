document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;

    // Make an AJAX request to your server for login validation
    $.ajax({
      url: '/account', // Replace with the actual URL for login validation
      type: 'POST',
      data: {
        email: email,
        password: password
      },
      success: function (response) {
        if (response === 'Success') {
          // Redirect to a dashboard or another authenticated page
          window.location.href = '/home';
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    });
  });