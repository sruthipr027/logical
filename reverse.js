const str= "KRIYATMA"
function reverse(str){
   const rev = Array.from(str).reverse().join('')
   console.log(rev);
}
console.log(reverse(str));