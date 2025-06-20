document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("userInfo");
  let modal = document.getElementById("confirmationModal");
  let modalContent = document.getElementById("modalContent");
  let closeModal = document.getElementById("closeModal");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let userid = document.getElementById("userid").value;

    modalContent.innerHTML = `
      <h2>Review Your Information</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>User ID:</strong> ${userid}</p>
      <button onclick="submitForm()">Confirm & Submit</button>
    `;
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.submitForm = function () {
    console.log("Form submitted for Summit Medical");
    modal.style.display = "none";
    form.submit();
  };
});
