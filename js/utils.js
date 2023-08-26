function element(id) {
	return document.getElementById(id);
}
	
function content(id) {
	return document.getElementById(id).innerHTML;
}

function value(id) {
	return document.getElementById(id).value;
}
	
function setContent(id, content) {
	return document.getElementById(id).innerHTML = content;
}

function getContent(id) {
	return document.getElementById(id).innerHTML;
}
	
function setValue(id, value) {
	return document.getElementById(id).value = value;
}

function showById(id) {
	document.getElementById(id).style.display = "flex";
}

function hideById(id) {
	document.getElementById(id).style.display = "none";
}

function showElements(elements) {
	for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'flex';
    }
}

function hideElements(elements) {
	for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

function escapeQuotes(str) {
    return str.replace(/['"]/g, '\\$&');
}

function fillContainer(containerId, data, callback) {
    let s = '';
    for (let i = 0; i < data.length; i++) {
        s += callback(data[i]);
    }
    setContent(containerId, s);
}

// For menu
function showMenu(menuClass) {
    hideById('menu-bar');
    showById('hide-menu');
    let navBar = document.getElementsByClassName(menuClass)[0];
    let navItems = navBar.getElementsByTagName('div');
    showElements([...navItems].slice(1));
}

function hideMenu(menuClass) {
    document.getElementById('menu-bar').style.display = 'flex';
    document.getElementById('hide-menu').style.display = 'none';

    let navBar = document.getElementsByClassName(menuClass)[0];
    let navItems = navBar.getElementsByTagName('div');
    hideElements([...navItems].slice(1));
}