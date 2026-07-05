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



Step 2: Writing a README
Only after the plan is clear, write an md.README file for the project — before you start implementing it in code. The README is a contract: it
defines what the project is supposed to do, before it actually does it.
The README should include at least:
• A brief description of what the project does.
• An explanation of how to run the project.
• The file structure and the role of each file.
• A short list of what the application demonstrates (so that even without running it, you can understand what you are expected to see).
Step 3: Working with Git and GitHub
The project should be run throughout like a real software project — including proper use of Git and GitHub, not just submitting a folder of files at the end.
• Initialize the Git repo at the beginning of the work (init git) and push it to your GitHub repository from the start.
• Make small, frequent commits throughout the process, with clear commit messages that describe what has changed (e.g., "Add
. "fix" or "update" not "raceData.js with JSON loading
• Make sure the README and project files are in the GitHub repo, and this is the link you submit before you start writing code.
• The commit history will be used as part of the review — it should tell the story of the development of the project, from the initial design to the final version.

3. How the race "works" in the app
It is important to understand: you are not building a real racing simulation with physics or car movement. The race in the app is essentially a fixed "snapshot" of a particular moment in a race — as if you stopped time on a particular lap and looked at who should go into the pits.
The data structure representing the race should include at least:
• Details of the race itself: race name, current lap number, and total number of laps in the race.
• List of cars (at least 3) — for each car: car number, driver name, and status ("done"/" waiting)".
• It is recommended to save this data in a separate data source (local JSON or external API — see section 4), and read it, so that the code
that represents the "data source" is disconnected from the logic that uses it.
The workflow (that the application runs from start to finish):
.1 The application displays a title and name, so that it is clear that this is a Stop Pit management system.
.2 The race engineer "speaks" — a short opening message explaining that they are starting to check the queue status in the pit wall.
3. The application retrieves the queue data (fetch from API, see section 4).
.4 After loading, the full Queue Stop Pit panel is displayed: the name of the race, the current lap out of the total, the number of vehicles, the number of Pit Stops that have been completed, and the list of vehicles that are still waiting.
.5 The application automatically identifies the first vehicle in the queue, and displays it as the "next vehicle to enter the Pit".
.6 The application "sends a simulated radio message" to the driver of the next vehicle, simply printing to the terminal, for example:
"!pit this lap ,]Driver Name ],Box box box"
.7 The application demonstrates searching for a vehicle by an existing vehicle number, and displays all its details.
.8 The application also demonstrates searching for a vehicle number that does not exist in the race, and in this case it does not crash — it catches the error
and displays a clear message.
.9 At the end, a completion message is displayed that confirms that the process has been completed.

4. Reading data from an API using fetch
The application must retrieve the data from an external source — an API server.

https://server-for-test-week-13.onrender.com/api/race

What is required:
• The component responsible for the data (e.g. js.raceService ) must make a GET HTTP call to the API address,
• The Promise must be handled with await/async and the call must be wrapped in catch/try — if the server is unavailable or returns an error,
the application must display a clear message and not crash.
• Check ok.response (or status.response) (before converting the response with json.response).
• The API address (e.g. race/api:3000/localhost://http ) should be defined in one clear place in the code (constant/variable
configuration), so that it is easy to replace.
• A "data queue Loading..." message should appear before the fetch call, to reflect that this is an asynchronous operation that can take time.
• The data structure returned from the API is the same as the structure designed in Section 3 (race details + vehicle list).
The API that provides the data will be built by you (or provided to you separately) as a small js.Node server — for example with Express — that exposes
at least one GET endpoint that returns the race data in JSON format.
.5 What should be in the end — final result
At the end of development, when you run js.main node from the main folder of the project, a full text "screen" should open in the terminal
that simulates a racing team dashboard, and goes through all the steps of the workflow described above in one sequence.
Specifically, the screen (in the terminal) should appear, in order:
• A clear title of the application.
• An opening message from the engineer.
• Some indication of data loading (text like "data queue Loading...)".

• Full status panel of the Queue Stop Pit, with all the data mentioned above (race, lap, number of cars, Pit Stops completed,
Waiting list).
• Clear indication of which car is next in line.
• A "radio message" line is printed for the next car.
• Result of a search for an existing car — with its full details.
• Result of a search for a non-existent car — with a clear error message, without the program crashing.
• A clean termination message indicating that the scenario ended successfully.
Example of a complete final output (this is exactly how it should look in the terminal):

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
• At least one existing car number (for the successful search).
• At least one non-existent car number (for the error demonstration).
You can use your own driver names and race data, it is not necessary to use real drivers.
The data is stored on the server side (for example in the json.raceData file) and served via the API — not fixed in the client code.
The code should be readable, divided into files, and with clear function names.

8. What to submit
• A link to the repo you made at the beginning of the test (submitting the link right after the planning).
When running:

node main.js
You should see a Terminal application that displays a clear Stop Pit Queue and a short and complete workflow, without errors and without crashing.