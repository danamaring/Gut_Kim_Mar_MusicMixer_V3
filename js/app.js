(() => {
  console.log('yadayada');

  //CONSTANTS
  const cassetteIcons = document.querySelector(".parent_container"),
        boomBox = document.querySelector(".boom_box"),
        dropZones = document.querySelectorAll(".drop-zone");

  let draggableIcons = cassetteIcons.querySelectorAll("img"),
      audio11 = document.querySelector(".audio11"),
      greenLT = document.querySelector("#greenLT"),
      audio12 = document.querySelector(".audio12"),
      blueLT = document.querySelector("#blueLT"),
      skyLT = document.querySelector("#skyLT"),
      audio13 = document.querySelector(".audio13"),
      yellowLT = document.querySelector("#yellowLT"),
      audio14 = document.querySelector(".audio14"),

      greenLB = document.querySelector("#greenLB"),
      blueLB = document.querySelector("#blueLB"),
      skyLB = document.querySelector("#skyLB"),
      yellowLB = document.querySelector("#yellowLB"),
      audio21 = document.querySelector(".audio21"),
      audio22 = document.querySelector(".audio22"),
      audio23 = document.querySelector(".audio23"),
      audio24 = document.querySelector(".audio24"),

      greenRB = document.querySelector("#greenRB"),
      blueRB = document.querySelector("#blueRB"),
      skyRB = document.querySelector("#skyRB"),
      yellowRB = document.querySelector("#yellowRB"),
      audio31 = document.querySelector(".audio31"),
      audio32 = document.querySelector(".audio32"),
      audio33 = document.querySelector(".audio33"),
      audio34 = document.querySelector(".audio34"),

      greenRT = document.querySelector("#greenRT"),
      blueRT = document.querySelector("#blueRT"),
      skyRT = document.querySelector("#skyRT"),
      yellowRT = document.querySelector("#yellowRT"),
      audio41 = document.querySelector(".audio41"),
      audio42 = document.querySelector(".audio42"),
      audio43 = document.querySelector(".audio43"),
      audio44 = document.querySelector(".audio44");

//FUNCTIONS
  draggableIcons.forEach(piece => {
    piece.addEventListener("dragstart", function(e) {
		    console.log('draggin...');


          e.dataTransfer.setData("text/plain", this.id);
		});
	});

  dropZones.forEach(zone => {
	zone.addEventListener("dragover", function(e) {
		console.log('dragged sumpin over me');
      e.preventDefault();

});
  zone.addEventListener("drop", function(e) {
  	e.preventDefault();
  	console.log("you dropped sumpin on me");

    if (this.childElementCount == 1) {
      console.log('sorry, already taken!!');
      return; }

  	let draggedElement = e.dataTransfer.getData("text/plain");
  	console.log('you dragged: ', draggedElement);

  	//add the image to the drop zone
  	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	});
})

//AUDIO FUNCTIONS
  function playAudio11() {
    audio11.play();
  }
  function playAudio12() {
    audio12.play();
  }
  function playAudio13() {
    audio13.play();
  }
  function playAudio14() {
    audio14.play();
  }


  function playAudio21() {
    audio21.play();
  }
  function playAudio22() {
    audio22.play();
  }
  function playAudio23() {
    audio23.play();
  }
  function playAudio24() {
    audio24.play();
  }


  function playAudio31() {
    audio31.play();
  }
  function playAudio32() {
    audio32.play();
  }
  function playAudio33() {
    audio33.play();
  }
  function playAudio34() {
    audio34.play();
  }


  function playAudio41() {
    audio41.play();
  }
  function playAudio42() {
    audio42.play();
  }
  function playAudio43() {
    audio43.play();
  }
  function playAudio44() {
    audio44.play();
  }

//AUDIO EVENTS
  greenLT.addEventListener("click", playAudio11);
  blueLT.addEventListener("click", playAudio12);
  skyLT.addEventListener("click", playAudio13);
  yellowLT.addEventListener("click", playAudio14);

  greenLB.addEventListener("click", playAudio21);
  blueLB.addEventListener("click", playAudio22);
  skyLB.addEventListener("click", playAudio23);
  yellowLB.addEventListener("click", playAudio24);

  greenRB.addEventListener("click", playAudio31);
  blueRB.addEventListener("click", playAudio32);
  skyRB.addEventListener("click", playAudio33);
  yellowRB.addEventListener("click", playAudio34);

  greenRT.addEventListener("click", playAudio41);
  blueRT.addEventListener("click", playAudio42);
  skyRT.addEventListener("click", playAudio43);
  yellowRT.addEventListener("click", playAudio44);


})();
