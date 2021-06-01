const body = document.body;
// heading
const heading = document.createElement("h1");
heading.textContent = "Welcome to JS DOM";
heading.style.textAlign = "center";
// heading.innerHTML = "<strong> Tutorial</strong>";

const paragraph1 = document.createElement("p");
paragraph1.innerHTML =
  "<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias temporibus minus totam, illum provident ea id deleniti optio explicabo culpa itaque autem ex quidem maxime necessitatibus eum</span>";

paragraph1.style.color = "limegreen";
paragraph1.style.border = "1px solid black";

body.appendChild(heading);
body.appendChild(paragraph1);

//remove elements
// paragraph1.remove();
paragraph1.removeAttribute("style");
