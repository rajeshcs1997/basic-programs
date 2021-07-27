{/* reverse by using additional array */}

let a= [1,2,3,4,5]
let b=[]
let l= a.length
for(let i=l-1;i>=0;i--){
	b.push(a[i])
}
console.log(b)

{/* reverse */}

// let a = [1,2,3,4,5,6]
// let l= a.length
// for(let i=0; i<l/2; i++){
//   a[i]= a[i] + a[l-1]
//   a[l-1]= a[i] - a[l-1]
//   a[i]= a[i] - a[l-1]
//   l--
// }
// console.log(a)

{/* sorting */}

// let a = [4,3,5,1,2,100,8]
// let l= a.length
// for(let i=0; i<l; i++){
//   for(let j=i+1; j<l; j++){
//     if(a[i]>a[j]){
//       a[i]= a[i] + a[j]
//       a[j]= a[i] - a[j]
//       a[i]= a[i] - a[j]
//     }
//   }
// }
// console.log(a)

{/* greatest number of array */}

// let a= [1,2,6000,801,3,880,200,34,21,99,500]
// let large = a[0];

// for (let i = 0; i < a.length; i++) {
//     if (large < a[i] ) {
//         large = a[i];
//     }
// }
// console.log(large);

{/* remove zero's*/}

// let a= [1,0,5,66,0,88,0,3,0,5,0]
// for(let i=0; i<a.length; i++){
//   if(a[i]==0){
//     a.splice(i,1)
//   }
// }
// console.log(a)

{/* remeve duplicates */}

// let a= [1,5,6,2,5,1,2,2,1,4,3,4]
// for(let i=0; i<a.length; i++){
//   for(let j=0; j<a.length; j++){
//     if(a[j]==a[i] && (i!==j)){
//       a.splice(j,1)
//     }
//   }
// }
// console.log(a)