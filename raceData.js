import fs, { readFile } from "fs"

export function getRaceName(){
    readFile("raceData.json", "utf8", (err, data)=>{
        if (err){
            return ("Error: ", err)
        }
        const datas = JSON.parse(data)
        console.log(datas.raceName)
    })
}
export function getCurrentLap(){
    readFile("raceData.json", "utf8", (err, data)=>{
        if (err){
            return ("Error: ", err)
        }
        const datas = JSON.parse(data)
        console.log(datas.currentLap)
    })
}

export function getTotalLaps(){
    readFile("raceData.json", "utf8", (err, data)=>{
        if (err){
            return ("Error: ", err)
        }
        const datas = JSON.parse(data)
        console.log(datas.totalLaps)
    })
}

export function totalCars(){
    readFile("raceData.json", "utf8", (err, data)=>{
    if (err){
        return ("Error: ", err)
    }
    const datas = JSON.parse(data)
    console.log(datas.cars.length)
})
}

export function pitStopsCompleted() {
    readFile("raceData.json", "utf8", (err, data)=>{
    if (err){
        return ("Error: ", err)
    }
    const datas = JSON.parse(data)
    const cars = datas.cars
    const finished = cars.filter(cars=>cars.status==="done")
    console.log(finished.length)
})
}

export function carsWaitingForPitStop(){
    readFile("raceData.json", "utf8", (err, data)=>{
        if (err){
            return ("Error: ", err)
        }
        const datas = JSON.parse(data)
        const cars = datas.cars
        const waiting = cars.filter(cars=>cars.status==="waiting")
        console.log(datas.totalLaps)
    })
}
