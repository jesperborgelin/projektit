var canvas = document.getElementById("canvas1");
var context = canvas.getContext("2d");
var voitot = 0;
var bp = 50;

var slots = [0,0,0,0,0,0,0,0,0];

var x = 0;
var y = 0;



function piirra() {
  context.clearRect(0, 0, 300, 300);
  var pannu = new Image(); pannu.src = "img/pannu.jpg";
  var karri = new Image(); karri.src = "img/karri.jpg";
  var ed = new Image(); ed.src = "img/ed.jpg";
  var mk14 = new Image(); mk14.src = "img/mk14.jpg";
  var mini14 = new Image(); mini14.src = "img/mini14.jpg";
  var shiet = new Image(); shiet.src = "img/shiet.jpg";
  var kuvat = [pannu, karri, ed, mk14, mini14, shiet];

  document.getElementById("span2").innerHTML = voitot;
  document.getElementById("span1").innerHTML = bp;

  for (var i=0; i<slots.length; i++){
     var uusiLuku = Math.floor(Math.random() * 6);
     slots[i]= uusiLuku;
   }

  context.drawImage(kuvat[slots[0]],0,0,100,100);
  context.drawImage(kuvat[slots[1]],0,100,100,100);
  context.drawImage(kuvat[slots[2]],0,200,100,100);
  context.drawImage(kuvat[slots[3]],100,0,100,100);
  context.drawImage(kuvat[slots[4]],100,100,100,100);
  context.drawImage(kuvat[slots[5]],100,200,100,100);
  context.drawImage(kuvat[slots[6]],200,0,100,100);
  context.drawImage(kuvat[slots[7]],200,100,100,100);
  context.drawImage(kuvat[slots[8]],200,200,100,100);
  console.log(slots);
  console.log(kuvat);
}

function piirraViiva(x, y, x2, y2, color, voittorivi) {
  // context.rect(x,y,l,w);
  // context.fillStyle = color;
  // context.fill();
  context.beginPath();
  context.lineWidth="5";
  context.moveTo(x,y);
  context.lineTo(x2,y2);
  context.closePath();
  context.strokeStyle=color;
  context.stroke();
}

function pelaa() {
  piirra();
  if (bp <=0) {
    alert("Rahat loppu");
    location.reload();
    return;
  }

  document.getElementById("span1").innerHTML = bp;
  bp = bp - 1;

  if (slots[1] === slots[4] && slots[4] === slots[7] && slots[1] === 0) {
    console.log("Pannut keski");
    bp = bp + 100;
    voitot = voitot + 100;
    piirraViiva(0,145,300,145, "yellow");

  }else if (slots[1] === slots[4] && slots[4] === slots[7] && slots[1] === 1) {
    console.log("Karrit keski");
    bp = bp + 50;
    voitot = voitot + 50;
    piirraViiva(0,145,300,145, "yellow");

  }else if (slots[1] === slots[4] && slots[4] === slots[7] && slots[1] === 2) {
    console.log("Ed:t keski");
    bp = bp + 10;
    voitot = voitot + 10;
    piirraViiva(0,145,300,145,"yellow");

  }else if (slots[1] === slots[4] && slots[4] === slots[7] && slots[1] === 3) {
    console.log("mk14:T keski");
    bp = bp + 5;
    voitot = voitot + 5;
    piirraViiva(0,145,300,145, "yellow");
  }else if (slots[1] === slots[4] && slots[4] === slots[7] && slots[1] === 4) {
      console.log("mini14:t keski");
      bp = bp + 7;
      voitot = voitot + 7;
      piirraViiva(0,145,300,145, "yellow");

  }else if (slots[1] === slots[4] && slots[4] === slots[7] && slots[1] === 5) {
      console.log("shiet keski");
      bp = bp + 1;
      voitot = voitot + 1;
      piirraViiva(0,145,300,145, "yellow");


  } else {
    console.log("ei voittoa");

  }

  if (slots[0] === slots[3] && slots[3] === slots[6] && slots[0] === 0) {
    console.log("Pannut ylärivi");
    bp = bp + 100;
    voitot = voitot + 100;
    piirraViiva(0,45,300,45,"red", slots);
  }else if (slots[0] === slots[3] && slots[3] === slots[6] && slots[0] === 1) {
    console.log("Karrit ylärivi");
    bp = bp + 50;
    voitot = voitot + 50;
    piirraViiva(0,45,300,45,"red", slots);

  }else if (slots[0] === slots[3] && slots[3] === slots[6] && slots[0] === 2) {
    console.log("Ed:t ylärivi");
    bp = bp + 10;
    voitot = voitot + 10;
    piirraViiva(0,45,300,45,"red", slots);

  }else if (slots[0] === slots[3] && slots[3] === slots[6] && slots[0] === 3) {
    console.log("mk14:T ylärivi");
    bp = bp + 5;
    voitot = voitot + 5;
    piirraViiva(0,45,300,45,"red", slots);

  }else if (slots[0] === slots[3] && slots[3] === slots[6] && slots[0] === 4) {
      console.log("mini14:t ylärivi");
      bp = bp + 7;
      voitot = voitot + 7;
      piirraViiva(0,45,300,45,"red", slots);

  }else if (slots[0] === slots[3] && slots[3] === slots[6] && slots[0] === 5) {
      console.log("shiet ylärivi");
      bp = bp + 1;
      voitot = voitot + 1;
      piirraViiva(0,45,300,45,"red", slots);


  } else {
    console.log("ei voittoa");

  }
  if (slots[2] === slots[5] && slots[5] === slots[8] && slots[2] === 0) {
    console.log("Pannut alarivi");
    bp = bp + 100;
    voitot = voitot + 100;
    piirraViiva(0,250,300,250,"green", slots);
  }else if (slots[2] === slots[5] && slots[5] === slots[8] && slots[2] === 1) {
    console.log("Karrit alarivi");
    bp = bp + 50;
    voitot = voitot + 50;
    piirraViiva(0,250,300,250,"green", slots);

  }else if (slots[2] === slots[5] && slots[5] === slots[8] && slots[2] === 2) {
    console.log("Ed:t alarivi");
    bp = bp + 10;
    voitot = voitot + 10;
    piirraViiva(0,250,300,250,"green", slots);

  }else if (slots[2] === slots[5] && slots[5] === slots[8] && slots[2] === 3) {
    console.log("mk14:T alarivi");
    bp = bp + 5;
    voitot = voitot + 5;
    piirraViiva(0,250,300,250,"green", slots);

  }else if (slots[2] === slots[5] && slots[5] === slots[8] && slots[2] === 4) {
      console.log("mini14:t alarivi");
      bp = bp + 7;
      voitot = voitot + 7;
      piirraViiva(0,250,300,250,"green", slots);

  }else if (slots[2] === slots[5] && slots[5] === slots[8] && slots[2] === 5) {
      console.log("shiet alarivi");
      bp = bp + 1;
      voitot = voitot + 1;
      piirraViiva(0,250,300,250,"green", slots);
}else {
  console.log("ei voittoa");
}
}
// function update() {
//      requestAnimationFrame(update);
//      context.clearRect(0, 0, 300, 300, );

    // x += 5;



// }

// update();
