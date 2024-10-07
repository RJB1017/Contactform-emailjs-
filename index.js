document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_lw7vfda", "template_w44hdbe", templateParams).then(
      function (response) {
        document.getElementById("feedback").style.display = "block";
        document.getElementById("feedback-error").style.display = "none";
      },
      function (error) {
        document.getElementById("feedback-error").style.display = "block";
        document.getElementById("feedback").style.display = "none";
      }
    );
  });
