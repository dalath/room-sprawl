
/*
 * Main program
 * 
 */



//---------------------------
//
// 	 Global variables
//
//----------------------
// 
var discoverCount = 0;
var currentRoom;
var currentItem = "";



//-------------------------
//
// 		METHODS
//
//--------------------
//
function init() 
{// Called from index.html
	//
	setupStyle();
	setupRooms();
	//
	enterRoomAt(0,0);	
}
//
function setupRooms()
{// This is our "level editor", where all the rooms are created (using the addRoom method rooms.js)
	//
	addRoom(0,0, "The river", "You find yourself in a large cavern. Beyond the sandy beach a river flows to the north. To the south you can see a wide opening in the rock.");
	addRoom(0,1, "Pear-shaped cave", "The passageway opens into a pear-shaped cave with a rough stone floor, making walking across it somewhat awkward. In one corner of the room is a pile of rubble, mainly stones and dust.");
	addRoom(0,2, "Small dirty room", "A door in the rock face opens to reveal a small room. The room is dirty and unkempt. A straw mattress lies in one corner. In the centre of the room is a wooden table upon which a candle burns, lighting the room with its flickering flame.", null, "candle");
	addRoom(1,1, "Gloomy corridor", "You are in a gloomy, stone-flagged corridor, three metres wide, three metres high, with rough stone walls, dripping slightly with dampness and covered in mildew.", "candle");
	addRoom(2,1, "Fish fountain", "You enter a small room, bare except for a fountain in the middle. Not a particularly grand affair, the fountain is a small carved fish, and a short jet of water comes from its mouth. A badly scratched wooden sign hangs from the fish: \"--- NOT --- DRIN-\"");
}
//
function enterRoomAt(x_, y_)
{// Loads a room into the UI
	//
	currentRoom = rooms[x_][y_];
	if(!currentRoom.discovered) {
		currentRoom.discovered = true;
		discoverCount++;
		hudDisc.innerHTML = (discoverCount / roomCount) * 100 + "%";
	}
	roomTitle.innerHTML = rooms[x_][y_].title;
	roomDescr.innerHTML = rooms[x_][y_].descr;
	//
	refreshNavButtons();
	refreshItemButton();
}
//
function refreshNavButtons()
{// Updates the UI navigation button states
	//
	var x = currentRoom.x;
	var y = currentRoom.y;
	//
	btnLockSouth.innerHTML = "&nbsp;";
	btnLockEast.innerHTML = "&nbsp;";
	btnLockWest.innerHTML = "&nbsp;";
	//
	// NORTH
	btnNavNorth.disabled = true;
	if(y == 0 || typeof rooms[x][y-1] == 'undefined') {	
		btnLockNorth.innerHTML = "WALL";
	} else if(rooms[x][y-1].checkKey()) {
		btnLockNorth.innerHTML = "need<br/>" + rooms[x][y-1].reqKey;
	} else {
		btnLockNorth.innerHTML = "&nbsp;";
		btnNavNorth.disabled = false;
	}
	// SOUTH
	btnNavSouth.disabled = true;
	if(y > rooms[x].length-2 || typeof rooms[x][y+1] == 'undefined') {
		btnLockSouth.innerHTML = "WALL";
	} else if(rooms[x][y+1].checkKey()) {
		btnLockSouth.innerHTML = "need<br/>" + rooms[x][y+1].reqKey;
	} else {
		btnLockSouth.innerHTML = "&nbsp;";
		btnNavSouth.disabled = false;
	}
	// EAST
	btnNavEast.disabled = true;
	if(x > rooms.length-2 || typeof rooms[x+1][y] == 'undefined') {
		btnLockEast.innerHTML = "WALL";
	} else if(rooms[x+1][y].checkKey()) {
		btnLockEast.innerHTML = "need<br/>" + rooms[x+1][y].reqKey;
	} else {
		btnLockEast.innerHTML = "&nbsp;";
		btnNavEast.disabled = false;
	}
	// WEST
	btnNavWest.disabled = true;
	if(x == 0 || typeof rooms[x-1][y] == 'undefined') {
		btnLockWest.innerHTML = "WALL";
	} else if(rooms[x-1][y].checkKey()) {
		btnLockWest.innerHTML = "need<br/>" + rooms[x-1][y].reqKey;
	} else {
		btnLockWest.innerHTML = "&nbsp;";
		btnNavWest.disabled = false;
	}
}
//
function refreshItemButton()
{// Updates the state of the UI room item button
	//
	if(currentRoom.item != null) {
		btnItem.style.visibility = "visible";
		btnItem.innerHTML = currentRoom.item;
	} else {
		btnItem.style.visibility = "hidden";
	}
}



//-------------------------
//
//   BUTTON HANDLERS
//
//--------------------
//
function northButtonClicked()
{
	enterRoomAt(currentRoom.x, currentRoom.y-1);
}
//
function southButtonClicked()
{
	enterRoomAt(currentRoom.x, currentRoom.y+1);
}
//
function eastButtonClicked()
{
	enterRoomAt(currentRoom.x+1, currentRoom.y);
}
//
function westButtonClicked()
{
	enterRoomAt(currentRoom.x-1, currentRoom.y);
}
//
function itemButtonClicked()
{
	var itemHolder = currentItem;
	//
	currentItem = currentRoom.item;
	hud_item.innerHTML = currentItem;
	currentRoom.item = itemHolder != "" ? itemHolder : null;
	//
	refreshItemButton();
	refreshNavButtons();
}

