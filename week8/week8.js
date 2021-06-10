import DynamicLink from "../js/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    }
]

const formItems = {
    directory: document.getElementById('directory'),
    drawType: document.getElementsByName('shape'),
    drawButton: document.getElementById('drawIt'),
    c: document.getElementById('myCanvas'),
    ctx: document.getElementById('myCanvas').getContext("2d"),
    saveButton: document.getElementById('saveButton')
}

formItems.drawButton.addEventListener('click', selectDrawType);
formItems.saveButton.addEventListener('click', saveDrawing, false);

formItems.directory.innerHTML = dlink.dynamicLnk(links);

function drawRectangle() {
    formItems.ctx.clearRect(1, 1, 198, 198);
    formItems.ctx.strokeStyle = "red";
    formItems.ctx.fillStyle = "rgba(0,0,255,0.5)";
    formItems.ctx.fillRect(10, 10, 180, 180);
    formItems.ctx.strokeRect(10, 10, 180, 180);
}

function drawPattern() {
    formItems.ctx.clearRect(1, 1, 198, 198);

    formItems.ctx.strokeStyle = "red";

    const img = new Image();
    img.src = "../images/penny-farthing.png";

    img.onload = function () {
        const pattern = formItems.ctx.createPattern(img, "repeat");
        formItems.ctx.fillStyle = pattern;
        formItems.ctx.fillRect(10, 10, 180, 180);
        formItems.ctx.strokeRect(10, 10, 180, 180);
    };
}

function drawGradient() {
    formItems.ctx.clearRect(1, 1, 198, 198);

    formItems.ctx.strokeStyle = "blue";
    const gradient = formItems.ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    formItems.ctx.fillStyle = gradient;
    formItems.ctx.fillRect(10, 10, 180, 180);
    formItems.ctx.strokeRect(10, 10,180, 180);
}

function drawCircle(canvas) {
    const context = canvas.getContext("2d");
    context.clearRect(1, 1, 198, 198);
    context.beginPath();
    context.arc(100, 100, 90, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

function selectDrawType() {
    let value = 0;
    for (let i = 0, len = formItems.drawType.length; i < len; i++) {
        if (formItems.drawType[i].checked) {
            value = formItems.drawType[i].value;
            break;
        }
    }
    switch (parseInt(value)) {
        case 0:
            formItems.ctx.clearRect(1, 1, 198, 198);
            break;
        case 1:
            drawRectangle();
            break;
        case 2:
            drawPattern();
            break;
        case 3:
            drawGradient();
            break;
        case 4:
            drawCircle(formItems.c);
            break;
    }
}

function saveDrawing() { // deprecated. not allowed to navigate top frame to data url
    const string = formItems.c.toDataURL("image/png");
    const iframe = "<iframe width='200' height='200' src='" + string + "'></iframe>";
    const x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
    /* window.open(formItems.c.toDataURL("image/png")); */
}
