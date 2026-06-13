// Welcome Message

document.addEventListener("DOMContentLoaded", () => {

const welcome =
document.getElementById("welcomeMessage");

if(welcome){

    welcome.innerHTML =
    "🚀 Welcome to Student Opportunity Finder";

}

const date =
document.getElementById("currentDate");

if(date){

    date.innerHTML =
    new Date().toDateString();

}

animateCounter(
    "opportunitiesCounter",
    10000,
    "+"
);

animateCounter(
    "studentsCounter",
    5000,
    "+"
);

animateCounter(
    "companiesCounter",
    100,
    "+"
);

});

// Counter Animation

function animateCounter(
id,
target,
suffix
){

let element =
document.getElementById(id);

if(!element) return;

let count = 0;

let step =
Math.ceil(target / 100);

let interval =
setInterval(() => {

    count += step;

    if(count >= target){

        count = target;

        clearInterval(interval);

    }

    element.innerHTML =
    count + suffix;

},20);

}

// Search Opportunities

function searchOpportunities(){

let input =
document.getElementById(
"searchInput")
.value
.toLowerCase();

let cards =
document.querySelectorAll(
".opportunity-card");

cards.forEach(card => {

    let text =
    card.innerText.toLowerCase();

    if(text.includes(input)){

        card.style.display =
        "block";

    }

    else{

        card.style.display =
        "none";

    }

});

}

// Save Opportunity

function saveOpportunity(title){

let saved =
JSON.parse(
localStorage.getItem(
"savedOpportunities")
) || [];

saved.push(title);

localStorage.setItem(
"savedOpportunities",
JSON.stringify(saved)
);

alert(
title +
" saved successfully ✅"
);

}

// Login Validation

function validateLogin(){

let email =
document.getElementById(
"email").value;

let password =
document.getElementById(
"password").value;

if(email === ""
|| password === ""){

    alert(
    "Please fill all fields"
    );

    return;

}

if(password.length < 6){

    alert(
    "Password must contain at least 6 characters"
    );

    return;

}

alert(
"Login Successful 🚀"
);

}

// AI Recommendation

function analyzeSkills(){

let skills =
document.getElementById(
"skillInput")
.value
.toLowerCase();

let result =
document.getElementById(
"result");

if(skills.includes("html")
|| skills.includes("css")
|| skills.includes("javascript")){

    result.innerHTML =

    `
    <h3>
    Recommended For You
    </h3>

    <p>
    ✅ Frontend Internship
    </p>

    <p>
    ✅ React Course
    </p>

    <p>
    ✅ Web Hackathon
    </p>
    `;

}

else if(
skills.includes("python")
|| skills.includes("ai")
){

    result.innerHTML =

    `
    <h3>
    Recommended For You
    </h3>

    <p>
    ✅ AI Internship
    </p>

    <p>
    ✅ Machine Learning Course
    </p>

    <p>
    ✅ AI Hackathon
    </p>
    `;

}

else{

    result.innerHTML =

    `
    <h3>
    Recommended For You
    </h3>

    <p>
    Explore Internships,
    Certifications and
    Hackathons
    </p>
    `;

}

}

// Console Test

console.log(
"JavaScript Connected Successfully 🚀"
);