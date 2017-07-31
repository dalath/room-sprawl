
/*
 * This file takes care of some layout and can be ignored
 * 
 */



//---------------------------
//
// 	 Global variables
//
//----------------------
// 
var hudDisc; 		// Tracks percentage of sprawl that has been discovered
var hudItem; 		// Tracks current item
var roomTitle;		// text element
var roomDescr;  	// text element
var btnNavNorth, btnNavSouth, btnNavEast, btnNavWest; 		// Navigation buttons
var btnLockNorth, btnLockSouth, btnLockEast, btnLockWest; 	// Companion buttons to the navigation buttons
var btnItem; 		// Button that is only shown when there is an item to pick up in the room
//
var room_width = 420;
var room_height = 400;



//-------------------------
//
// 		METHODS
//
//--------------------
//
function initStyleSetup()
{// Connects our global variables with DOM elements
	//
	hudDisc = document.getElementById("hud_disc");
	hudItem = document.getElementById("hud_item");
	//
	roomDescr = document.getElementById("room_description");
	roomTitle = document.getElementById("room_title");
	//
	btnNavNorth = document.getElementById("btn_nav_north");
	btnNavSouth = document.getElementById("btn_nav_south");
	btnNavEast = document.getElementById("btn_nav_east");
	btnNavWest = document.getElementById("btn_nav_west");
	//
	btnLockNorth = document.getElementById("btn_lock_north");
	btnLockSouth = document.getElementById("btn_lock_south");
	btnLockEast = document.getElementById("btn_lock_east");
	btnLockWest = document.getElementById("btn_lock_west");
	//
	btnItem = document.getElementById("btn_item");
}
// 
function setupStyle()
{// Performs the layout of the UI
	//
	initStyleSetup();
	//
	var roomWrapperWidth = parseInt(window.getComputedStyle(roomTitle.parentNode, null).width.replace( "px", "" ));
	var roomWrapperHeight = parseInt(window.getComputedStyle(roomTitle.parentNode, null).height.replace( "px", "" ));
	var roomWrapperTop = parseInt(window.getComputedStyle(roomTitle.parentNode, null).top.replace( "px", "" ));
	var roomWrapperLeft = parseInt(window.getComputedStyle(roomTitle.parentNode, null).left.replace( "px", "" ));
	var btnNav_size = parseInt(window.getComputedStyle(btnNavNorth, null).width.replace( "px", "" ));

	var roomLeftMargin = (roomWrapperWidth - room_width) / 2;
	var roomTopMargin = btnNav_size * 0.75;
	var btnHorCentering = roomWrapperLeft + ((roomWrapperWidth / 2) - btnNav_size);
	var btnVerCentering = roomWrapperTop + ((roomWrapperHeight - btnNav_size) / 2);
	var btnVerBottom = roomWrapperTop + roomWrapperHeight + btnNav_size;
	//
	roomTitle.style.top = roomTopMargin + "px";
	roomTitle.style.left = roomLeftMargin + "px";
	roomTitle.style.width = room_width + "px";
	roomDescr.style.top = ((btnNav_size * 0.5) + roomTopMargin + parseInt(window.getComputedStyle(roomTitle, null).height.replace( "px", "" ))) + "px";
	roomDescr.style.left = roomLeftMargin + "px";
	roomDescr.style.width = (room_width-20) + "px";
	//
	btnNavNorth.style.top = roomWrapperTop - (btnNav_size*2) + "px";
	btnLockNorth.style.top = roomWrapperTop - (btnNav_size*2) + "px";
	btnNavNorth.style.left = btnHorCentering + "px";
	btnLockNorth.style.left = (btnHorCentering + btnNav_size) + "px";
	//
	btnNavSouth.style.top = btnVerBottom + "px";
	btnLockSouth.style.top = btnVerBottom + "px";
	btnNavSouth.style.left = btnHorCentering + "px";
	btnLockSouth.style.left = (btnHorCentering + btnNav_size) + "px";
	//
	btnNavEast.style.top = btnVerCentering + "px";
	btnLockEast.style.top = btnVerCentering + "px";
	btnNavEast.style.left = roomWrapperLeft + roomWrapperWidth + btnNav_size + "px";
	btnLockEast.style.left = roomWrapperLeft + roomWrapperWidth + (btnNav_size*2) + "px";
	//
	btnNavWest.style.top = btnVerCentering + "px";
	btnLockWest.style.top = btnVerCentering + "px";
	btnLockWest.style.left = btnNav_size + "px";
	//
	btnItem.style.top = (roomWrapperHeight - (btnNav_size*1.5)) + "px";
	btnItem.style.left = roomLeftMargin + "px";
}
