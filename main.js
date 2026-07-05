

import { getTotalLaps,getCurrentLap, getRaceName } from "./raceData.js"

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
}

showPitStopQueqe();