let string = "";
let memory = 0;

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
button.addEventListener("click", (e) => {

    let value = e.target.innerHTML.trim();

    // Equal
    if (value === "=") {

        try {
            string = eval(string);

            document.querySelector(".input").value = string;

        } catch (error) {

            document.querySelector(".input").value = "Error";

            string = "";
        }
    }

    // All Clear
    else if (value === "AC") {

        string = "";

        document.querySelector(".input").value = string;
    }

    // Percentage
    else if (value === "%") {

        try {

            string = eval(string) / 100;

            document.querySelector(".input").value = string;

        } catch (error) {

            document.querySelector(".input").value = "Error";

            string = "";
        }
    }

    // Memory Add
    else if (value === "M+") {

        memory += Number(string || 0);

        document.querySelector(".input").value = memory;
    }

    // Memory Minus
    else if (value === "M-") {

        memory -= Number(string || 0);

        document.querySelector(".input").value = memory;
    }

    // Normal buttons
    else {

        string = string + value;

        document.querySelector(".input").value = string;
    }

});

});
