First, [go visit Room Sprawl](https://rawgit.com/dalath/room-sprawl/master/index.html) and see what it's about. 

...

You can contribute simply by creating a new room in the game!


## What are rooms?
A room has a location (x and y in a grid), a title (e.g. *"Shadowy Dining Room"*) and a description (e.g. *"Most of this room is taken up by a giant dining room table surrounded by tall chairs..."* and so on). 

A room might also contain an item (optional) or require some item to be entered (also optional). See How-To-Play for mer detailed information.


## Components
The xy location are two integers and will be predefined so you wont have to come up with them yourself.

The title, description, and items parameters are just simple strings. In order to keep it terse (and to add some challenge to your creativity), they are constricted in length: 

	title can be max 32 characters long
	description can be max 256 characters long
	items can be max 16 characters long


## Where to begin?
Look at the setupRooms method in main.js. Simplest way to start would be to copy-and-paste an existing line and make your changes to it.
To see how your particular room fits into the sprawl, have a look at [MAP.txt](MAP.txt)


## TECH STUFF
I use Github Desktop to make it all simpler, but whatever way you do your GIT should be fine.

1. Fork the repo
2. Clone your fork
3. Create a branch
4. Make your changes
5. Push your changes to your fork
6. Create a pull request
