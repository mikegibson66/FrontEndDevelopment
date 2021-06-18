const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "Challenge One",
        url: "../Challenge1 (1)/todo.html"
    },
    {
        label: "Local Storage Playground",
        url: "LocalStoragePlayground.html"
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