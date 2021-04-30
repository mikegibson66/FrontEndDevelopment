const links = [
    {
        label: "Main Page",
        url: "../index.html"
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

    for (i = 0; i < links.length; i++) {
        finLink += '<li><a href="' + links[i].url + '">' + links[i].label + '</a></li>';
    }

    finLink += '</ol>';

    document.getElementById("directory").innerHTML = finLink;
}

window.onload = dynamicLnk;