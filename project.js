import popupWindow from "./popup.js";

const portfolioCard = document.getElementById("portfolio_card");
const projects = [
  {
    img: "./assets/weather_app.png",
    name: "Weather App",
    stacks: ["React", "Redux", "CSS", "JavaScript"],
    desc: "A mobile app for checking the weather conditions of any city worldwide.",
    live: "https://weathercheckerby.netlify.app/",
    source: "https://github.com/binyamolango/react-capstone-check-weather"
  },
  {
    img: "./assets/space_travelers_hub.png",
    name: "Space Travelers' Hub",
    stacks: ["React", "Redux", "CSS", "JavaScript"],
    desc: "Space Travelers' Hub is a web app that uses real live data from SpaceX API and gives the user services to book rockets and join selected space missions.",
    live: "https://space-travelers-hub-76fy.onrender.com/",
    source: "https://github.com/binyamolango/space-travelers-hub"
  },
  {
    img: "./assets/tv_shows.png",
    name: "TV Shows",
    stacks: ["JavaScript", "CSS", "External API", "HTML"],
    desc: "Web app that displays TV shows by fetching from an external API.",
    live: "https://tv-shows-byo.netlify.app/",
    source: "https://github.com/binyamolango/javascript-capstone-tv-shows"
  },
  {
    img: "./assets/book_store.png",
    name: "Book Store App",
    stacks: ["React", "Redux", "CSS", "JavaScript"],
    desc: "A web app for adding, deleting, managing, and accessing a wide range of books.",
    live: "https://book-store-by.netlify.app/",
    source: "https://github.com/binyamolango/book-store"
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
