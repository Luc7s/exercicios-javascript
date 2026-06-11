function fibonacci(n3){
   let n1 = 0;
   let n2 = 1;

   for (let i = 0; i < n3; i ++) {
   let n3 = n1 + n2;
   n1 = n2;
   n2 = n3;
   console.log(n1)
   } 
}
fibonacci(5)