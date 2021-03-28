var cartObj = [];
var cartString;
var Item = /** @class */ (function () {
    function Item(item, price) {
        this.item = item;
        this.price = price;
    }
    return Item;
}());
function storeInSession() {
    sessionStorage.setItem("items", cartString);
}
function retrieveFromSession() {
    var stringified = sessionStorage.getItem("items");
    var data = JSON.parse(stringified);
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        insertNewItem(data[i]);
        total += data[i].price;
    }
    addTotal(total);
}
function addToCart(item, price) {
    console.log(item);
    console.log(price);
    var data = new Item(item, price);
    cartObj.push(data); // store data in empObj
    cartString = JSON.stringify(cartObj);
    storeInSession();
    document.getElementById("cartSize").innerHTML = "Cart Size: " + (cartObj.length);
}
function insertNewItem(data) {
    var table = document.getElementById("itemList");
    //console.log(table);
    var body = table.getElementsByTagName("tbody")[0]; //[0] means the first tbody tag
    var newRow = body.insertRow(-1); //row created
    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = data.item; //value places
    var cell3 = newRow.insertCell(1); //cell created
    cell3.innerHTML = "$" + data.price; //value places
}
function addTotal(total) {
    var table = document.getElementById("itemList");
    var body = table.getElementsByTagName("tbody")[0]; //[0] means the first tbody tag
    var newRow = body.insertRow(-1);
    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = "Total"; //value places
    var cell2 = newRow.insertCell(1); //cell created
    cell2.innerHTML = "$" + total; //value places
}
