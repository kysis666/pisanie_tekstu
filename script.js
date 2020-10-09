const title = 'github.com/kysis666';
var zerowanie = 0;


function sliceText() {
    var text = title.slice(0, zerowanie);
    zerowanie++;
    document.body.innerHTML = text;
    if (zerowanie > title.length + 3) {
        zerowanie = 0;
    }
    
}
setInterval(sliceText, 100);