let array =  [3,4,9,3,8,0,4,9]

function largeSmall(array){
    large= array[0]
    small = array[0]
    for(i=0;i<array.length;i++){
        if(array[i]>large){
            large=array[i]
        }
        if(array[i]<small){
            small=array[i]
        }
    }
    return[large,small ]

}
console.log(largeSmall(array));