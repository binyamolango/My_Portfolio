import popupWindow from "./popup.js";

const portfolioCard = document.getElementById("portfolio_card");
const projects = [
  {
    img: "./assets/weather_app.png",
    name: "Weather App",
    stacks: ["React", "Redux", "CSS", "JavaScript"]
  },
  {
    img: "./assets/space_travelers_hub.png",
    name: "Space Travelers' Hub",
    stacks: ["React", "Redux", "CSS", "JavaScript"]
  },
  {
    img: "./assets/tv_shows.png",
    name: "Tv Shows",
    stacks: ["JavaScript", "CSS", "External API", "HTML"]
  },
  {
    img: "./assets/book_store.png",
    name: "Book Store App",
    stacks: ["React", "Redux", "CSS", "JavaScript"]
  }
];

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
    <div class="card" data-card-id="${index}">
      <img src="${project.img}" class="card-img-top" alt="weather_app_img">
      <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <div class="card-text">
          <div class="tag">${project.stacks[0]}</div>
          <div class="tag">${project.stacks[1]}</div>
          <div class="tag">${project.stacks[2]}</div>
          <div class="tag">${project.stacks[3]}</div>
        </div>
        <div class="project_btn_cont">
          <button class="project_btn">See project</button>
        </div>
      </div>
    </div>
  `;
  const projectBtn = card.querySelector(".project_btn");
  projectBtn.addEventListener("click", popupWindow);
  portfolioCard.appendChild(card);
});

export default projects;
