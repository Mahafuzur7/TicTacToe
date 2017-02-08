//JS code goes here
//JS code goes here
var turn =true;
var clicked=[];
function play(event){
  var element=event.target;
  if(!clicked[element.id])
  {
    clicked[element.id]=true;
    console.log(clicked);
      console.log(event);
    element.innerHTML=turn?"X":"0";
    turn=!turn;
  }

}
