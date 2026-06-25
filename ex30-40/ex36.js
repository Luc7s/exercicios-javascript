
const arr = [5,10,20,30]
function buscar(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i;
    }
  }
  return -1;
}
console.log(buscar(arr,20))