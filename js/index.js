
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
            <div style="background-image: url(images/${solution.image});">
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
        return `<p>${goal}<img src="icons/goal.png" /></p>`;
    })
}