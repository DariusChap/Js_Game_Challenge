let count = 0;
let count1 = 0;
let goals = 0;
let resetCount = 0;
const teamoneButton = document.querySelector("#teamone-shoot-button");
const teamoneNumShots = document.querySelector("#teamone-numshots");
const teamtwoButton = document.querySelector("#teamtwo-shoot-button");
const teamtwoNumShots = document.querySelector("#teamtwo-numshots");
const teamoneNumGoals = document.querySelector("#teamone-numgoals");
const teamtwoNumGoals = document.querySelector("#teamtwo-numgoals");
const resetButton = document.querySelector("#reset-button");
const resetNumber = document.querySelector("#num-resets");


teamoneButton.addEventListener("click", function() {
    count = parseInt(teamoneNumShots.innerText) + 1;
    teamoneNumShots.innerText = count;
    
    
    const rand = Math.random();
    if (rand > 0.5) {
        console.log("Greater than" + rand)
        goals = parseInt(teamoneNumGoals.innerText) + 1;
        teamoneNumGoals.innerText = goals;
    } else {
        console.log("Less than" + rand)
    }


})


teamtwoButton.addEventListener("click", function() {
    count1 = parseInt(teamtwoNumShots.innerText) + 1;
    teamtwoNumShots.innerText = count1;

    const rand = Math.random();
    if (rand > 0.5) {
        console.log("Greater than" + rand)
        goals = parseInt(teamtwoNumGoals.innerText) + 1;
        teamtwoNumGoals.innerText = goals;
    } else {
        console.log("Less than" + rand)
    }
    

})

resetButton.addEventListener("click", function() {
    resetCount = parseInt(resetNumber.innerText) + 1;
    resetNumber.innerText = resetCount;
    teamoneNumShots.innerText = 0;
    teamtwoNumShots.innerText = 0;
    teamoneNumGoals.innerText = 0;
    teamtwoNumGoals.innerText = 0;

})    













   
    


 