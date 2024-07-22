var t; 
  
function color() { 
    if (document.getElementById('btn').style.color == 'blue') { 
        document.getElementById('btn').style.color = 'green'; 
    } else { 
        document.getElementById('btn').style.color = 'blue'; 
    } 

} 

function fun() { 
    t = setInterval(color, 3000); 

} 

function stop() { 
    clearInterval(t); 
} 