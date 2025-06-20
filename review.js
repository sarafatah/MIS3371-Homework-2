document.addEventListener("DOMContentLoaded", function () {
    const reviewBtn = document.getElementById("reviewButton");
    const modal = document.getElementById("reviewModal");
    const reviewContent = document.getElementById("reviewContent");
    const form = document.getElementById("registrationForm");

    reviewBtn.addEventListener("click", function () {
        let getValue = (id) => document.getElementById(id)?.value || "N/A";
        let getRadio = (name) => {
            let checked = [...document.querySelectorAll(`input[name="${name}"]`)].find(el => el.checked);
            return checked ? checked.value : "N/A";
        };
        let getCheckboxes = (ids) => ids.filter(id => document.getElementById(id)?.checked).join(', ') || "None";

        const reviewData = {
            Name: `${getValue("fname")} ${getValue("mname")} ${getValue("lname")}`,
            DOB: getValue("dob"),
            SSN: getValue("ssn").replace(/\d(?=\d{4})/g, "*"),
            Address: `${getValue("address1")}, ${getValue("address2")}, ${getValue("city")}, ${getValue("state")} ${getValue("zip")}`,
            Email: getValue("email"),
            Conditions: getCheckboxes(["chickenpox", "measles", "covid", "smallpox", "tetanus"]),
            Gender: getRadio("gender"),
            Vaccinated: getRadio("vaccinated"),
            Health: getValue("range"),
            Symptoms: getValue("notes"),
            UserID: getValue("uid"),
            Password: getValue("pword").replace(/./g, "*")
        };

        reviewContent.innerHTML = `
            <p><strong>Name:</strong> ${reviewData.Name}</p>
            <p><strong>Date of Birth:</strong> ${reviewData.DOB}</p>
            <p><strong>SSN:</strong> ${reviewData.SSN}</p>
            <p><strong>Address:</strong> ${reviewData.Address}</p>
            <p><strong>Email:</strong> ${reviewData.Email}</p>
            <p><strong>Conditions:</strong> ${reviewData.Conditions}</p>
            <p><strong>Gender:</strong> ${reviewData.Gender}</p>
            <p><strong>Vaccinated:</strong> ${reviewData.Vaccinated}</p>
            <p><strong>Health Rating:</strong> ${reviewData.Health}</p>
            <p><strong>Symptoms:</strong> ${reviewData.Symptoms}</p>
            <p><strong>User ID:</strong> ${reviewData.UserID}</p>
            <p><strong>Password:</strong> ${reviewData.Password}</p>
        `;
        modal.style.display = "block";
    });

    window.confirmSubmit = function () {
        modal.style.display = "none";
        form.submit();
    };
});
