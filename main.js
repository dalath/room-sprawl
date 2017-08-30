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
	addRoom(0,0, "The River", "You find yourself in a large cavern. Beyond the sandy beach a river flows to the north. To the south you can see a wide opening in the rock.");
	addRoom(0,1, "Pear-Shaped Cave", "The passageway opens into a pear-shaped cave with a rough stone floor, making walking across it somewhat awkward. In one corner of the room is a pile of rubble, mainly stones and dust.");
	addRoom(0,2, "Small Dirty Room", "A door in the rock face opens to reveal a small room. The room is dirty and unkempt. A straw mattress lies in one corner. In the center of the room is a wooden table upon which a candle burns, lighting the room with its flickering flame.", null, "Candle");
	addRoom(1,1, "Gloomy Corridor", "You are in a gloomy, stone-flagged corridor. The rough stone walls stand 3 meters apart, with the same distance measured from floor to ceiling. They drip slightly with dampness and covered in mildew.", "Candle");
	addRoom(1,4, "Forgotten Altar", "A dusty altar sits tucked against the west wall in an otherwise empty chamber. 4 candles sit upon its surface, 3 of them lit. The light flickers across rosary cast to the floor nearby.", null, "Rosary");
	addRoom(2,0, "Worm Pipe", "A narrow pipe-like corridor with light coming from the other side. It seems you need to crawl to the end.");
  	addRoom(2,1, "Fish Fountain", "You enter a small room, bare except for a fountain in the middle. Not a particularly grand affair, the fountain is a small carved fish with a short jet of water erupting from its mouth. A badly scratched wooden sign hangs from the fish: \"--- NOT --- DRIN-\"");
	addRoom(2,2, "Dirty Wall", "You are in a room with paintings covered by centuries of dust. You wish you could bring the fountain's water somehow to wash the walls.");
	addRoom(2,3, "Ruins", "The now spotless dusty walls also reveals a passage. As you follow the path, you notice your descent downwards, and eventually the tunnel opens into a large, ruined, underground civilization. Perhaps you can find some lost treasure down here.", null, "Door Handle");
	addRoom(2,4, "The Dark Warehouse", "The room appears to be full of assorted junk but there is no light with which to see anything. You might find something handy here!", "Candle", "Ghost Detector");
	addRoom(3,0, "Shiny Cup", "At the end of the worm pipe there is a small storage area half a meter wide. It looks like a place to hide something. A hole on top makes way for sunlight to light a jar-sized cup.", null, "Shiny Cup");
	addRoom(3,2, "Big Hall" , "After washing the dusty walls a giant Inka head appeared. You noticed its left eye is a button. By pressing it you entered this big hall. There are a bunch of lances to the left and light comes from a hole in the right wall.", "Shiny Cup");
	addRoom(3,3, "The Haunted Ballroom" , "You are in the mood for mingling and dancing but not with the inhabitants of this room. The room is empty and cold but for some reason you keep bumping into things. Fill your shiny cup and have some fun!", "Shiny Cup", "Ghost Detector");
	addRoom(3,4, "Boudoir of the Queen of the Ball", "You're in the ghost queen's boudoir. You can see her majesty near a broken mirror covered with spider webs.", "Ghost Detector", "Ruby Ring");
	addRoom(4,1, "Opulent bathroom", "With a loud, squeeking sound the old wooden door opens. In the dark room you recognize what was once a nice bathroom, with large dusty mirror and golden bathtub. The smell is terrible here, probably because of some dead rats in one corner.", null, "Dead rat");
	addRoom(4,2, "Squeaky Hallway", "You Enter a hallway that's full of debis and squeaky floors, further ahead you can see a door that leads to a bathroom.");
  	addRoom(4,4, "Strange Paintings", "Seven paintings hang on a wall - all of them are the same; A seemingly sixty year old man wearing a tux and round glasses, holding a walking stick on one hand and a small cage. Looks like there is a spider inside it.");
	addRoom(5,1, "Classified Jacuzzi", "A room with a large bath with a system of underwater jets of water to massage the body. A Large Hammer tainted red with rust lies in the middle of the room.", "Dead rat", "Hammer");
	addRoom(5,4, "A Ray Of Hope", "A place of eternal Darkness with a ray of hope you cant see your way further, only if you have Ruby Ring placed over the ray of sunlight will the room enlighten","Ruby Ring","Ray of Hope");
}
//
function enterRoomAt(x_, y_)
{// Loads a room into the UI
    //
    currentRoom = rooms[x_][y_];
    if (!currentRoom.discovered) {
        currentRoom.discovered = true;
        discoverCount++;
        hudDisc.innerHTML = ((discoverCount / roomCount) * 100).toFixed(2) + "%";
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
    if (currentRoom.item != null) {
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
    enterRoomAt(currentRoom.x, currentRoom.y - 1);
}
//
function southButtonClicked()
{
    enterRoomAt(currentRoom.x, currentRoom.y + 1);
}
//
function eastButtonClicked()
{
    enterRoomAt(currentRoom.x + 1, currentRoom.y);
}
//
function westButtonClicked()
{
    enterRoomAt(currentRoom.x - 1, currentRoom.y);
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
