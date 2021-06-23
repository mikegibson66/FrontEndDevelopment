import DynamicLink from "./dynamicLink.js";

const dlink = new DynamicLink();

const links1 = [
    {
        label: "Week 1 Index",
        url: "week01/index.html"
    },
    {
        label: "Week 2 Index",
        url: "week02/index.html"
    },
    {
        label: "Week 3 Index",
        url: "week03/index.html"
    },
    {
        label: "Week 4 Index",
        url: "week04/index.html"
    },
    {
        label: "Week 5 Index",
        url: "week05/index.html"
    },
    {
        label: "Week 6 Index",
        url: "week06/index.html"
    }
]

const links2 = [
    {
        label: "Week 7 Index",
        url: "week07/index.html"
    },
    {
        label: "Week 8 Index",
        url: "week08/index.html"
    },
    {
        label: "Week 9 Index",
        url: "week09/index.html"
    },
    {
        label: "Week 10 Index",
        url: "week10/index.html"
    }
]

document.getElementById('block1directory').innerHTML = dlink.dynamicLnk(links1);
document.getElementById('block2Directory').innerHTML = dlink.dynamicLnk(links2);

