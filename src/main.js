
// ===== HAMBURGER MENU =====

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


// ===== BACK TO TOP BUTTON =====

let backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.onclick = function () {
        window.scrollTo(0, 0);
    };

}


// ===== HEALTHY TIPS =====

let tips = document.getElementById("healthTip");
let nextTipButton = document.getElementById("nextTip");

let count = 1;

if (nextTipButton && tips) {

    nextTipButton.onclick = function () {

        if (count == 1) {
            tips.innerHTML = "Eat fresh fruits daily.";
            count = 2;
        }

        else if (count == 2) {
            tips.innerHTML = "Drink enough water.";
            count = 3;
        }

        else if (count == 3) {
            tips.innerHTML = "Take a daily walk.";
            count = 4;
        }

        else if (count == 4) {
            tips.innerHTML = "Get 7 to 9 hours of sleep.";
            count = 5;
        }

        else if (count == 5) {
            tips.innerHTML = "Eat healthy vegetables.";
            count = 6;
        }

        else if (count == 6) {
            tips.innerHTML = "Wash your hands regularly.";
            count = 1;
        }

    };

}


// ===== DOCTORS =====

let doctorModal = document.getElementById("doctorModal");
let closeModal = document.getElementById("closeModal");
let viewProfile = document.querySelectorAll(".view-profile");

let searchDoctor = document.getElementById("searchDoctor");
let allDoctorCard = document.querySelectorAll(".all-doctor-card");
let filterSpecialty = document.getElementById("filterSpecialty");


// ===== OPEN DOCTOR MODAL =====

if (doctorModal) {

    viewProfile.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            let doctorCard = button.closest(".all-doctor-card");

            if (!doctorCard) return;

            let image = doctorCard.querySelector("img");
            let name = doctorCard.querySelector("h3");
            let specialty = doctorCard.querySelector(".all-doctor-info > span");
            let description = doctorCard.querySelector(".all-doctor-info > p");
            let details = doctorCard.querySelectorAll(".doctor-details p");
            let status = doctorCard.querySelector(".doctor-status");

            let modalImage = document.getElementById("modalDoctorImage");
            let modalName = document.getElementById("modalDoctorName");
            let modalSpecialty = document.getElementById("modalDoctorSpecialty");
            let modalDescription = document.getElementById("modalDoctorDescription");
            let modalExperience = document.getElementById("modalDoctorExperience");
            let modalRating = document.getElementById("modalDoctorRating");
            let modalAvailability = document.getElementById("modalDoctorAvailability");

            if (
                image && name && specialty && description &&
                details.length >= 2 && status &&
                modalImage && modalName && modalSpecialty &&
                modalDescription && modalExperience &&
                modalRating && modalAvailability
            ) {

                modalImage.src = image.src;
                modalImage.alt = name.innerText;

                modalName.innerText = name.innerText;
                modalSpecialty.innerText = specialty.innerText;
                modalDescription.innerText = description.innerText;

                modalExperience.innerText = details[0].innerText;
                modalRating.innerText = details[1].innerText;

                modalAvailability.innerText = "Availability: " + status.innerText;

                doctorModal.style.display = "flex";

            }

        });

    });

}


// ===== CLOSE DOCTOR MODAL =====

if (closeModal && doctorModal) {

    closeModal.addEventListener("click", function () {
        doctorModal.style.display = "none";
    });

}

if (doctorModal) {

    doctorModal.addEventListener("click", function (event) {

        if (event.target === doctorModal) {
            doctorModal.style.display = "none";
        }

    });

}


// ===== SEARCH AND FILTER DOCTORS =====

if (searchDoctor || filterSpecialty) {

    function filterDoctors() {

        let searchText = searchDoctor
            ? searchDoctor.value.toLowerCase().trim()
            : "";

        let selectedSpecialty = filterSpecialty
            ? filterSpecialty.value
            : "all";

        allDoctorCard.forEach(function (card) {

            let heading = card.querySelector("h3");
            let specialty = card.querySelector(".all-doctor-info > span");

            if (heading && specialty) {

                let doctorName = heading.innerText.toLowerCase();
                let doctorSpecialty = specialty.innerText;

                let nameMatch = doctorName.includes(searchText);

                let specialtyMatch =
                    selectedSpecialty === "all" ||
                    doctorSpecialty === selectedSpecialty;

                if (nameMatch && specialtyMatch) {
                    card.style.display = "";
                }

                else {
                    card.style.display = "none";
                }

            }

        });

    }

    if (searchDoctor) {
        searchDoctor.addEventListener("input", filterDoctors);
    }

    if (filterSpecialty) {
        filterSpecialty.addEventListener("change", filterDoctors);
    }

}


// ===== NEWSLETTER POPUP =====

let newsletterForm = document.getElementById("newsletterForm");

let subscribePopup = document.getElementById("subscribePopup");

let closePopup = document.getElementById("closePopup");

