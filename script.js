document.addEventListener("DOMContentLoaded", function () {
    const questionE1 = document.getElementById("question");
    const inputE1 = document.getElementById("input");
    const formE1 = document.getElementById("form");
    const scoreE1 = document.getElementById("score");
    const wrongE1 = document.getElementById("wrong");
    const resetButton = document.getElementById("reset");

    let num1 = Math.ceil(Math.random() * 10);
    let num2 = Math.ceil(Math.random() * 10);
    let correctAns = num1 * num2;

    // Set initial question
    questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;

    // Initialize score and wrong from localStorage
    let score = JSON.parse(localStorage.getItem("score")) || 0;
    let wrong = JSON.parse(localStorage.getItem("wrong")) || 0;

    scoreE1.innerText = `Score: ${score}`;
    wrongE1.innerText = `Wrong: ${wrong}`;

    // Update local storage after resetting
    function updatelocalstorage() {
        localStorage.setItem("score", JSON.stringify(score));
    }

    // Update local storage after resetting
    function updatelocalstorag() {
        localStorage.setItem("wrong", JSON.stringify(wrong));
    }

    // Add an event listener to the form
    formE1.addEventListener("submit", () => {
        const userAns = +inputE1.value;
        if (userAns === correctAns) {
            score++;
            updatelocalstorage();
        } else {
            wrong++;
            updatelocalstorag();
        }
    });

    // Add an event listener to the reset button
    resetButton.addEventListener("click", () => {
        resetValues();
    });

    // Function to reset values
    function resetValues() {
        score = 0;
        wrong = 0;
        updatelocalstorage();
        updatelocalstorag();
    }
});
