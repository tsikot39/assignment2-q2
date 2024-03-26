document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const responseContainer = document.getElementById("response"); // Make sure you have a container with this ID in your HTML

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect the form data
    const formData = {
      id: document.getElementById("id").value,
      fullName: document.getElementById("fullName").value,
      address: document.getElementById("address").value,
      status: document.getElementById("status").value,
    };

    // Use Fetch API to send the form data
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Display the confirmation message to the user
        responseContainer.innerHTML = `
        <div class="success-message">
          <p class="response-detail">ID: ${data.id}</p>
          <p class="response-detail">Full Name: ${data.fullName}</p>
          <p class="response-detail">Address: ${data.address}</p>
          <p class="response-detail">Status: ${data.status}</p>
          <p class="response-detail">Fee: $${data.fee}</p>
        </div>
      `;
      })
      .catch((error) => {
        // Handle errors that occur during the fetch operation
        console.error("Error:", error);

        // Update the response container with the error message
        responseContainer.innerHTML = `<div class="error-message">An error occurred: ${error.message}</div>`;
      });
  });
});
