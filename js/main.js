import DynamicLink from "./dynamicLink.js";

const dlink = new DynamicLink();

const links1 = [
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
    }
]

const links2 = [
    {
        label: "Week 7 Index",
        url: "week7/index.html"
    },
    {
        label: "Week 8 Index",
        url: "week8/index.html"
    }
]

document.getElementById('block1directory').innerHTML = dlink.dynamicLnk(links1);
document.getElementById('block2Directory').innerHTML = dlink.dynamicLnk(links2);

