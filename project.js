const portfolioCard = document.getElementById("portfolio_card");
const projects = [
  {
    img: "./assets/weather_app.png",
    name: "Weather App",
    stacks: {
      1: "React",
      2: "Redux",
      3: "CSS",
      4: "JavaScript"
    }
  },
  {
    img: "./assets/space_travelers_hub.png",
    name: "Space Travelers' Hub",
    stacks: {
      1: "React",
      2: "Redux",
      3: "CSS",
      4: "JavaScript"
    }
  },
  {
    img: "./assets/tv_shows.png",
    name: "Tv Shows",
    stacks: {
      1: "JavaScript",
      2: "CSS",
      3: "External API",
      4: "HTML"
    }
  },
  {
    img: "./assets/book_store.png",
    name: "Book Store App",
    stacks: {
      1: "React",
      2: "Redux",
      3: "CSS",
      4: "JavaScript"
    }
  }
];

projects.forEach((project) => {
  portfolioCard.innerHTML += `
    <div class="col">
      <div class="card">
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
            <a href="#" class="project_btn">See project</a>
          </div>
        </div>
      </div>
    </div>
  `;
})
