//💡 `texto.split("").reverse().join("")`
//modelo que nao salva o valor "abc" que virou cba novamente
function inverter(texto)
{
    console.log(texto.split("").reverse().join(""));
}
return inverter("abc");

/*💡 `texto.split("").reverse().join("")`
modelo que salva

function inverter(texto)
{
    return texto.split("").reverse().join("");
}
console.log(inverter("abc"));
*/