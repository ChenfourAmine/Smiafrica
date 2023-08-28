
function init() {
    loadData();
}

function loadData() {
    loadSolutions();
    //Other loading functions ...
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