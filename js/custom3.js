colorFill = document.getElementById("fill");
color = document.getElementById("stroke");

var ctx= myCanvas.getContext('2d');
var clickked = false;
var selectedShape="";

function lasClick(){
    selectedShape="las";

myCanvas.onmousedown=function(){
    clickked=true;
    console.log('clickked');
}
myCanvas.onmouseup=function(){
    clickked=false;
    console.log(' not clicked');
}
myCanvas.onmousemove= function(e){
    if(selectedShape== "las"){

    if(clickked){
        ctx.clearRect(e.offsetX,e.offsetY,20,20);
    }
    }
}
}
var clicked = false;
function rectClick(){
    selectedShape="rec";
    myCanvas.onclick=function(e){
        if(selectedShape== "rec"){
        clicked=true;
        console.log('clicked');
        if(clicked){
            ctx.beginPath();
            ctx.fillStyle=colorFill.value;
            ctx.rect(e.offsetX,e.offsetY,80,70);
            ctx.strokeStyle= color.value;
            ctx.lineWidth=5;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
    
        }}
    }
};
function circleClick(){
    selectedShape="circle";
    myCanvas.onclick=function(e){
        if(selectedShape== "circle"){
        clicked=true;
        console.log('clicked');
        if(clicked){
            ctx.beginPath();
            ctx.fillStyle=colorFill.value;
            ctx.strokeStyle=color.value;
            ctx.arc(e.offsetX,e.offsetY,20,0,2*Math.PI);
            ctx.lineWidth=5;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
    
        }
    }
    }
};


function freeClick(){
    let prevX = null
    let prevY = null
    ctx.lineWidth = 5
    selectedShape="free";

    myCanvas.onmousedown=function(){
        clickked=true;
        console.log('clickked');
    }
    myCanvas.onmouseup=function(){
        clickked=false;
        console.log(' not clicked');
    }
   

    myCanvas.onmousemove= function(e){
        if(clickked){
    if(selectedShape== "free"){

    if(prevX == null || prevY == null){
        
        prevX = e.offsetX
        prevY = e.offsetY
    } 
  

    let currentX = e.offsetX
    let currentY = e.offsetY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke();
    ctx.lineWidth=5;
    ctx.fillStyle=colorFill.value;
    ctx.strokeStyle=color.value;
    ctx.fill();
    prevX = currentX
    prevY = currentY
    
}   
};
    }
}

function lineClick(){
    selectedShape="line";
    var draw= false;
    myCanvas.onclick=function(e){
        if(selectedShape== "line"){
        clicked=true;
        console.log('clicked');
        if(clicked){
            ctx.beginPath();
            ctx.fillStyle=colorFill.value;
            ctx.strokeStyle=color.value;
            ctx.moveTo(e.offsetX,e.offsetY)
            ctx.lineTo(e.offsetX+100,e.offsetY+100)
            ctx.lineWidth=5;
            ctx.fill();
            ctx.stroke();
            ctx.strokeStyle=color.value;
            ctx.closePath();
    
        }
    }
}


};

