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
	addRoom(0,4, "Prayer Room","Prayer room for the well being of others and you can distribute the received food.","Candle","Food");
	addRoom(0,5, "Knee-high tunnel", "Leading away from the Prayer room is a low slung tunnel. It's a very tight squeeze, but you lie face down and slide through toward a quiet, grumbling sound.");
	addRoom(0,6, "Goblin's  nest", "As you exit the tunnel, you see a pile of junk that looks like it was scavenged from other rooms of the castle. 'Give me the Food and I will give you the most valuable item from my collection', says the small, green goblin sitting atop the pile.", "Food", "Broken Key");
	addRoom(1,1, "Gloomy Corridor", "You are in a gloomy, stone-flagged corridor. The rough stone walls stand 3 meters apart, with the same distance measured from floor to ceiling. They drip slightly with dampness and are covered in mildew.", "Candle");
	addRoom(1,4, "Forgotten Altar", "A dusty altar sits tucked against the west wall in an otherwise empty chamber. 4 candles sit upon its surface, 3 of them lit. The light flickers across a rosary cast upon the floor nearby.", null, "Rosary");
	addRoom(2,0, "Worm Pipe", "A narrow pipe-like corridor with light coming from the other side. It seems you need to crawl to the end.");
	addRoom(2,1, "Fish Fountain", "You enter a small room, bare except for a fountain in the middle. Not a particularly grand affair, the fountain is a small carved fish with a short jet of water erupting from its mouth. A badly scratched wooden sign hangs from the fish: \"--- NOT --- DRIN-\"");
	addRoom(2,2, "Dirty Wall", "You are in a room with paintings covered by centuries of dust. You wish you could bring the fountain's water somehow to wash the walls.");
	addRoom(2,3, "Ruins", "The now spotless dusty walls also reveal a passage. As you follow the path, you notice you are descending downwards, and eventually the tunnel opens into a large, ruined, underground civilization. Perhaps you can find some lost treasure down here.", null, "Door Handle");
	addRoom(2,4, "The Dark Warehouse", "The room appears to be full of assorted junk but there is no light with which to see anything. You might find something handy here!", "Candle", "Ghost Detector");
	addRoom(2,5, "Boarded Up Room", "After smashing your way through with the Hammer, you find what looks like a storage room. There's nothing in here aside from some ancient looking broomsticks in the corner and cobwebs.", "Hammer");
	addRoom(3,0, "Shiny Cup", "At the end of the worm pipe there is a small storage area half a meter wide. It looks like a place to hide something. A hole on top makes way for sunlight to light a jar-sized cup.", null, "Shiny Cup");
	addRoom(3,2, "Big Hall" , "After washing the dusty walls a giant Inka head appeared. You noticed its left eye was a button. By pressing it you entered this big hall. There are a bunch of lances to the left and light comes from a hole in the right wall.", "Shiny Cup");
	addRoom(3,3, "The Haunted Ballroom" , "You are in the mood for mingling and dancing but not with the inhabitants of this room. The room is empty and cold but for some reason you keep bumping into things. Fill your shiny cup and have some fun!", "Shiny Cup", "Ghost Detector");
	addRoom(3,4, "Boudoir of the Queen of the Ball", "You're in the ghost queen's boudoir. You can see her majesty near a broken mirror covered with spider webs.", "Ghost Detector", "Ruby Ring");
	addRoom(3,5, "Beast's Playpen", "From the shadows of the room, you see red eyes glaring from a monstrous figure. It mutters \"My baby, my baby...\" before ripping the doll from your hands and returning to its seclusion.", "Childlike Doll");
	addRoom(3,6, "Dripping Room", "A room with red liquid dripping from the ceiling that seems neverending. You get closer to inspect the liquid to be relieved that it wasn't blood.", null, "Red Liquid");
	addRoom(3,7, "Nokomis Spider Room", "You enter a room where the walls and the floor and the ceiling are covered in cob webs and spiders. In the middle of the room, a brood mother hovers over her clutch of spidereggs, she remember that one time when you spared one of her children. She offers you", "A paralized human child", "Sticky Web", "Bag of spiderholding");
	addRoom(4,1, "Opulent bathroom", "With a loud, squeaking sound the old wooden door opens. In the dark room you recognize what was once a nice bathroom, with a large dusty mirror and golden bathtub. The smell is terrible here, probably because of some dead rats in one corner.", null, "Dead rat");
	addRoom(4,2, "Squeaky Hallway", "You enter a hallway that's full of debris and squeaky floors, further ahead you can see a door that leads to a bathroom.");
	addRoom(4,4, "Strange Paintings", "Seven paintings hang on a wall - all of them are the same; A seemingly sixty year old man wearing a tux and round glasses, holding a walking stick on one hand and a small cage. Looks like there is a spider inside it.");
	addRoom(4,5, "Green Room", "You enter a room with a couple of couches and a large coffee table. On the coffee table are some snacks and a few old magazines. There's a large flatscreen monitor on the wall.");
	addRoom(5,0, "Unconventional Urinals", "You enter a long, well-lit room with a wall lined with what appear to be hunting trophies. Upon further investigation, you realise they are, in fact, urinals.");
	addRoom(5,1, "Classified Jacuzzi", "A room with a large bath with a system of underwater jets of water to massage the body. A Large Hammer tainted red with rust lies in the middle of the room.", "Dead rat", "Hammer");
	addRoom(5,3, "Abandoned Nursery", "The walls of this room are marked with colorful paint gone dull with age. In the center, you notice a small doll - a remnant of happier days.", null, "Childlike Doll");
	addRoom(5,4, "A Ray Of Hope", "A place of eternal Darkness with a ray of hope you cant see your way further, only if you have Ruby Ring placed over the ray of sunlight will the room enlighten","Ruby Ring","Ray of Hope");
	addRoom(5,5, "Deja Vu Room", "You're pretty sure you've never been here, but you seem to just be on the brink of remembering something");
	addRoom(6,0, "Eternal Boredom", "You enter a barren room that gives the illusion of having no exit. Ghastly boredom is all that comes to mind. Seems the goblin's key wasn't actually very valuable...", "Broken Key");
	addRoom(6,1, "The Locker Room", "You enter a darkly lit locker room. There are rows of lockers and you see one of them open. You walk over to it and inside the locker is a golden glove.", null, "Golden Glove");
	addRoom(6,3, "Spooky School Yard", "You enter an empty school yard. No soul's to be seen. The only thing you hear are screams from afar.");
	addRoom(6,4, "Panic Room", "You enter a small, dimly lit room that startles you with blaring sirens. Grab the keycard from the table in the center of the room, find the keypad on the wall and swipe the keycard to turn off the sirens.", null, "Keycard");
  addRoom(6,5, "The Champagne Room", "You enter a brightly lit room with a baby grand piano in the middle and bottles of various champagnes, wines, and liquors. You sit to rest your legs and have a drink.");
	addRoom(7,1, "The Office", "You enter a dark room illuminated only by a computer monitor. You walk behind and see a note pad with the word RUN scribbled on it.", null, "Note");
	addRoom(8,1, "Pharaoh's Tomb", "You entered a room where the walls and the floor and the ceiling are covered in gold. In the middle of the room, Pharaoh's tomb is majestically placed, on it lays his Golden Staff", "Golden Glove", "Golden Staff");
  addRoom(8,2, "Leprechaun Portal", "You enter a room with the portal in the middle of the room. You can see leprechauns guarding the portal. As you get close to the portal the leprechauns block your path.");
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

function myFunctionTyping(event) {
    switch(event.which){
    	case 38:
    	if(!btnNavNorth.disabled){
        	northButtonClicked();
    	}
        break;
        case 40:
        if(!btnNavSouth.disabled){
        	southButtonClicked();
        }
        break;
	    case 39:
	    if(!btnNavEast.disabled){
        	eastButtonClicked();
        }
        break;
        case 37:
        if(!btnNavWest.disabled){
        	westButtonClicked();
        }
        break;
        case 32:
        case 13:
        	itemButtonClicked();
        	break;
	    default:
	        alert("Invalid Key Pressed \n" +
	        	"Navigate using the \n" +
	        	"Keys 	UP, 		DOWN, 	RIGHT 	and 	LEFT \n" +
	        	"for 		NORTH, 	SOUTH, 	EAST 	and 	WEST respectively.\n" +
	        	"You can pick up an item using the Return key or the Space bar!");
	        break;
    }
}
