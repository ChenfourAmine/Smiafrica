
function init() {
    loadData();
}

function loadData() {
    loadSolutions();
    loadGoals();
}

function loadSolutions() {
    fillContainer('solutions', solutions, (solution)=> {
        let s = `
        <div>
            <div style="background-image: url(images/${solution.image});" onclick="loadSolution(${solution.id})">
                <div><img src="icons/info-white.png"></div>
            </div>
            <header>${solution.title}</header>
            <p>${solution.content}</p>
        </div>
        `;
        return s;
    })
}

function loadGoals() {
    let pagination = new Pagination('goals-list', 'pagination2', goals, 1);
    pagination.load((goal) => {
        return `<p>${goal}<img src="icons/goals-white.png" /></p>`;
    })
}

function loadProdServices() {
    let prodServ = solutionsDetails[0].productionServices
    fillContainer('production-services', prodServ, (service) => {
        let s = `
        <div>
            <img src="icons/${service.img}">
            <span>${service.text}</span>
        </div>
        `
        return s
    })
}

function loadSol2Services() {
    let pagination = new Pagination('services-list', 'serv-pagination2', solutionsDetails[1].services, 1);
    setContent('services-list', '');
    setContent('serv-pagination2', '');
    pagination.load((service) => {
        return `<div>
                    <header> ${service.header} </header>
                    <p> ${service.p} </p>
                </div>`;
    })

}

function loadSolution(index) {
    hideById('solution0')
    hideById('solution1')
    hideById('solution2')
    hideById('solution3')

    loadSolutionHome(index)
    loadProdServices();
    loadSol2Services();
    loadSol2Workflow();

    showById('solutions-details')
    showById(`solution${index}`)
    
    var targetElement = document.getElementById('solutions-details');
    if (targetElement) {
        targetElement.scrollIntoView();
    }
}

function loadSolutionHome(index) {
    let solution = solutionsDetails[index]

    let content = `<div>
                        <header>${solution.title}</header>
                        <p>${solution.paragraph}</p>
                        <img src="images/${solution.img}">
                        <span>Try it now</span>
                   </div>
                   <div>
                        <img src="images/${solution.img}">
                   </div>`

    document.getElementById('media-home').innerHTML = content
}

function loadSol2Workflow() {
    let steps = solutionsDetails[1].workflowSteps;
    fillContainer('work-flow-steps', steps, (step) => {
        let s = `
        <div>
            <span> ${step.title} <img src="icons/${step.img}"/> </span>
            <p> ${step.p} </p>
        </div>
        `
        return s
    })
}

function changePage(id) {
    hideById('home');
    hideById('about-us-ctr');
    //hideById('customers-ctr');
    hideById('contact-us-ctr')
    showById(id);
}
