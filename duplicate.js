let array = [3,4,9,3,8,0,4,9]
function duplicate(array){
   return array.filter((item, index)=>
        array.indexOf(item)==index

    )
}
console.log(duplicate(array));