function graph() {
  var myCanvas = document.getElementById("myCanvas");
  myCanvas.width = 250;
  myCanvas.height = 120;
    var graphmover1 = document.getElementById("graph1");
    var graphmover2 = document.getElementById("graph2");
    var graphmover3 = document.getElementById("graph3");
    var graphmover4 = document.getElementById("graph4");


  var ctx = myCanvas.getContext("2d");
  ctx.fillRect(10, 110 - graphmover1.value, 50, graphmover1.value);
  ctx.fillRect(65, 110 - graphmover2.value, 50, graphmover2.value);
  ctx.fillRect(120, 110 - graphmover3.value, 50, graphmover3.value);
  ctx.fillRect(175, 110 - graphmover4.value, 50, graphmover4.value);

  ctx.strokeRect(5, 5, 225, 110);   
}

$(document).ready(function(){
  alert("As you can see, the link no longer took you to jquery.com");
  event.preventDefault();
});

$("#graph1").click(graph);
$("#graph2").click(graph);
$("#graph3").click(graph);
$("#graph4").click(graph);
