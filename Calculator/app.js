let input = document.getElementById("ibox");
let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if (value === "=") {
            expression = eval(expression);
            input.value = expression;
        } else if (value === "AC") {
            expression = "";
            input.value = expression;
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += value;
            input.value = expression;
        }
    });
});


