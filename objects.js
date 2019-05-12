var playlist = {artistName: 'song'};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName]=songTitle
}
 function removeFromPlaylist(playlist,artistName){ 
delete playlist[artistName];
}
function removeFromPlaylist(playlist, artistName){
delete playlist[artistName];
}

var meals = {};

var meals = new Object ();

var meals = { breakfast: "oatmeal" };
 
// or, equivalently
 
var meals = new Object({ breakfast: 'oatmeal' })

var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}