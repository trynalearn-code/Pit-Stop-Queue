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


