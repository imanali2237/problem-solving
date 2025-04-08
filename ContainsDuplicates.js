function checkOontainDuplicate(array){
    const hashSet=new Set()
    for(const element of array){
        if(hashSet.has(element)) return true

       
         else   hashSet.add(element)
  
        


    }
    return false

}

 let nums =[1, 2, 3, 4]
 console.log("output",checkOontainDuplicate(nums))
