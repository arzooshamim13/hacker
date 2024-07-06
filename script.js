    console.log("hello world")

    // array methods find findIndex filter map 

    let array1 = [1,2,3,4,5];
    // console.log(array1)

    var findArray = array1.find((value, index, array)=>{
    // console.log(value , "array values and array index",index)
    // return array1.value
    // console.log(value,index)
    // if(value == 2){
    // }else{ console.log("no")}
    // console.log(value,index)
    if(value === 2){
        console.log("red")
        return value
    }
    });
    console.log(findArray)

    let arr2 = [3,5,7,9];
    var findIndex = arr2.findIndex(function (value , index) {
        // console.log("result",arr2,index)
        if(value === 7){
            console.log("have")
            return true
        }
    })
    console.log(findIndex)


    let arr3 = [1,2,3,4,5,6,2,5,6,4,3,2,1,3,4,5,6,1,2,33,45,6,4,3,2,1,3,4,6,4,3,2];
    var filterArray = arr3.filter((value, index )=>{
        //  console.log(value)
        if(value == 2){
            return true
        }
    })
    console.log(filterArray)

    let mapingArray=  [1,2,3,4,5];
    let maper = mapingArray.map((value , index)=>{
         
        return value*2  
    })
    

    console.log('not map',mapingArray)
    console.log('maper',maper)