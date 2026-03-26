
function moveZerosToEnd(array,ele){
    let k=0
    if(array.length===0){
        return false
    }
    let toBeRemovedElement=ele||0
    for(let i=0;i<array.length;i++){
        if(array[i]!==toBeRemovedElement){
            [array[k],array[i]]=[array[i],array[k]]
            k++
        }
    }
    return array

  
}
const result=moveZerosToEnd([ 1, 0, 6, 0, 45],1)
console.log(result)
