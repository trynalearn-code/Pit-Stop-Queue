

import { getRaceName } from "./raceData.js"

function showPitStopQueqe(){
    console.log(`Pit Stop Queue - Race Team Management System
Race engineer: "Let's check the current queue status on the pit wall.

Loading queue data...

========== PIT STOP QUEUE ==========
Race:`), 
getRaceName();
setTimeout(() => {
  console.log("Lap:")  
}, 1000);
}

showPitStopQueqe();