//CODE FOR SUBMITTING FILES AND CREATING ROW AND COLUMNS
let uploadFileButton = document.getElementById("upload-file-button");
uploadFileButton.addEventListener("click", function() {
  document.getElementById("audio").click()
})

//get the submit button in the form
let submitButton = document.getElementById("submit");
//add click detection that activates function
submitButton.addEventListener("click", submitSongInfo);

function generateSongInfoContainer() {
  /*
  Generates the div containing the song information
  */
  //finds songs container
  let songsContainer = document.getElementById("songs-container");
  //finds amount of elements in songsContainer for the id for newly created row
  let songsContainerLen = songsContainer.children.length;
  //determines if a row needs to be created
  if (songsContainerLen == 0) {
    //creates one if there is nothing, because, there is nothing
    let newRow = document.createElement("div");
    //sets the class and id attributes
    newRow.setAttribute("class", "song-info row");
    newRow.setAttribute("id", songsContainerLen);
    //sets variable name to curRow to work later
    var curRow = newRow;
    //adds it to container
    songsContainer.appendChild(curRow);
  } else {
    //getting length of the latest row
    let latestRowID = songsContainerLen - 1;
    let latestRowLen = document.getElementById(latestRowID).children.length;
    if (latestRowLen == 3) {
      //creates new row because latest row is full
      let newRow = document.createElement("div");
      //sets the class and id attributes
      newRow.setAttribute("class", "song-info row");
      newRow.setAttribute("id", songsContainerLen);
      //sets variable name to curRow to work later
      var curRow = newRow;
      //adds it to container
      songsContainer.appendChild(curRow);
    } else {
      //sets curRow to the latest row since nothing needed to be created
      var curRow = document.getElementById(latestRowID);
    }
  }
  //creates new container for song info
  let newSongInfoContainer = document.createElement("div");
  newSongInfoContainer.setAttribute("class", "song-info col");
  //creating id for new container
  let curRowID = curRow.getAttribute("id");
  let curRowLen = curRow.children.length;
  let newSongInfoContainerID = curRowID + curRowLen;
  //sets the id attribute to newly found value
  newSongInfoContainer.setAttribute("id", newSongInfoContainerID);
  //creates song name heading and adds it to the new container
  let songNameH = document.createElement("h2");
  newSongInfoContainer.appendChild(songNameH);
  //creates artist name heading and adds it to the new container
  let artistNameH = document.createElement("h3");
  newSongInfoContainer.appendChild(artistNameH);
  //creates audio with empty source
  let songAudio = document.createElement("audio");
  songAudio.setAttribute("controls", "true");
  songAudio.setAttribute("src", "#");
  newSongInfoContainer.appendChild(songAudio);
  //adds info container to row container
  curRow.appendChild(newSongInfoContainer);
  //returns object to be used seperately
  return newSongInfoContainer;
}

function getSongInfo() {
  /*
  Obtains info on submitted song, collects file name, given name, and artist
  */
  //creates empty list for later return
  let songInfo = [];
  //gets name of audio by getting the file submitted and taking its name
  audioInput = document.getElementById("audio");
  audioName = audioInput.files[0].name;
  //adds the song name, artist, and audio file name to list
  songInfo.push(document.getElementById("song-name").value);
  songInfo.push(document.getElementById("artist").value);
  songInfo.push(audioName);
  //returns list
  return songInfo;
}

function submitSongInfo() {
  /*
  Submits the song info by adding it all to a new song container
  */
  //gets information on the submitted song
  let songInfo = getSongInfo();
  //creates new song info container
  let songInfoContainer=generateSongInfoContainer();
  //creates variable to store the children of the container
  let songInfoContainerChildren = songInfoContainer.children;
  //starts loop to iterate over each item in songInfoContainer
  for (let i = 0; i < songInfoContainerChildren.length; i++) {
    //if its the last piece of data (the audio) use src instead of inner HTML
    if (i == 2) {
      songInfoContainerChildren[i].src = songInfo[i];
    } else { //otherwise, use inner HTML
      songInfoContainerChildren[i].innerHTML = songInfo[i];
    }
  }
}

//CODE FOR CHANGING THEMES (LIGHT AND DARK MODE)
//get button for them change
let themeChangeButton = document.getElementById("change-theme");
//add event listener to button to run function to change theme
themeChangeButton.addEventListener("click", changeTheme);

function changeTheme() {
  //get the document body
  let docBody = document.body
  let current_theme = docBody.getAttribute("class")
  if (current_theme == "dark") {
    docBody.setAttribute("class", "light")
  } else {
    docBody.setAttribute("class", "dark")
  }
}