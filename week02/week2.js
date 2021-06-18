const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "W02 - Team Activity",
        url: "Numbers.html"
    },
    {
        label: "Color Change Button",
        url: "rainbow.html"
    },
    {
        label: "Quiz Ninja",
        url: "W02-QuizNinja.html"
    },
    {
        label: "Programming Basics Notes",
        url: "W02 - Programming Basics.pdf"
    },
    {
        label: "Arrays, Logic, and Loops Notes",
        url: "W02 - Arrays, Logic, and Loops.pdf"
    },
    {
        label: "Functions Notes",
        url: "W02 - Function.pdf"
    },
    {
        label: "CSS Review Notes",
        url: "W02 - CSS Review.pdf"
    }
]

function dynamicLnk() {
    var finLink = '<ol>';

    for (i = 0; i < links.length; i++) {
        finLink += '<li><a href="' + links[i].url + '">' + links[i].label + '</a></li>';
    }

    finLink += '</ol>';

    document.getElementById("directory").innerHTML = finLink;
}

window.onload = dynamicLnk;