import projects from "./project.js";

const popup = document.getElementById("popup");

function popupWindow(event) {
  const cardId = event.currentTarget.closest(".card").dataset.cardId;
  const project = projects[cardId];
  popup.innerHTML += `
    <div class="card" data-card-id="${cardId}" style="width: 18rem;">
      <img src="${project.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <div class="card-text">
          <div class="tag">${project.stacks[0]}</div>
          <div class="tag">${project.stacks[1]}</div>
          <div class="tag">${project.stacks[2]}</div>
          <div class="tag">${project.stacks[3]}</div>
        </div>
        <p class="card-text">${project.desc}</p>
        <div class="project_btn_cont">
          <a href="#" class="project_btn" id="project_btn">See live</a>
          <a href="#" class="project_btn" id="project_btn">See source</a>
        </div>
      </div>
    </div>
  `;
}

export default popupWindow;
