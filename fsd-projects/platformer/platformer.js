$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(50, 620, 160, 20, "red");
createPlatform(400, 550, 140, 20, "blue");
createPlatform(95, 440, 120, 20, "red");
createPlatform(395, 310, 100, 20, "blue");
createPlatform(700, 285, 80, 20, "red");
createPlatform(1000, 260, 60, 20, "blue");
createPlatform(1150, 350, 45, 20, "red");
createPlatform(1300, 250, 140, 20, "blue");
createPlatform(950, 425, 90, 20, "green");
createBadPlatform(730, 500, 90, 20, "red");
createPlatform(90, 190, 75, 20, "red");
createPlatform(90,190,20,270)


    // TODO 3 - Create Collectables
createCollectable("diamond", 975, 385, 0, 1, 350, 385, 2);
createCollectable("steve", 1350, 210);
createCollectable("steve", 105, 160);


    
    // TODO 4 - Create Cannons
createCannon("right",175, 2000)
createCannon("bottom",300, 1500)
createCannon("top",620, 1500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
