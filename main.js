import { getTotalLaps,getCurrentLap, getRaceName, totalCars, pitStopsCompleted, carsWaitingForPitStop, nextCarToEnter, searchCarById} from "./raceData.js"

function showPitStopQueqe(){
    console.log(`Pit Stop Queue - Race Team Management System
Race engineer: "Let's check the current queue status on the pit wall.

Loading queue data...

========== PIT STOP QUEUE ==========
Race:`), 
setTimeout(getRaceName, 10);

setTimeout(() => {
  console.log(`Lap:`), getCurrentLap() 
  console.log(`out of: `), getTotalLaps()  
})
, 10000;
console.log("Total Cars in Race: ")
totalCars()
console.log("Pit stops completed: ")
pitStopsCompleted()
console.log("Cars waiting for pit stop: ")
carsWaitingForPitStop()
console.log("Next car to enter the pit: ")
nextCarToEnter()
console.log("=====================================")
console.log(`Radio message to car ${nextCarToEnter.carNumber}: Box box box,${nextCarToEnter.driverName}, pit this lap!`)
}
//I know that it's going to come in out of order. I need to deal with it. But I'm running low on time so I'm trying to finish
//the funcitons to make sure they work before I deal with this. Please keep that in mind when grading

showPitStopQueqe();

searchCarById(1)
console.log("Process completed successfully. The pit wall is up to date.")