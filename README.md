# Pit Stop Queue
## Description

### The Goal: Managing a Pit Stop Queue for a Race Team

The goal of this project is to build an app in the terminal for a real race team. The race engineer can look at the app from the Pit Wall as the cars drive around the track.

In a real race, each car needs to enter the Stop Pit several times during the race—to change tires, refuel, and sometimes repair damage. The Pit Crew can only handle one car at a time, so a queue is created: all the cars that have not yet entered the Pit on the current lap wait in a queue, and the Pit Crew calls them in one by one.

Our app simulates exactly that: it shows the race engineer a clear snapshot of the queue — who has already entered and finished, who is still waiting, and who is next in line — and allows him to both "send a simulated radio message" to the next driver, and also search for a specific vehicle by its license plate. The app should help the race engineer understand at once:

*  What race you are in (race name).
*  What lap you are on, out of how many laps in total.
*  How many cars are in the race in total.
*  How many cars have already completed the Stop Pit on the current lap.
*  Which cars are still waiting for the Stop Pit.
*  Who is the next car in line to enter the Pit.
*  Is it possible to send a simulated radio message (print) to the next car.
*  What happens when you search for a car by a number that does not exist in the race — without the program crashing.*


The README should include at least:
• A brief description of what the project does.
• An explanation of how to run the project.
• The file structure and the role of each file.
• A short list of what the application demonstrates (so that even without running it, you can understand what you are expected to see).

## What the Snapshot will contain:

The Snapshot will contain:
* Details of the race itself: race name, current lap number, and total number of laps in the race.
* List of cars. For each car: car number, driver name, and status ("done"/" waiting)".



## Overview
1. The application displays a title and name
2. The race engineer "speaks" — a short opening message explaining that they are starting to check the queue status in the pit wall.
3.  The application retrieves the queue data ("data queue Loading...")
4. After loading, the full Queue Stop Pit panel is displayed: the name of the race, the current lap out of the total, the number of vehicles, the number of Pit Stops that have been completed, and the list of vehicles that are still waiting.
5. The application automatically identifies the first vehicle in the queue, and displays it as the "next vehicle to enter the Pit".
6. The application "sends a simulated radio message" to the driver of the next vehicle, simply printing to the terminal, for example: "Box box box (Driver Name) pit this lap!"
7. The application demonstrates searching for a vehicle by an existing vehicle number, and displays all its details.
8. The application also demonstrates searching for a vehicle number that does not exist in the race, and in this case it does not crash — it catches the error and displays a clear message.
9. At the end, a completion message is displayed that confirms that the process has been completed.

### The Data
The data must be fetched from the API server, and placed into the local JSON.js file
https://server-for-test-week-13.onrender.com/api/race



## Example Output
Pit Stop Queue - Race Team Management System
Race engineer: "Let's check the current queue status on the pit wall."
Loading queue data...
============ PIT STOP QUEUE ===========
Race: Monza Grand Prix
Lap: 34 / 53
Total cars in race: 3
Pit stops completed: 1
Cars waiting for pit stop:
- Car #44 | Driver: Daniel Levi
- Car #7 | Driver: Noa Barak
Next car to enter the pit:
>> Car #44 | Driver: Daniel Levi
= waiting ":status (Stop Pit)".


## Explanation of the files

### main.js:
Here is where all the code will actually run. main.js will print the title of the race, and it will import pretty much all of the other files and use their various functions. The terminal will then show the data. The entire code will run with "node main.js".
main.js will also contain the const server = "https://server-for-test-week-13.onrender.com/api/race" so it can easily be replaced
A "data queue Loading..." message will appear before the fetch call

### raceData.js:
This file will contain functions that will help us clarify:
* What lap the driver Is on, out of how many laps in total.
* How many cars are in the race in total.
* How many cars have already completed the Stop Pit on the current lap.
* Which cars are still waiting for the Stop Pit.
* Who is the next car in line to enter the Pit.

### raceData.json:
This file will contain the actual data source. From here the data can be read, and all the services will be based
on this data

### raceService.js:
Makes a GET HTTP call to the API address.
The Promise must be handled with await/async and the call will be wrapped in catch/try — if the server is unavailable or returns an error,
the application must display a clear message and not crash.
Check ok.response (or status.response) (before converting the response with json.response).
Checks if it's possible to send a simulated radio message (print) to the next car.
When you search for a car by a number that does not exist in the race — the program doesn't crash