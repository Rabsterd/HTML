let xindex = 0;
let yindex = 0;


document.addEventListener("keydown", function(e) {

console.log("누르는 중" + e.key);

const penguin = document.getElementById("penguin");
const boom = document.createElement("img");

if(e.key == "ArrowRight") {
    xindex += 10;
    penguin.style.transform= 'translate3d(${xindex}px, (${yindex}px, 0)';
} else if(e.key == "ArrowLeft") {
    xindex -= 10;
    penguin.style.transform= 'translate3d(${xindex}px, (${yindex}px, 0)';
} else if(e.key == "ArrowDown") {
    yindex += 10;
    penguin.style.transform= 'translate3d(${xindex}px, (${yindex}px, 0)';
} else if(e.key == "ArrowUp") {
    yindex -= 10;
    penguin.style.transform= 'translate3d(${xindex}px, (${yindex}px, 0)';
} else if(e.key == "x") {

    const box = document.getElementById("box");
    boom.setAttribute("src", "/Image/drive-download-20230907T064740Z-001/boom.png");
    boom.style.transform = 'translate3d(${xindex}px, ${yindex}px, 0';
    boom.style.position = "absolute";
    box.append(boom);
}

setTimeout(function() {
    boom.setAttribute("src", "/Image/drive-download-20230907T064740Z-001/boom2.png");
}, 2000);

}) 