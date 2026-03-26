// given an input array which is sorted, find two elements whose sum is equal to target
//Example: input: arr[] = [-8, 1, 4, 6, 10, 45], target = 16
function findTargetSum(array,target){
    if(array.length===0||array.length<2){
        return false
    }
    let leftPointer=0
    let rightPointer=array.length-1
    while(leftPointer<rightPointer){
        const obtainedSum=array[leftPointer]+array[rightPointer]
        if(obtainedSum===target){
            return {
                firstNumber:array[leftPointer],
                secondNumber:array[rightPointer]
            }
        }else if(obtainedSum<target){
            leftPointer++

        }else if(obtainedSum>target){
            rightPointer--
        }
    }
    return false

}
const result=findTargetSum([-8, 1, 4, 6, 10, 45],16)
console.log(result)