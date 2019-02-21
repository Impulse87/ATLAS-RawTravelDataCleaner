# Why is this tool required?
Since the game ATLAS does clutter its redis DB with RawTravelData entries, it can happen that it grows to several GB of size. This results in no longer working grid travel. It seems that the vanilla game does not give its redis entries an expiration time, with which the redis DB could cleanup itself. That's why this tool will simply add an expiration time to all RawTravelData entries.

# Warning!
Please make backups of all your savegame files and redis DB before you use this tool!

# How to use it?
## Prerequisites
1. You'll need to install [Node](https://nodejs.org/en/download/) on your machine first
2. Then download the zip file from this Repository and extract it

## Installation
3. Go into the extracted folder, where you'll see the "package.json" file
4. Now press and hold Shift on your keyboard and press, without selecting anything inside that folder, but on an empty space your right mouse button.
5. And open the windows Powershell, like so: http://prntscr.com/moatcu (I expect that Linux users know how to open a shell at that location ^^)
6. You now need to install the required node packages, therefore type in "npm i" and hit enter, like so: http://prntscr.com/moaupk
  - Note: if the initial installation went through and node constantly repeats itself, simply stop it with Ctrl + C (example: http://prntscr.com/moayfj)

## Setup your connection
7. Open the file "index.js" and adjust this part - http://prntscr.com/mob1m3 - as you like.

## Execution
8. As soon as Node did install required submodules and you put in your correct password, ip and port, you'll be able to start the cleaner tool with "npm start", like so: http://prntscr.com/moaz2k
