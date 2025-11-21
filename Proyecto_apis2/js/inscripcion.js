// Inicializa EmailJS
emailjs.init("BMGgsJr-zWvrFPVvo");  // EJ: emailjs.init("xS2AbCD34F...");

document.getElementById('personalDataForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  emailjs.send("service_4hli8ij", "template_lvuf4it", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
  })

  .then(() => {
    document.getElementById('status-message').innerText = "Datos enviados con éxito ✔️";
    document.getElementById('status-message').style.color = "green";
    document.getElementById('personalDataForm').reset();
  })

  .catch((error) => {
    console.error("Error al enviar los datos:", error);
    document.getElementById('status-message').innerText = "Error al enviar ❌";
    document.getElementById('status-message').style.color = "red";
  });
});
