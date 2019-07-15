(() => {
  console.log('yadayada');

  //CONSTANTS
  const cassetteIcons = document.querySelector(".parent_container"),
        boomBox = document.querySelector(".boom_box"),
        dropZones = document.querySelectorAll(".drop-zone");

  let draggableIcons = cassetteIcons.querySelectorAll("img");

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

  	let draggedElement = e.dataTransfer.getData("text/plain");
  	console.log('you dragged: ', draggedElement);

  	//add the image to the drop zone
  	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	});
})


})();
