// Handle form submission
const handleSubmitMessage = (e) => {
  e.preventDefault(); // Prevent the default form submission
  emailjs.init({
    publicKey: "zv7NE4iVKNDeYadFp",
  });

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // console.log(emailjs.init())
  // Send email using EmailJS
  emailjs
    .send("primefashionbd", "template_8n96n7c", formData)
    .then((response) => {
      if (response.status === 200) {
        Swal.fire({
          title: "Email send successfully",
          icon: "success",
        });
      }
    })
    .catch((error) => {
      console.error("Failed...", error);
      alert("There was an error sending your message. Please try again.");
    });
};