if (newsletterForm && subscribePopup && closePopup) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        subscribePopup.style.display = "flex";

        newsletterForm.reset();

    });

    closePopup.addEventListener("click", function () {

        subscribePopup.style.display = "none";

    });

}


// ===== LOGIN FORM =====

let loginForm = document.getElementById("loginForm");

let loginPopup = document.getElementById("loginPopup");

let loginPopupTitle = document.getElementById("loginPopupTitle");

let loginPopupMessage = document.getElementById("loginPopupMessage");

let closeLoginPopup = document.getElementById("closeLoginPopup");


// ===== SHOW LOGIN POPUP =====

function showLoginPopup(title, message) {

    loginPopupTitle.innerText = title;

    loginPopupMessage.innerText = message;

    loginPopup.style.display = "flex";

}


// ===== LOGIN VALIDATION =====

if (
    loginForm &&
    loginPopup &&
    loginPopupTitle &&
    loginPopupMessage &&
    closeLoginPopup
) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email");

        let password = document.getElementById("password");

        let userEmail = email.value.trim();

        let userPassword = password.value.trim();


        if (userEmail == "") {

            showLoginPopup("Required!", "Please enter your email...");

        }

        else if (!email.checkValidity()) {

            showLoginPopup("Invalid Email!", "Please enter a valid email address...");

        }

        else if (userPassword == "") {

            showLoginPopup("Required!", "Please enter your password...");

        }

        else if (userPassword.length < 6) {

            showLoginPopup("Invalid Password!", "Password must be at least 6 characters...");

        }

        else {

            showLoginPopup("Welcome!", "Login submitted successfully!");

            loginForm.reset();

        }

    });


    // ===== CLOSE LOGIN POPUP =====

    closeLoginPopup.addEventListener("click", function () {

        loginPopup.style.display = "none";

    });

}


// ===== APPOINTMENT FORM =====

let appointmentForm = document.getElementById("appointmentForm");

let formMessage = document.getElementById("formMessage");

let confirmationBox = document.getElementById("confirmationBox");

let closeConfirmation = document.getElementById("closeConfirmation");


// ===== CONFIRMATION ELEMENTS =====

let confirmedName = document.getElementById("confirmedName");

let confirmedPhone = document.getElementById("confirmedPhone");

let confirmedDoctor = document.getElementById("confirmedDoctor");

let confirmedDepartment = document.getElementById("confirmedDepartment");

let confirmedDate = document.getElementById("confirmedDate");

let confirmedTime = document.getElementById("confirmedTime");

let confirmedHealth = document.getElementById("confirmedHealth");


// ===== APPOINTMENT FORM VALIDATION =====

if (
    appointmentForm &&
    formMessage &&
    confirmationBox &&
    closeConfirmation &&
    confirmedName &&
    confirmedPhone &&
    confirmedDoctor &&
    confirmedDepartment &&
    confirmedDate &&
    confirmedTime &&
    confirmedHealth
) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get input values

        let name = document.getElementById("patientName").value.trim();

        let phone = document.getElementById("patientPhone").value.trim();

        let doctor = document.getElementById("selectDoctor").value;

        let department = document.getElementById("selectDepartment").value;

        let date = document.getElementById("appointmentDate").value;

        let time = document.getElementById("appointmentTime").value;

        let health = document.getElementById("healthProblem").value.trim();


        // Validation

        let today = new Date();
        today.setHours(0, 0, 0, 0);

        let selectedDate = new Date(date + "T00:00:00");


        if (name == "") {

            formMessage.innerText = "Please enter your name...";

        }

        else if (phone == "") {

            formMessage.innerText = "Please enter your phone number...";

        }

        else if (isNaN(phone) || phone.length != 11) {

            formMessage.innerText = "Please enter 11 digit phone number...";

        }

        else if (doctor == "") {

            formMessage.innerText = "Please select your doctor...";

        }

        else if (department == "") {

            formMessage.innerText = "Please select your department...";

        }

        else if (date == "") {

            formMessage.innerText = "Please enter appointment date...";

        }

        else if (selectedDate < today) {

            formMessage.innerText = "Past dates are not allowed...";

        }

        else if (time == "") {

            formMessage.innerText = "Please enter appointment time...";

        }

        else if (health == "") {

            formMessage.innerText = "Please enter your health problem...";

        }

        else {

            formMessage.innerText = "Appointment booked successfully!";

            confirmationBox.style.display = "flex";


            confirmedName.innerText = "Name: " + name;

            confirmedPhone.innerText = "Phone: " + phone;

            confirmedDoctor.innerText = "Doctor: " + doctor;

            confirmedDepartment.innerText = "Department: " + department;

            confirmedDate.innerText = "Date: " + date;

            confirmedTime.innerText = "Time: " + time;

            confirmedHealth.innerText = "Problem: " + health;


            appointmentForm.reset();

        }

    });


    // ===== CLOSE CONFIRMATION =====

    closeConfirmation.addEventListener("click", function () {

        confirmationBox.style.display = "none";

    });

}
