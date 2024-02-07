/**
 * Capture 10 items para uma lista de supermercado
 * 
 * Após capturar, imprima-os separados por virgula.
 * 
 */

let listItem = [];

for(let marketList = 0; marketList < 10; marketList++) {

    let itemName = prompt('Digite o ' + (marketList+1) + ' item da sua lista de compras')

    listItem[marketList] = itemName

    console.log(listItem)
}

alert(listItem)