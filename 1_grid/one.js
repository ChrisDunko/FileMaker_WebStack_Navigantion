function markActive(pagename) {
    let activeElement = document.getElementById(pagename);
    activeElement.classList.add('elementActive');
}
markActive(pagename);

function callNavigation(layoutName) {
    FileMaker.PerformScript("Navigation_callback", layoutName);
}
