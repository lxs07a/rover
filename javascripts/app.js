// Rover Object Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["0:0"]
}

//Rover 2
var otherRover = {
  direction: "N",
  x: 0,
  y: 9,
  travelLog: ["0:9"]
}

var track = "";
// ======================

// ======================
//Functions for Rover 1
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Turned left from N to W");
      break;
    case "E":
      rover.direction = "N";
      console.log("Turned left from E to N");
      break;
    case "S":
      rover.direction = "E";
      console.log("Turned left from S to E");
      break;
    case "W":
      rover.direction = "S";
      console.log("Turned left from W to S");
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Turned right from N to E");
      break;
    case "E":
      rover.direction = "S";
      console.log("Turned right from E to S");
      break;
    case "S":
      rover.direction = "W";
      console.log("Turned right from S to W");
      break;
    case "W":
      rover.direction = "N";
      console.log("Turned right from W to N");
      break;
  }
}

function moveForward(rover, localObstacleX, localObstacleY){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      console.log("Rover is at " + rover.x + "," + rover.y + " and facing " + rover.direction);
      rover.y -=1;
      if (rover.y<0) {
        console.log("Don't go off the grid!");
        rover.y = 0;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.y +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.y +=1;
        return;
      }
      console.log("Moved North to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
    case "E":
      console.log("Rover is at " + rover.x + "," + rover.y + " and facing " + rover.direction);
      rover.x +=1;
      if (rover.x>9) {
        console.log("Don't go off the grid!");
        rover.x = 9;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.x -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.x -=1;
        return;
      }
      console.log("Moved East to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
    case "S":
      console.log("Rover is at " + rover.x + "," + rover.y + " and facing " + rover.direction);
      rover.y +=1;
      if (rover.y>9) {
        console.log("Don't go off the grid!");
        rover.y = 9;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.y -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.y -=1;
        return;
      }
      console.log("Moved South to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
    case "W":
      console.log("Rover is at " + rover.x + "," + rover.y +  " and facing " + rover.direction);
      rover.x -=1;
      if (rover.x<0) {
        console.log("Don't go off the grid!");
        rover.x = 0;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.x +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.x +=1;
        return;
      }
      console.log("Moved West to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
  }
}

function moveBackward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      console.log("Rover is at " + rover.x + "," + rover.y + " and facing " + rover.direction);
      rover.y +=1;
      if (rover.y>9) {
        console.log("Don't go off the grid!");
        rover.y = 9;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.y -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.y -=1;
        return;
      }
      console.log("Moved North to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
    case "E":
      console.log("Rover is at " + rover.x + "," + rover.y + " and facing " + rover.direction);
      rover.x -=1;
      if (rover.x<0) {
        console.log("Don't go off the grid!");
        rover.x = 0;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.x +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.x +=1;
        return;
      }
      console.log("Moved East to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
    case "S":
      console.log("Rover is at " + rover.x + "," + rover.y + " and facing " + rover.direction);
      rover.y -=1;
      if (rover.y<0) {
        console.log("Don't go off the grid!");
        rover.y = 0;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.y +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.y +=1;
        return;
      }
      console.log("Moved South to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
    case "W":
      console.log("Rover is at " + rover.x + "," + rover.y +  " and facing " + rover.direction);
      rover.x +=1;
      if (rover.x>9) {
        console.log("Don't go off the grid!");
        rover.x = 9;
      }
      if ((rover.y === localObstacleY) && (rover.x === localObstacleX)) {
        obstacle();
        rover.x -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        rover.x -=1;
        return;
      }
      console.log("Moved West to " + rover.x + "," + rover.y);
      track = rover.x + ":" + rover.y;
      rover["travelLog"].push(track);
      break;
  }
}

//Functions for Rover 2
function turnOtherLeft(otherRover){
  console.log("turnLeft was called for Rover 2!");
  switch (otherRover.direction) {
    case "N":
      otherRover.direction = "W";
      console.log("Rover 2 turned left from N to W");
      break;
    case "E":
      otherRover.direction = "N";
      console.log("Rover 2 turned Rover 2 left from E to N");
      break;
    case "S":
      otherRover.direction = "E";
      console.log("Rover 2 turned left from S to E");
      break;
    case "W":
      otherRover.direction = "S";
      console.log("Rover 2 turned left from W to S");
      break;
  }
}

function turnOtherRight(otherRover){
  console.log("turnRight was called for Rover 2!");
  switch (otherRover.direction) {
    case "N":
      otherRover.direction = "E";
      console.log("Rover 2 turned right from N to E");
      break;
    case "E":
      otherRover.direction = "S";
      console.log("Rover 2 turned right from E to S");
      break;
    case "S":
      otherRover.direction = "W";
      console.log("Rover 2 turned right from S to W");
      break;
    case "W":
      otherRover.direction = "N";
      console.log("Rover 2 turned right from W to N");
      break;
  }
}

function moveOtherForward(otherRover, localObstacleX, localObstacleY){
  console.log("moveForward was called for Rover 2");
  switch (otherRover.direction) {
    case "N":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y + " and facing " + rover.direction);
      otherRover.y -=1;
      if (otherRover.y<0) {
        console.log("Don't go off the grid!");
        otherRover.y = 0;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.y +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.y +=1;
        return;
      }
      console.log("Rover 2 moved North to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
    case "E":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y + " and facing " + rover.direction);
      otherRover.x +=1;
      if (otherRover.x>9) {
        console.log("Don't go off the grid!");
        otherRover.x = 9;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.x -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.x -=1;
        return;
      }
      console.log("Rover 2 moved East to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
    case "S":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y + " and facing " + rover.direction);
      otherRover.y +=1;
      if (otherRover.y>9) {
        console.log("Don't go off the grid!");
        otherRover.y = 9;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.y -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.y -=1;
        return;
      }
      console.log("Rover 2 moved South to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
    case "W":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y +  " and facing " + rover.direction);
      otherRover.x -=1;
      if (otherRover.x<0) {
        console.log("Don't go off the grid!");
        otherRover.x = 0;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.x +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.x +=1;
        return;
      }
      console.log("Rover 2 moved West to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
  }
}

function moveOtherBackward(otherRover){
  console.log("moveForward was called for Rover 2");
  switch (otherRover.direction) {
    case "N":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y + " and facing " + rover.direction);
      otherRover.y +=1;
      if (otherRover.y>9) {
        console.log("Don't go off the grid!");
        otherRover.y = 9;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.y -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.y -=1;
        return;
      }
      console.log("Rover 2 moved North to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
    case "E":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y + " and facing " + rover.direction);
      otherRover.x -=1;
      if (otherRover.x<0) {
        console.log("Don't go off the grid!");
        otherRover.x = 0;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.x +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.x +=1;
        return;
      }
      console.log("Rover 2 moved East to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
    case "S":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y + " and facing " + rover.direction);
      otherRover.y -=1;
      if (otherRover.y<0) {
        console.log("Don't go off the grid!");
        otherRover.y = 0;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.y +=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.y +=1;
        return;
      }
      console.log("Rover 2 moved South to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
    case "W":
      console.log("Rover 2 is at " + otherRover.x + "," + otherRover.y +  " and facing " + rover.direction);
      otherRover.x +=1;
      if (otherRover.x>9) {
        console.log("Don't go off the grid!");
        otherRover.x = 9;
      }
      if ((otherRover.y === localObstacleY) && (otherRover.x === localObstacleX)) {
        obstacle();
        otherRover.x -=1;
        return;
      }
      if ((rover.y === otherRover.y) && (rover.x === otherRover.x)) {
        collision();
        otherRover.x -=1;
        return;
      }
      console.log("Rover 2 moved West to " + otherRover.x + "," + otherRover.y);
      track = otherRover.x + ":" + otherRover.y;
      otherRover["travelLog"].push(track);
      break;
  }
}


//Commands function takes as parameters commands for Rover, commands for Rover2, coordinates of obstacle
function commands(listOfCommands, commandsForOtherRover, obstacleX, obstacleY) {
  //validate commands string for Rover 
  for (var i = 0; i < listOfCommands.length; i++) {
    if ((listOfCommands[i]!=="f") && (listOfCommands[i]!=="b") && (listOfCommands[i]!=="r") && (listOfCommands[i]!=="l" )) {
      console.log ("Please only enter letters \"f\"\, \"b\"\, \"r\"\, or \"l\"")
      return;
    }
  }
  //validate commands string for Rover 2
  for (var i = 0; i < commandsForOtherRover.length; i++) {
    if ((commandsForOtherRover[i]!=="f") && (commandsForOtherRover[i]!=="b") && (listOfCommands[i]!=="r") && (listOfCommands[i]!=="l" )) {
      console.log ("Please only enter letters \"f\"\, \"b\"\, \"r\"\, or \"l\"")
      return;
    }
  }
  //Take turns making a move
  for (var i = 0; i <= listOfCommands.length; i++) {
    //Rover takes a turn
    if (listOfCommands[i]==="f") {
      moveForward(rover, obstacleX, obstacleY);
    } else if (listOfCommands[i]==="r") {
      turnRight(rover);
    } else if (listOfCommands[i]==="l") {
      turnLeft(rover);
    } else if (listOfCommands[i]==="b") {
      moveBackward(rover);
    }
    //Rover 2 takes a turn
    if (commandsForOtherRover[i]==="f") {
      moveOtherForward(otherRover, obstacleX, obstacleY);
    } else if (commandsForOtherRover[i]==="r") {
      turnOtherRight(otherRover);
    } else if (commandsForOtherRover[i]==="l") {
      turnOtherLeft(otherRover);
    } else if (commandsForOtherRover[i]==="b") {
      moveOtherBackward(otherRover);
    }
  }
  //Pring tracks for both rovers
  console.log("Rover 1 Travel Log: " + rover.travelLog);
  console.log("Rover 2 Travel Log: " + otherRover.travelLog);
}

//For when a rover is about to crash into an obstacle
function obstacle() {
  console.log("Obstacle encountered. Cannot move forward. Go around.");
}

////For when a rover is about to crash into another rover
function collision() {
  console.log("Another rover encountered. Cannot move forward. Go around.");
}

//Enter commands for Rover, commands for Rover 2, coordinate x for obstacle, and coordinate y for obstacle 
commands("rrffffff", "rffrfflfrff", 1, 0);
