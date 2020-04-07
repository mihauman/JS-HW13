function* createIdGenerator() {
    let id = 1;
   while(true){
    yield id++;
}
} 
const idGenerator = createIdGenerator();
const paragraph = document.getElementById("paragraph");
const buttonId = document.getElementById("buttonId");
buttonId.onclick = function() { 
    return paragraph.innerHTML = `${idGenerator.next().value}`;
}
const fontUp = document.getElementById("btn-font-up").addEventListener('click', () => fontGenerator.next("up").value);
const fontDonw = document.getElementById("btn-font-down").addEventListener('click', () => fontGenerator.next("down").value);
const fontDef = document.getElementById("btn-default").addEventListener('click', () => fontGenerator.next("def").value);
function* newFontGenerator(size) {
    while (true) {
      let result = yield size;
      if(result === "up") {
        size += 2;
        document.getElementById("text").style.fontSize = size + "px";
      }
      if(result === "down") {
        size -= 2;
        document.getElementById("text").style.fontSize = size + "px";
      }
      if(result === "def"){
          size = 14;
        document.getElementById("text").style.fontSize = size + "px";

      }
    }
  }
  const fontGenerator = newFontGenerator(14);




  