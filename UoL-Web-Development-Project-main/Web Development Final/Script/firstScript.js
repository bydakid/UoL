//Position A size
var allArticles = document.getElementsByTagName('article')

for(var i = 0; i < allArticles.length; i++){
  allArticles[i].style.textAlign = "center";
}

//Click A letters
document.getElementById('smallA').onclick = function(){
  changeSize("small")
};

document.getElementById('mediumA').onclick = function(){
  changeSize("medium")
};

document.getElementById('largeA').onclick = function(){
  changeSize("large")
};

function changeSize(c){
  document.getElementsByTagName('body')[0].className = c
};
