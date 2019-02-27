# Why is this tool required?
Since the game ATLAS does clutter its redis DB with RawTravelData entries, it can happen that it grows to several GB of size. This results in no longer working grid travel. It seems that the vanilla game does not give its redis entries an expiration time, with which the redis DB could cleanup itself. That's why this tool will simply add an expiration time to all RawTravelData entries.

This tool was created to work in tandem with the [Admin Helper Tool](https://steamcommunity.com/sharedfiles/filedetails/?id=1656345839) mod.

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

## Sponsor
You want your own **ATLAS** game server? Use the links below to save **5%** of the original price!
[![alt text](https://i.imgur.com/DRVs8uv.png "G-Protal Europe")](https://www.g-portal.com/en/gameserver/atlas-server-hosting?ref=Impulse)

**5% G-Portal discount for Europe and Northern Asia:**

[![alt text](https://i.imgur.com/vfZwTbH.jpg "Europe")](https://www.g-portal.com/en/gameserver/atlas-server-hosting?ref=Impulse)
[![alt text](https://i.imgur.com/j8v42Iz.jpg "London")](https://www.g-portal.com/en/gameserver/atlas-server-hosting?ref=Impulse)
[![alt text](https://i.imgur.com/DjpDxkt.jpg "Moscow")](https://www.g-portal.com/en/gameserver/atlas-server-hosting?ref=Impulse)


**5% G-Portal discount for USA and Others:**

[![alt text](https://i.imgur.com/wtbIBmY.jpg "USA")](https://www.g-portal.us/en/gameserver/atlas-server-hosting?ref=Impulse)
[![alt text](https://i.imgur.com/M9gsqu7.jpg "China")](https://www.g-portal.us/en/gameserver/atlas-server-hosting?ref=Impulse)
[![alt text](https://i.imgur.com/bU8tZey.jpg "UN (Others)")](https://www.g-portal.us/en/gameserver/atlas-server-hosting?ref=Impulse)


## Donation/Support
If you like my work and want to support further development or just to spend me a coffee please

[![alt text](https://i.imgur.com/Y0XkUcd.png "Paypal $")](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S3WQNNSVY8VAL)

[![alt text](https://i.imgur.com/xezX26q.png "Paypal €")](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VQRPA46YADD9J)

[![alt text](https://i.imgur.com/nLOjZGb.png "Become a Patreon")](https://www.patreon.com/user?u=5515247)
