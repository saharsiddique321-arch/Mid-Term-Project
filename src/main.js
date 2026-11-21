// HAMBURGER.....
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active")
    });
}
// BACK TO TOP BUTTON....
let backToTop = document.getElementById("backToTop");
if (backToTop) {
    backToTop.onclick = function () {
        window.scrollTo(0, 0)
    }
}
// HEALTHY TIPS....
let tips = document.getElementById("healthTip");
let button = document.getElementById("nextTip");

let count = 1;

if (button && tips) {
    button.onclick = function () {
        if (count == 1) {
            tips.innerHTML = ("Eat fresh fruits daily.")
            count = 2
        }
        else if (count == 2) {
            tips.innerHTML = ("Drink enough water.")
            count = 3
        }
        else if (count == 3) {
            tips.innerHTML = ("Take a daily walk.")
            count = 4
        }
        else if (count == 4) {
            tips.innerHTML = ("Get 7 to 9 hours of sleep.")
            count = 5
        }
        else if (count == 5) {
            tips.innerHTML = ("Eat healthy vegetables.")
            count = 6
        }
        else if (count == 6) {
            tips.innerHTML = ("Wash your hands regularly.")
            count = 1
        }
    }
}

// DOCTORS.....
let doctorModal = document.getElementById("doctorModal");
let closeModal = document.getElementById("closeModal");
let viewProfile = document.querySelectorAll(".view-profile");
let searchDoctor = document.getElementById("searchDoctor");
let allDoctorCard = document.querySelectorAll(".all-doctor-card");
let filterSpecialty = document.getElementById("filterSpecialty")


viewProfile.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        doctorModal.style.display = "flex";
    });
});
// CLOSE MODAL....
if (closeModal) {
    closeModal.addEventListener("click", function () {
        doctorModal.style.display = "none";
    })
}

doctorModal.addEventListener("click", function (event) {
    if (event.target === doctorModal) {
        doctorModal.style.display = "none";
    }
});

// ALL DOCTOR CARDS...
searchDoctor.addEventListener("input", function () {
    let searchText = searchDoctor.value.toLowerCase().trim()
    allDoctorCard.forEach(function (card) {
        let doctorName = card.querySelector("h3").innerText.toLowerCase()
        if (doctorName.includes(searchText)) {

            card.style.display = "grid";
        }
        else {
            card.style.display = "none";
        }
    });
});

// FILTER SPECIALITY
filterSpecialty.addEventListener("change", function(){
    
})
// APPOINTMENT FORM VALIDATION...
let appointmentForm = document.getElementById("appointmentForm");
let patientName = document.getElementById("patientName");
let patientPhone = document.getElementById("patientPhone");
let selectDoctor = document.getElementById("selectDoctor");
let selectDepartment = document.getElementById("selectDepartment");
let appointmentDate = document.getElementById("appointmentDate");
let appointmentTime = document.getElementById("appointmentTime");
let healthProblem = document.getElementById("healthProblem");
let formMessage = document.getElementById("formMessage");
// CONFIRMATION
let confirmationBox = document.getElementById("confirmationBox");
let confirmedName = document.getElementById("confirmedName");
let confirmedPhone = document.getElementById("confirmedPhone");
let confirmedDoctor = document.getElementById("confirmedDoctor");
let confirmedDepartment = document.getElementById("confirmedDepartment");
let confirmedDate = document.getElementById("confirmedDate");
let confirmedTime = document.getElementById("confirmedTime");
let confirmedHealth = document.getElementById("confirmedHealth");
let closeConfirmation = document.getElementById("closeConfirmation")

let today = new Date();
if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = patientName.value;
        let phone = patientPhone.value;
        let doctor = selectDoctor.value;
        let department = selectDepartment.value;
        let date = appointmentDate.value;
        let time = appointmentTime.value;
        let health = healthProblem.value;

        if (name == "") {
            formMessage.innerText = "Please enter your name...";
        }

        else if (phone == "") {
            formMessage.innerText = "Please enter your phone number...";
        }
        else if (isNaN(phone)) {
            formMessage.innerText = "Please enters numbers only..."
        }
        else if (phone.length != 11) {
            formMessage.innerText = "Phone number must be 11 digits...";
        }

        else if (doctor == "") {
            formMessage.innerText = "Please select your doctor...";
        }

        else if (department == "") {
            formMessage.innerText = "Please select your department...";
        }

        else if (date == "") {
            formMessage.innerText = "Please enter your date...";
        }

        else if (new Date(date) < new Date(today.toDateString())) {
            formMessage.innerText = "Past dates are not allowed..."
        }

        else if (time == "") {
            formMessage.innerText = "Please enter your time...";
        }
        else if (health == "") {
            formMessage.innerText = "Please describe your health problem...";
        }
        else {

            formMessage.innerText = "Appointment booked Successfully...";


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
}

// CLOSE BUTTON
if (closeConfirmation) {
    closeConfirmation.addEventListener("click", function () {
        confirmationBox.style.display = "none";
        appointmentForm.reset();
    })
};