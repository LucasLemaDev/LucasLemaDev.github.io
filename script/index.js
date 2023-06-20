//This function will be called when user click changing language
const btnTranslate = document.querySelector("#translator")
function translate(lng, tagAttr){
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
}

btnTranslate.addEventListener("change", function (){
  translate(this.value, 'lng-tag');
});