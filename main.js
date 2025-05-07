//get the submit button in the form
let submitButton = document.getElementById("submit")
//add click detection that activates function
submitButton.addEventListener("click", submitSongInfo)

function generateSongInfoContainer() {
  /*
  Generates the div containing the song information
  */
  //finds songs container
  let songsContainer = document.getElementById("songs-container")
  //creates new container for song info
  let newSongInfoContainer = document.createElement("div")
  newSongInfoContainer.setAttribute("class", "song-info")
  //creates id for new container and sets id
  let newSongInfoContainerID = songsContainer.children.length
  newSongInfoContainer.setAttribute("id", newSongInfoContainerID)
  //creates song name heading and adds it to the new container
  let songNameH = document.createElement("h2")
  newSongInfoContainer.appendChild(songNameH)
  //creates artist name heading and adds it to the new container
  let artistNameH = document.createElement("h3")
  newSongInfoContainer.appendChild(artistNameH)
  //creates audio with empty source
  let songAudio = document.createElement("audio")
  songAudio.setAttribute("controls", "true")
  songAudio.setAttribute("src", "#")
  newSongInfoContainer.appendChild(songAudio)
  //adds info container to songs container
  songsContainer.appendChild(newSongInfoContainer)
  //returns object to be used seperately
  return newSongInfoContainer
}

function getSongInfo() {
  /*
  Obtains info on submitted song, collects file name, given name, and artist
  */
  //creates empty list for later return
  let songInfo = []
  //gets name of audio by getting the file submitted and taking its name
  audioInput = document.getElementById("audio")
  audioName = audioInput.files[0].name
  //adds the song name, artist, and audio file name to list
  songInfo.push(document.getElementById("song-name").value)
  songInfo.push(document.getElementById("artist").value)
  songInfo.push(audioName)
  //returns list
  return songInfo
}

function submitSongInfo() {
  /*
  Submits the song info by adding it all to a new song container
  */
  //gets information on the submitted song
  let songInfo = getSongInfo()
  //creates new song info container
  let songInfoContainer=generateSongInfoContainer()
  //creates variable to store the children of the container
  songInfoContainerChildren = songInfoContainer.children
  //starts loop to iterate over each item in songInfoContainer
  for (let i = 0; i < songInfoContainerChildren.length; i++) {
    //if its the last piece of data (the audio) use src instead of inner HTML
    if (i == 2) {
      songInfoContainerChildren[i].src = songInfo[i]
    } else { //otherwise, use inner HTML
      songInfoContainerChildren[i].innerHTML = songInfo[i]
    }
  }
}