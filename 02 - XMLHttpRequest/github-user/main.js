// Your code goes here
let input = document.querySelector("input");
let button = document.querySelector("button");

function getData(event) {
  if (input.value != "") {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.github.com/users/${input.value}`);
    xhr.addEventListener("load", () => {
      showData(JSON.parse(xhr.response));
    });
    xhr.send();
    input.value = "";
  }
}
function showData(data) {
  let h2 = document.createElement("h2");
  h2.textContent = `Name: ${data.name}`;
  //   let h3 = document.createElement("h3");
  //   h3.textContent = `ID: ${data.id}`;
  let p = document.createElement("p");
  p.textContent = `Bio: ${data.bio}`;
  let repo = document.createElement("p");
  repo.textContent = ` Public repos: ${data.public_repos}`;
  let img = document.createElement("img");
  let flex = document.createElement("div");
  flex.classList.add("flex");
  let info = document.createElement("div");
  info.classList.add("info");
  let image = document.createElement("div");
  image.classList.add("gitimage");
  img.classList.add("image");
  img.src = data.avatar_url;
  info.append(h2, p, repo);
  image.append(img);
  flex.append(image, info);
  document.body.append(flex);
  console.log(data);
}

button.addEventListener("click", getData);
