const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "W03 - Team Activity",
        url: "arrayCardio.html"
    },
    {
        label: "Events - Examples",
        url: "events.html"
    },
    {
        label: "Events - Notes",
        url: "W03 - Events.pdf"
    },
    {
        label: "DOM - Document Object Model - Examples",
        url: "heroes.html"
    },
    {
        label: "DOM - Document Object Model - Notes",
        url: "W03 - DOM - Document Object Model.pdf"
    },
    {
        label: "Quiz Ninja - Objects",
        url: "W03-QuizNinja.html"
    },
    {
        label: "Quiz Ninja - DOM",
        url: "W03b-QuizNinja.html"
    },
    {
        label: "Quiz Ninja - Events",
        url: "W03c-QuizNinja.html"
    },
    {
        label: "CSS Review",
        url: "W03 - CSS Review.pdf"
    },
    {
        label: "Object Methods: 'this'",
        url: "W03 - Object Methods_this.pdf"
    },
    {
        label: "'this' in JavaScript",
        url: "W03 - this in JavaScript.pdf"
    },
    {
        label: "W03 - Questions",
        url: "W03 - Questions.pdf"
    }
]

function dynamicLnk() {
    let finLink = '<ol>';

    for (let i = 0, max = links.length; i < max; i++) {
        finLink += '<li><a href="' + links[i].url + '">' + links[i].label + '</a></li>';
    }

    finLink += '</ol>';

    document.getElementById("directory").innerHTML = finLink;
}

window.onload = dynamicLnk;