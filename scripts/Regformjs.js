function myFunction() {
    var x = document.getElementById("myinput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// Global variable to store the generated OTP
let generatedotp;

  // Initially disable the OTP input field
  document.getElementById("otpsection").style.display = "none";

  // Handle "Send OTP" button click
  document.getElementById("Send").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default behavior (if needed)

  // Generate a 6-digit random OTP
  generatedotp = Math.floor(100000 + Math.random() * 900000); // Example: 123456

  // Simulate sending OTP (Replace this with actual backend logic to send OTP)
  alert("Your OTP is: " + generatedotp);

  // Enable the OTP input field
  document.getElementById("otpsection").style.display = "block";
  
});

  /*document.getElementById("Send").addEventListener("click", function () {
    // Validate the form fields here (optional)
    window.location.href = "nextpage.html"; // Redirect to the next page
  });*/
  
  document.getElementById("Verify").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get selected role (Labourer or Client)
    const selectedRole = document.querySelector('input[name="choice"]:checked');
  
    // Check if a role is selected
    if (selectedRole) {
      const role = selectedRole.id; // Get the id of the selected radio button
      const enteredotp = document.getElementById("otp").value.trim(); // Get the entered OTP
  
      // Check if OTP is entered
      if (enteredotp === "") {
        alert("Please enter the OTP before proceeding.");
        return;
      }

   if (enteredotp == generatedotp) {
      // OTP matches
      if (role === "check-worker") {
        // Redirect to Labourer page
        window.location.href = "../html files/Regformworker.html";
      } else if (role === "check-client") {
        // Save Client details or show a success message
        alert("Client details saved successfully!");
        // Send data to a backend 
        const formData = new FormData(document.querySelector("form"));
        fetch("/save-client-details", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Details saved successfully!");
            } else {
              alert("Error: " + data.message);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }else {
      // OTP does not match
      alert("Invalid OTP. Please try again.");
    }
  }
  else {
      // No role selected
      alert("Please select whether you are a Labourer or Client.");
    }
  });