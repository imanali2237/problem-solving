function isValidAnagram(firstString,secondString){
    
    
    console.log(firstString.length)
    console.log(secondString.length)
    
    if(firstString.length!==secondString.length) return false
    const firstStringHashMap={}
    // console.log("Oh HI")
    const secondStringHashMap={}
        for (let i=0;i<firstString.length;i++){
            firstStringHashMap[firstString[i]]=(firstStringHashMap[firstString[i]]||0)+1
            secondStringHashMap[secondString[i]]=(secondStringHashMap[secondString[i]]||0)+1

        }
        console.log("first has Map",firstStringHashMap)
        console.log("second string hashmap",secondStringHashMap)

        for (const key in firstStringHashMap){
            if(firstStringHashMap[key]!==secondStringHashMap[key]) return false
        }
        return true

}

const s = "racecar"
 const t = "carrace"

const result=isValidAnagram(s,t)
console.log(result)
