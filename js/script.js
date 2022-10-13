let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');
let tr;
let newCost = 0;
let countLines = 0;
let oldcost = 0;

add.addEventListener('click', () => {
        let cost =  +price.value * +amount.value;
        tr = document.createElement('tr');
        tr.dataset.lineNumber = countLines;
        let newList = `<td class = "name">${name.value}</td> <td class = "price">${+price.value}</td> <td class = "amount">${+amount.value}</td> <td class = "cost">${cost}</td> <td class = "remove">удалить</td>`;
        table.appendChild(tr);
        tr.innerHTML = newList;
        newCost += cost
        total.innerHTML = newCost;
        addDeleteLineFunctional(countLines)
        countLines += 1
});

function addDeleteLineFunctional(number) {
console.log(document.querySelector("tr[data-line-number='"+number+"']"));
  document.querySelector("tr[data-line-number='"+number+"']").querySelector('.remove').addEventListener(('click'), () => {
        oldcost = document.querySelector("tr[data-line-number='"+number+"']").querySelector(".cost").innerHTML;
        total.innerHTML -= oldcost;
        console.log(document.querySelector("tr[data-line-number='"+number+"']"))
        document.querySelector("tr[data-line-number='"+number+"']").remove()
        countLines -= 1
        if (countLines === 0) {
                newCost = 0;
        }
   })
}