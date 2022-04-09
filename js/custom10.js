var selectedShape="";
var sav = document.getElementById('svg');


function rectClick(){
    selectedShape="rec";
sav.addEventListener('click', (e) => {
    if(selectedShape== "rec"){
    const pt = sav.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
  const svgP = pt.matrixTransform( sav.getScreenCTM().inverse() );
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', svgP.x);
  rect.setAttribute('y', svgP.y);
  rect.setAttribute("fill","red");
  rect.setAttribute("width", "100");
  rect.setAttribute("height", "100");
  rect.setAttribute("stroke","black");
rect.setAttribute("stroke-width","3");

  sav.appendChild(rect);
    }
});
};



function circleClick(){
    selectedShape="circle";
sav.addEventListener('click', (e) => {
    if(selectedShape== "circle"){
const pt = sav.createSVGPoint();
pt.x = e.clientX;
pt.y = e.clientY;
  const svgP = pt.matrixTransform( sav.getScreenCTM().inverse() );
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', svgP.x);
  circle.setAttribute('cy', svgP.y);
  circle.setAttribute('r', 30);
  circle.setAttribute('fill','yellow');
  circle.setAttribute('stroke','black');
  circle.setAttribute("stroke-width","3");

  sav.appendChild(circle);
    }
});
};






function lineClick(){
    selectedShape="line";
    var draw = false;
    const ptOne = sav.createSVGPoint();
    sav.addEventListener('click', (e) => {
        if(selectedShape== "line"){
        if(draw == false){
            ptOne.x = e.clientX;
            ptOne.y = e.clientY;
            draw=true;
        }
        else{
            const ptTwo = sav.createSVGPoint();
            ptTwo.x = e.clientX;
            ptTwo.y = e.clientY;
            const svgPOne = ptOne.matrixTransform( sav.getScreenCTM().inverse() );
            const svgPTwo = ptTwo.matrixTransform( sav.getScreenCTM().inverse() );
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', svgPOne.x);
            line.setAttribute('y1', svgPOne.y);
            line.setAttribute('x2', svgPTwo.x);
            line.setAttribute('y2', svgPTwo.y);
            line.setAttribute('fill','yellow');
            line.setAttribute('stroke','black');
            line.setAttribute("stroke-width","3");
          
            sav.appendChild(line);
            draw=false;
        }
    }
    });
};

