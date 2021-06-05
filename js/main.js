const links = [
    {
        label: "Week 1 Index",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Index",
        url: "week2/index.html"
    },
    {
        label: "Week 3 Index",
        url: "week3/index.html"
    },
    {
        label: "Week 4 Index",
        url: "week4/index.html"
    },
    {
        label: "Week 5 Index",
        url: "week5/index.html"
    },
    {
        label: "Week 6 Index",
        url: "week6/index.html"
    },
    {
        label: "Week 7 Index",
        url: "week7/index.html"
    }
]

function dynamicLnk() {
    let finLink = '<ol>';

    for (let i = 0, max = links.length; i < max; i++) { // establish the max at the set stage of the loop
        finLink += '<li><a href="' + links[i].url + '">' + links[i].label + '</a></li>';
    }

    finLink += '</ol>';

    document.getElementById("directory").innerHTML = finLink;
}

window.onload = dynamicLnk;

