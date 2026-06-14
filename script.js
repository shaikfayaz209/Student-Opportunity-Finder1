// Welcome Message

document.getElementById("welcomeMessage")
.innerHTML =
"Welcome to Student Opportunity Finder";

document.getElementById("currentDate")
.innerHTML =
new Date().toDateString();


// Animated Counters

function animateCounter(
id,
target
){

let count = 0;

const increment =
target / 100;

const counter =
setInterval(() => {

count += increment;

if(count >= target){

count = target;

clearInterval(counter);

}

document.getElementById(id)
.innerText =
Math.floor(count) + "+";

},20);

}

animateCounter(
"opportunitiesCounter",
10000
);

animateCounter(
"studentsCounter",
5000
);

animateCounter(
"companiesCounter",
100
);


// Search

function searchOpportunities(){

const input =
document
.getElementById(
"searchInput"
)
.value
.toLowerCase();

const cards =
document
.querySelectorAll(
".opportunity-card"
);

cards.forEach(card=>{

const title =
card
.querySelector("h3")
.innerText
.toLowerCase();

if(
title.includes(input)
){

card.style.display =
"block";

}else{

card.style.display =
"none";

}

});

}


// Save Opportunity

function saveOpportunity(
name
){

let saved =
JSON.parse(
localStorage.getItem(
"savedOpportunities"
)
) || [];

saved.push(name);

localStorage.setItem(
"savedOpportunities",
JSON.stringify(saved)
);

alert(
name +
" Saved Successfully!"
);

}


// Login Validation

function validateLogin(){

const email =
document
.getElementById(
"email"
).value;

const password =
document
.getElementById(
"password"
).value;

if(
email === "" ||
password === ""
){

alert(
"Please fill all fields"
);

return;

}

if(
password.length < 6
){

alert(
"Password must contain at least 6 characters"
);

return;

}

alert(
"Login Successful"
);

}


// AI Advisor

function analyzeSkills(){

const skills =
document
.getElementById(
"skillInput"
)
.value
.toLowerCase();

let result = "";

if(
skills.includes("html") ||
skills.includes("css") ||
skills.includes("javascript")
){

result = `
Recommended:

Frontend Internship

React Course

Web Hackathon
`;

}
else if(
skills.includes("python")
){

result = `
Recommended:

AI Internship

Data Science Program

Machine Learning Course
`;

}
else{

result = `
Recommended:

Explore Opportunities
`;
}

document
.getElementById(
"result"
)
.innerHTML = result;

}


// Load Opportunities From Supabase

async function loadOpportunities(){

try{

const response =
await fetch(
"http://localhost:5000/api/opportunities"
);

const result =
await response.json();

const container =
document.getElementById(
"opportunityContainer"
);

if(
!container
) return;

container.innerHTML = "";

result.opportunities.forEach(
opportunity => {

container.innerHTML += `

<article
class="opportunity-card">

<h3>
${opportunity.title}
</h3>

<p>
${opportunity.description}
</p>

<p>
<strong>
${opportunity.company}
</strong>
</p>

<button
onclick="
window.open(
'${opportunity.apply_link}',
'_blank'
)
">

Apply Now

</button>

</article>

`;

});

}catch(error){

console.error(
"Error Loading Opportunities:",
error
);

}

}

loadOpportunities();