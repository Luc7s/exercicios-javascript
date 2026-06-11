function nprimo(n){
let primo = true;
for (let i = 0; i < n; i++) {
    if ( n%2 == 0) {
        primo = false;
    }
        console.log(primo)
    }
}
nprimo(5)