let cartObj = [];
let cartString:string;

class Item {
    constructor(public item:any, public price:any){
    }
}

function storeInSession() {
    sessionStorage.setItem("items",cartString);
}

function retrieveFromSession() {
    let stringified = sessionStorage.getItem("items");
    let data = JSON.parse(stringified);
    let total = 0;
    for(let i=0;i<data.length;i++){
        insertNewItem(data[i]);
        total += data[i].price;
    }
    addTotal(total);
}

function addToCart(item:string,price:number) {
    console.log(item);
    console.log(price);
    let data = new Item(item,price);
    cartObj.push(data); // store data in empObj
    cartString = JSON.stringify(cartObj);
    storeInSession();
    document.getElementById("cartSize").innerHTML = "Cart Size: " + (cartObj.length);
}

function insertNewItem(data:any) {
    let table = document.getElementById("itemList");
    //console.log(table);
    let body = table.getElementsByTagName("tbody")[0]; //[0] means the first tbody tag
    let newRow = body.insertRow(-1);   //row created
    
    let cell1 = newRow.insertCell(0);           //cell created
    cell1.innerHTML=data.item;                  //value places

    let cell3 = newRow.insertCell(1);           //cell created
    cell3.innerHTML="$"+data.price;                  //value places
}
function addTotal(total) {
    let table = document.getElementById("itemList");
    let body = table.getElementsByTagName("tbody")[0]; //[0] means the first tbody tag
    let newRow = body.insertRow(-1);

    let cell1 = newRow.insertCell(0);           //cell created
    cell1.innerHTML="Total";                  //value places

    let cell2 = newRow.insertCell(1);           //cell created
    cell2.innerHTML="$"+total;                  //value places
}