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

