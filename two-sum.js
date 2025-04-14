function twoSum(arr,target){
    const hashMap= new Map()
    for(let i=0;i<arr.length;i++){
        const diff=target-arr[i]
        if (hashMap.has(diff)){
            return [hashMap.get(diff),i]
        }
        hashMap.set(arr[i],i)

    }
    return []


}


function isContainsDuplicate(arr){
    const hashSet=new Set()
    for (let i=0;i<arr.length;i++){
        if(hashSet.has(arr[i])){
            return true
        }
        hashSet.add(arr[i])
    }
    return false
}

function areAnagramOrNot(firstString,secondString){
    if (firstString.length!==secondString.length){
        return false
    }
    const firstStringMap={}
    const secondStringMap={}
    for (let i=0;i<firstString.length;i++){
        firstStringMap[firstString[i]]=firstStringMap[(firstString[i]+1)||0]
        secondStringMap[secondString[i]]=secondStringMap[(secondString[i]+1)||0]
    }
    for(let j=0;j<firstStringMap.length;j++){
        if(firstStringMap[firstString[j]]!==secondStringMap[secondString[j]]){
            return false
        }
    }
    return true

}
const array=[2,3,6,8,9]

// console.log(areAnagramOrNot('racecar','carrace'))
console.log(isContainsDuplicate(array))
// console.log(twoSum(array,12))