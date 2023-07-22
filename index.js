const subtractButtons = document.querySelectorAll(".subtract");
const addButtons = document.querySelectorAll(".add");
const itemsArr = ["backbag", "shoes"];
const submitForm = document.getElementById("submit");

subtractButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        handleButtonPress("sub", itemsArr[index]);
    });
});

addButtons.forEach((button, index) => {
    addButtons[index].addEventListener("click", (e) => {
        handleButtonPress("add", itemsArr[index]);
    });
});



submitForm.addEventListener("submit", (e) => {

    e.preventDefault();
    createSuccessCard();
})

function handleButtonPress(operation, id)
{
    const amountDisplay = document.getElementById(id);
    const currentAmount = parseInt(amountDisplay.innerText);

    if(operation === "sub" && currentAmount - 1 > 0)
    {
        amountDisplay.innerText = currentAmount - 1;
    }

    if(operation === "add")
    {
        amountDisplay.innerText = currentAmount + 1;
    }
}

function createSuccessCard()
{
    const successWrapper = document.createElement("div");
    const cardWrapper = document.createElement("div");
    const cardText = document.createElement("h2");

    successWrapper.id = "successCard";

    successWrapper.classList.add("success-wrapper");
    cardWrapper.classList.add("success-card-wrapper");
    cardText.classList.add("success-card-text");

    cardText.textContent = "Successful Transaction!";
    cardWrapper.append(cardText);
    successWrapper.append(cardWrapper);

    document.body.append(successWrapper);

    setTimeout(removeSuccessCard, 1500);
}

function removeSuccessCard()
{
    document.getElementById("successCard").remove();
}