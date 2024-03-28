let time = document.getElementById("timer"); // tiemer


let spinner = document.getElementById("spinner");

let quoteDisplay = document.getElementById("quoteDisplay"); // data
let quoteInput = document.getElementById("quoteInput"); //user need to fill this form 

let result = document.getElementById("result");

let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let url = "https://apis.ccbp.in/random-quote";

function getData() {
    let option = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    fetch(url, option)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData.content);
            spinner.classList.add("d-none");
            quoteDisplay.textContent = jsonData.content;
        });
}
getData();
let uniqueId = null;

function counter() {
    let c = 0;
    uniqueId = setInterval(function () {
        c = c + 1;
        time.textContent = c;

    }, 1000);

}
counter();

submitBtn.addEventListener("click", function () {
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(uniqueId);
        result.textContent = "You completed in " + time.textContent + " secounds";
        result.style.color = "green";
        result.style.fontWeight = "600";
        return;

    } else {
        result.textContent = "You Typed Incorect Sentence";
        result.style.color = "red";
        result.style.fontWeight = "600";
    }
});

resetBtn.addEventListener("click", function () {
    quoteDisplay.textContent = "";
    quoteInput.value = "";
    result.textContent = "";
    getData();
    clearInterval(uniqueId);
    time.textContent = "0";
    counter();
});