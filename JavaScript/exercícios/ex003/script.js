let num = parseFloat(prompt("Digite um número"));
let res = 0;

    for(let cont = 1; cont <= 20; cont++){
    res += (num + 'x' + cont + '=' + (num*cont) + '\n')
    }

    window.alert(res)
