var data;

var callback = function(input){
	data = input;
};

var init = function(){
	var s = document.createElement('script');
	s.src = 'https://script.google.com/macros/s/AKfycby5ph5SwXX7awL3cgze658xkIZUWdjCDffcxUa_tNBWqe-7haq6/exec';
	document.head.appendChild(s);
    var stage = document.getElementById('stage');
    
    var t = document.getElementById('table');
    
    s.onload = function(){
        for(var i=0; i<Object.size(data); i++){
            stage.appendChild(document.createElement('div')).id='num'+data[i].number;
            document.getElementById('num'+data[i].number).innerHTML=data[i].number;
            document.getElementById('num'+data[i].number).className='num';
            stage.appendChild(document.createElement('div')).id='cont'+data[i].number;
            document.getElementById('cont'+data[i].number).innerHTML=data[i].content;
            document.getElementById('cont'+data[i].number).className='cont';
        }
    }
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

window.onload = init;

