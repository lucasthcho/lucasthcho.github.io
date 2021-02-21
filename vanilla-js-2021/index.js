const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        input.className = SHOWING_CN;
    } else {
        form.classList.remove(SHOWING_CN);
        input.classList.add(SHOWING_CN);
        input.innerText = currentUser;
    }
}

function init() {
    loadName();
}

init();