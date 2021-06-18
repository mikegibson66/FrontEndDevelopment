const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "Notes on Storage from Doing Things",
        url: "W01 - Doing Things With Web Things - Storage.pdf"
    },
    {
        label: "Week 1: Story Editor",
        url: "story_editor.html"
    },
    {
        label: "Master Mobile UX Certificate",
        url: "Master Mobile UX certificate.pdf"
    },
    {
        label: "Master Mobile UX notes",
        url: "W01 - MASTER MOBILE UX.pdf"
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