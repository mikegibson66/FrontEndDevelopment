import DynamicLink from "../js/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "SWAPI - Team Activity",
        url: "../SWAPI/swapi.html"
    },
    {
        label: "Canvas, SVG, Drag and Drop Notes - PDF",
        url: "W08 - Canvas, SVG, Drag and Drop.pdf"
    },
    {
        label: "Transforms and Transitions Notes - PDF",
        url: "W08- CSS3 TRANSFORMS AND TRANSITIONS.pdf"
    }
]

const formItems = {
    directory: document.getElementById('directory'),
    drawType: document.getElementsByName('shape'),
    drawButton: document.getElementById('drawIt'),
    saveButton: document.getElementById('saveButton'),
    c: document.getElementById('myCanvas'),
    c2: document.getElementById('copyIt'),
    ctx: document.getElementById('myCanvas').getContext("2d"),
    ctx2: document.getElementById('copyIt').getContext("2d"),
    image: document.getElementById('imageElement'),
    copyButton: document.getElementById('copyImage'),
    grayButton: document.getElementById('grayImage'),
    mice: document.querySelectorAll('#mouseContainer img'),
    cat: document.getElementById('cat'),
    catHeading: document.getElementById('catHeading'),
    mouseHash: {
        mouse1: 'NOMNOMNOM',
        mouse2: 'Meow',
        mouse3: 'Purrrr',
        mouse4: 'Mousy, mouse',
        mouse5: 'Yummy'
    }
}

formItems.drawButton.addEventListener('click', selectDrawType);
formItems.saveButton.addEventListener('click', saveDrawing, false);
formItems.copyButton.addEventListener('click', drawImageToCanvas);
formItems.grayButton.addEventListener('click', manipulateImage);
let mouse = null;

for (let i = 0, len = formItems.mice.length; i < len; i++) {
    mouse = formItems.mice[i];
    mouse.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text/plain", this.id);
    });
}
formItems.cat.addEventListener('dragover', function (event) {
   event.preventDefault();
});
formItems.cat.addEventListener('drop', function (event) {
    // change text of header based on mouse drop
    let mouseID = event.dataTransfer.getData('text/plain');
    formItems.catHeading.innerHTML = formItems.mouseHash[mouseID];

    // get the img element for the dropped mouse, remove it
    const mousey = document.getElementById(mouseID);
    mousey.parentNode.removeChild(mousey);

    // stop default action from happening.
    event.preventDefault();
});

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
        formItems.ctx.fillStyle = formItems.ctx.createPattern(img, "repeat");
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

function drawImageToCanvas() {
    formItems.ctx2.clearRect(1, 1, 198, 198);
    formItems.ctx2.drawImage(formItems.image, 0, 0);
}

function manipulateImage() {
    formItems.ctx2.clearRect(1, 1, 198, 198);
    formItems.ctx2.drawImage(formItems.image, 0, 0); // draw image

    const imageData = formItems.ctx2.getImageData(0, 0, 200, 200); // read image data

    for (let i = 0, len = imageData.data.length; i < len; i += 4) { // loop through each pixel, increment by 4 since each
                                                                    // pixel takes up four values rgba
        const red = imageData.data[i];
        const green = imageData.data[i + 1];
        const blue = imageData.data[i + 2];

        const grayscale = red * 0.3 + green * 0.59 + blue * 0.11; // convert existing color to equivalent gray

        imageData.data[i] = grayscale; // reassign gray value to rgb
        imageData.data[i + 1] = grayscale;
        imageData.data[i + 2] = grayscale;
    }
    formItems.ctx2.putImageData(imageData, 0, 0); // replace image with grayscale image
}
