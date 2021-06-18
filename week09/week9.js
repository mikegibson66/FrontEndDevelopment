import DynamicLink from "../js/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "JavaScript Drum Kit",
        url: "W09-TeamActivity_JS-DrumKit.html"
    }
]

document.getElementById("directory").innerHTML = dlink.dynamicLnk(links);