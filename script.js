const goalInput = document.getElementById('goal');
const setGoalBtn = document.getElementById('setGoal');
const stepsDisplay = document.getElementById('steps');
const progressBar = document.getElementById('progress-bar');
const percentageDisplay = document.getElementById('percentage');
const resetBtn = document.getElementById('reset');

let goal = 10000;
let steps = 0;
let intervalId;

function updateDisplay() {
    stepsDisplay.textContent = steps;
    const percentage = Math.min((steps / goal) * 100, 100);
    progressBar.style.width = `${percentage}%`;
    percentageDisplay.textContent = `${percentage.toFixed(1)}%`;

    if (steps >= goal) {
        progressBar.classList.add('goal-reached');
    } else {
        progressBar.classList.remove('goal-reached');
    }
}

function incrementSteps() {
    steps += Math.floor(Math.random() * 10) + 1; // Incremento aleatorio entre 1 y 10 pasos
    updateDisplay();
}

function setGoal() {
    goal = parseInt(goalInput.value);
    if (isNaN(goal) || goal <= 0) {
        alert('Por favor, ingrese una meta válida.');
        return;
    }
    resetSimulator();
}

function resetSimulator() {
    clearInterval(intervalId);
    steps = 0;
    updateDisplay();
    intervalId = setInterval(incrementSteps, 1000); // Incrementa los pasos cada segundo
}

setGoalBtn.addEventListener('click', setGoal);
resetBtn.addEventListener('click', resetSimulator);

// Inicialización
resetSimulator();