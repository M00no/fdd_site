function message() {
    alert("you suck");
}

const form = document.getElementById("request-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    alert(name + " " + email + " " + topic + " " + message);
})
