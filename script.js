document.write("hello")

function createGreeting(name){
    const greetingHeader = document.createElement("h1");
    greetingHeader.innerText = "Greetings, " + name;
    document.querySelector('body').appendChild(greetingHeader);
}

createGreeting(prompt("Enter your name: "));