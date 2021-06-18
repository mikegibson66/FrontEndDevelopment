const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "W04 - Team Activity",
        url: "Tic-Tac-Toe.html"
    },
    {
        label: "JavaScript Notes/Examples - OOP in JavaScript",
        url: "objectOrientedNotes.pdf"
    },
    {
        label: "Event Listeners in JavaScript",
        url: "search.html"
    },
    {
        label: "More Event Listeners and Validations",
        url: "hero.html"
    },
    {
        label: "Novice to Ninja Notes - Forms",
        url: "W04 - Forms.pdf"
    },
    {
        label: "Novice to Ninja Notes - Object-Oriented Programming",
        url: "W04 - Object-Oriented Programming.pdf"
    },
    {
        label: "Novice to Ninja Notes - Modular Javascript",
        url: "W04- Modular Javascript.pdf"
    },
    {
        label: "Quiz Ninja - FORMS",
        url: "W04-quizNinja.html"
    },
    {
        label: "Quiz Ninja - Objects/Classes",
        url: "W04b-quizNinja.html"
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