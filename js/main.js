const links = [
    {
        label: "Week 1 Index",
        url: "week1/index.html"
    },
    {
        label: "Notes on Storage from Doing Things",
        url: "week1/W01 - Doing Things With Web Things - Storage.pdf"
    },
    {
        label: "Week 1: Story Editor",
        url: "week1/story_editor.html"
    },
    {
        label: "Master Mobile UX Certificate",
        url: "week1/Master Mobile UX certificate.pdf"
    },
    {
        label: "Master Mobile UX notes",
        url: "week1/W01 - MASTER MOBILE UX.pdf"
    },
    {
        label: "Week 2 Index",
        url: "week2/index.html"
    },
    {
        label: "W02 - Team Activity",
        url: "week2/Numbers.html"
    },
    {
        label: "Color Change Button",
        url: "week2/rainbow.html"
    }
]

function dynamicLnk() {
    var finLink = '<ol>';

    for (let i = 0, max = links.length; i < max; i++) { // establish the max at the set stage of the loop
        finLink += '<li><a href="' + links[i].url + '">' + links[i].label + '</a></li>';
    }

    finLink += '</ol>';

    document.getElementById("directory").innerHTML = finLink;
}

window.onload = dynamicLnk;

