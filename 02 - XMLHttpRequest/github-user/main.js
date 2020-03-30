// Your code goes here
let input = document.querySelector("input");
let button = document.querySelector("button");

function getData(event) {
  if (input.value != "") {
    fetch(`https://api.github.com/users/${input.value}`)
      .then(res => res.json())
      .then(data => showData(data));
  }
}
function showData(data) {
  let h2 = document.createElement("h2");
  h2.textContent = data.name;
  let h3 = document.createElement("h3");
  h3.textContent = data.id;
  let p = document.createElement("p");
  p.textContent = data.bio;
  let img = document.createElement("img");
  let flex = document.createElement("div");
  flex.classList.add("flex");
  let info = document.createElement("div");
  info.classList.add("info");
  let image = document.createElement("div");
  image.classList.add("gitimage");
  img.classList.add("image");
  img.src = data.avatar_url;
  info.append(h2, h3, p);
  image.append(img);
  flex.append(image, info);
  document.body.append(flex);
  console.log(data);
}

button.addEventListener("click", getData);
