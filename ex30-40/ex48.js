function anagrama(a1,a2) {
    let resultado = {};
    a1 = a1.split('').sort().join('');
    a2 = a2.split('').sort().join('');
    if (a1 === a2) {
        return true;
    }
    return false;
    }
console.log(anagrama('bana', 'roma'))