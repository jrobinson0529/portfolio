const showProjects = (array) => {
  array.forEach((element) => {
    const domString = `<div class="card p-3" style="width: 50rem;" id="asdfasdf">
    <h5 class="card-title fs-3 text-center mb-4">${element.title}</h5>
                      <img src="${element.screenshot}" class="card-img-top" alt="screenshot of a webpage">
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
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#formModal" id="techModalButton--${element.firebaseKey}">
                      TECH USED
                      </button>
                        </div>
                      </div>
                    </div>`;
    $('#projectsPage').append(domString);
  });
};

export default showProjects;
