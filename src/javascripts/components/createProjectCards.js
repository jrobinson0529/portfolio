import printToDom from '../helpers/printToDom';

const createProjectCards = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `<div class="card p-3" style="width: 35rem;" id=${i}>
  <h5 class="card-title fs-3 text-center mb-4">${element.title}</h5>
                    <img src=${element.screenshot} class="card-img-top" alt="screenshot of a webpage">
                    <hr>
                    <div class="card-body">
                      <p class="card-text fs-3 mb-3">${element.description}</p>
                    </div>
                    <hr>
                    <div class="card-body d-flex foot-container">
                    <div class="w-50 d-flex flex-column">
                      <a href="${element.url}" class="card-link text-decoration-none fs-4" target="_blank">Webpage</a>
                      <a href="${element.githubUrl}" class="card-link text-decoration-none fs-4 mx-0" target="_blank">GitHub</a>
                    </div>
                    <div class="w-50 d-flex justify-content-end">
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal1">
                    TECH USED
                    </button>
                      </div>
                    </div>
                  </div>`;
    if (element.available) { printToDom('#projectsPage', domString); }
  });
};

export default createProjectCards;
