var s;
var v;
var ns = 'http://www.w3.org/2000/svg';

var rand = function(min, max) {
    return min + Math.random() * (max - min);    
};

var render = function(cx, cy){
  var dots = document.createElementNS(ns, 'circle');
  dots.setAttribute('fill', 'white');
  dots.setAttribute('r', 1);
  dots.setAttribute('cx', cx);
  dots.setAttribute('cy', cy);
  s.appendChild(dots);
};

var renderline = function(x1,y1,x2,y2){
  var lines = document.createElementNS(ns,'line');
  lines.setAttribute('x1', x1);
  lines.setAttribute('x2', x2);
  lines.setAttribute('y1', y1);
  lines.setAttribute('y2', y2);
    lines.setAttribute('stroke', 'white');
    lines.setAttribute('stroke-width', 1);
  s.appendChild(lines);
}

var letterCor = function(x, a1,a2,a3,b1,b2,b3,c1,c2,c3,d1,d2,d3,e1,e2,e3){
  var unitx = 10;
  var unity = 10;
  
  if(a1) {
    var a1x = x+rand(unitx*0,unity*1);
    var a1y = rand(unitx*0,unity*1);
    render(a1x,a1y);
  };
    if(a2) {
    var a2x = x+rand(unitx*1,unity*2);
    var a2y = rand(unitx*0,unity*1);
   render(a2x,a2y);
  }
      if(a3) {
    var a3x = x+rand(unitx*2,unity*3);
    var a3y = rand(unitx*0,unity*1);
    render(a3x,a3y);
  }
  if(b1) {
    var b1x = x+rand(unitx*0,unity*1);
    var b1y = rand(unitx*1,unity*2);
    render(b1x,b1y);
  };
    if(b2) {
    var b2x = x+rand(unitx*1,unity*2);
    var b2y = rand(unitx*1,unity*2);
    render(b2x,b2y);
  }
      if(b3) {
    var b3x = x+rand(unitx*2,unity*3);
    var b3y = rand(unitx*1,unity*2);
    render(b3x,b3y);
  }
    if(c1) {
    var c1x = x+rand(unitx*0,unity*1);
    var c1y = rand(unitx*2,unity*3);
     render(c1x,c1y);
 };
    if(c2) {
    var c2x = x+rand(unitx*1,unity*2);
    var c2y = rand(unitx*2,unity*3);
     render(c2x,c2y);
 }
      if(c3) {
    var c3x = x+rand(unitx*2,unity*3);
    var c3y = rand(unitx*2,unity*3);
    render(c3x,c3y);
  }
    if(d1) {
    var d1x = x+rand(unitx*0,unity*1);
    var d1y = rand(unitx*3,unity*4);
    render(d1x,d1y);
  };
    if(d2) {
    var d2x = x+rand(unitx*1,unity*2);
    var d2y = rand(unitx*3,unity*4);
    render(d2x,d2y);
  }
      if(d3) {
    var d3x = x+rand(unitx*2,unity*3);
    var d3y = rand(unitx*3,unity*4);
    render(d3x,d3y);
  }
    if(e1) {
    var e1x = x+rand(unitx*0,unity*1);
    var e1y = rand(unitx*4,unity*5);
     render(e1x,e1y);
 };
    if(e2) {
    var e2x = x+rand(unitx*1,unity*2);
    var e2y = rand(unitx*4,unity*5);
      render(e2x,e2y);
 }
      if(e3) {
    var e3x = x+rand(unitx*2,unity*3);
    var e3y = rand(unitx*4,unity*5);
     render(e3x,e3y);
  }
  if(a1&&a2) renderline(a1x,a1y,a2x,a2y);
  if(a1&&a3&&!a2) renderline(a1x,a1y,a3x,a3y);
  if(a2&&a3) renderline(a2x,a2y,a3x,a3y);
  if(b1&&b2) renderline(b1x,b1y,b2x,b2y);
  if(b1&&b3&&!b2) renderline(b1x,b1y,b3x,b3y);
  if(b2&&b3) renderline(b2x,b2y,b3x,b3y);
  if(c1&&c2) renderline(c1x,c1y,c2x,c2y);
  if(c1&&c3&&!c2) renderline(c1x,c1y,c3x,c3y);
  if(c2&&c3) renderline(c2x,c2y,c3x,c3y);
  if(d1&&d2) renderline(d1x,d1y,d2x,d2y);
  if(d1&&d3&&!d2) renderline(d1x,d1y,d3x,d3y);
  if(d2&&d3) renderline(d2x,d2y,d3x,d3y);
  if(e1&&e2) renderline(e1x,e1y,e2x,e2y);
  if(e1&&e3&&!e2) renderline(e1x,e1y,e3x,e3y);
  if(e2&&e3) renderline(e2x,e2y,e3x,e3y);
}

var letterDefine = function(input,x){
  if (input=='a') letterCor(x,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1);
  if (input=='b') letterCor(x,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1);
  if (input=='c') letterCor(x,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1);
  if (input=='d') letterCor(x,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0);
  if (input=='e') letterCor(x,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1);
  if (input=='f') letterCor(x,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0);
  if (input=='g') letterCor(x,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1);
  if (input=='h') letterCor(x,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1);
  if (input=='i') letterCor(x,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1);
  if (input=='j') letterCor(x,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1);
  if (input=='k') letterCor(x,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1);
  if (input=='l') letterCor(x,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1);
  if (input=='m') letterCor(x,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1);
  if (input=='n') letterCor(x,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1);
  if (input=='o') letterCor(x,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0);
  if (input=='p') letterCor(x,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0);
  if (input=='q') letterCor(x,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1);
  if (input=='r') letterCor(x,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1);
  if (input=='s') letterCor(x,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1);
  if (input=='t') letterCor(x,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0);
  if (input=='u') letterCor(x,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1);
  if (input=='v') letterCor(x,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0);
  if (input=='w') letterCor(x,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1);
  if (input=='x') letterCor(x,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1);
  if (input=='y') letterCor(x,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0);
  if (input=='z') letterCor(x,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1);
  if (input=='?') letterCor(x,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0);
  if (input==' ') letterCor(x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
}

function displayResult(x){

if(s.hasChildNodes()) s.removeChild(s.lastChild);
var x=document.getElementById("text").value;  
for(var i=0; i<x.length; i++ ){

    var xx = x.substring(i,i+1);
var checkenglish = /^[a-z][a-z\d]*$/i.test(xx); 
if (checkenglish){
      var xxx = xx.toLowerCase();
          letterDefine(xxx,i*35+100);
} else if(xx==' '){
  letterDefine(xx,i*35+100);
}else{
           letterDefine('?',i*35+100);
}
}
  setTimeout(function() {
        requestAnimationFrame(displayResult());
    }, 50);

}

var init = function() {
    s = document.querySelector('#letter');
    document.body.appendChild(s);
};

window.onload = function() {

    init();    
};