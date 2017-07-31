
/*
 * CLASS: Room
 * 
 */



//---------------------------
//
// 	 Global variables
//
//----------------------
// 
var rooms = [];
var roomCount = 0;



//---------------------------
//
// 	 CONSTRUCTOR
//
//----------------------
// 
function Room() 
{
	this.x = -1;
	this.y = -1;
	this.title;
	this.descr = "";
	this.item = null; 			// Item currently present in the room
	this.discovered = false; 	// If the Room has been visited before or not
	this.reqKey = null; 		// Item required for entry
}



//---------------------------
//
// 	 MEMBER METHODS
//
//----------------------
// 
Room.prototype.checkKey = function()
{// Returns TRUE if the Room is unlockable
	//
	if(this.reqKey == null) return false;
	if(currentItem == this.reqKey) return false;
	if(this.item == this.reqKey) return false;
	//
	return true;
}



//---------------------------
//
// 	 STATIC METHODS
//
//----------------------
// 
var addRoom = function(x_, y_, title_, descr_, reqKey_, item_)
{// Adds a Room instance to the 'rooms' global container
	//
	// int x_ 
	// int y_ 
	// string title_ 
	// string descr_
	// string reqKey_ (ignore or set to 'null' if not used)
	// string item_ (ignore if not used)
	//
	reqKey_ = typeof reqKey_ == 'undefined' ? null : reqKey_;
	item_ = typeof item_ == 'undefined' ? null : item_;
	//
	// Make sure the 2D container has enough columns
	while(rooms.length-1 < x_) {
		rooms.push([]);
	}
	//
	// Clamp title (32 chars), description (256 chars) and item/key (16) strings
	title_ = title_.substr(0,32);
	descr_ = descr_.substr(0,256);
	reqKey_ = reqKey_ != null ? reqKey_.substr(0,16) : null;
	item_ = item_ != null ? item_.substr(0,16) : null;
	//
	// Create and store the new Room
	rooms[x_][y_] = new Room();
	rooms[x_][y_].x = x_;
	rooms[x_][y_].y = y_;
	rooms[x_][y_].title = title_;
	rooms[x_][y_].descr = descr_;
	rooms[x_][y_].reqKey = reqKey_;
	rooms[x_][y_].item = item_;
	//
	roomCount++; // Needed to calculate what percentage of the total game has been explored
}
