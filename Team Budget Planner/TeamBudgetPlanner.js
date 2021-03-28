var budgetObj = [];
var totalBudget = [];
var budgetString;
function storeInSession() {
    sessionStorage.setItem("budgetInfo",budgetString);
}
function retrieveFromSession() {
    var stringified = sessionStorage.getItem("budgetInfo");
    var data = JSON.parse(stringified);
    for(var i=0;i<data.length;i++){
        insertNewRecord(data[i]);
        //console.log(data.length);
    }
    addTotalBudget();
}

function insertNewRecord(data) {
    var table = document.getElementById("budgetList");
    //console.log(table);
    var body = table.getElementsByTagName("tbody")[0]; //[0] means the first tbody tag
    var newRow = body.insertRow(body.length);   //row created
    
    var cell1 = newRow.insertCell(0);           //cell created
    cell1.innerHTML=data.cName;                  //value places

    var cell2 = newRow.insertCell(1);           //cell created
    cell2.innerHTML=data.pName;                  //value places

    var cell3 = newRow.insertCell(2);           //cell created
    cell3.innerHTML="$"+data.budget;                  //value places
    totalBudget.push(data.budget) ;
}

function addTotalBudget(){
    var totalBudgetNum = 0;
    for (var i = 0;i<totalBudget.length;i++){
        totalBudgetNum+= Number(totalBudget[i]);
    }
    var table = document.getElementById("budgetList");
    var body = table.getElementsByTagName("tbody")[0]; //[0] means the first tbody tag
    var newRow = body.insertRow(body.length);

    var cell1 = newRow.insertCell(0);           //cell created
    cell1.innerHTML="";                  //value places

    var cell2 = newRow.insertCell(1);           //cell created
    cell2.innerHTML="Total Budget";                  //value places

    var cell3 = newRow.insertCell(2);           //cell created
    cell3.innerHTML="$"+totalBudgetNum;                  //value places
}

function onFormSubmit() {
    //alert("Added Budget Details")
    var data = readFormData();
    console.log(data);
    budgetObj.push(data); // store data in empObj
    budgetString = JSON.stringify(budgetObj);
    storeInSession();
    console.log(budgetString);
    resetData();
}

function readFormData() {
    var obj = {}    //empty object
    obj.cName = document.getElementById("cName").value;
    obj.pName = document.getElementById("pName").value;
    obj.budget = document.getElementById("budget").value;
    //console.log(obj);
    return obj;
}

function resetData() {
    document.getElementById("cName").value="";
    document.getElementById("pName").value="";
    document.getElementById("budget").value="";
}
