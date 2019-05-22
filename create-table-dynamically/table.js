function createTable(){

var container = document.getElementById("container");
var table = document.createElement("table");
table.border =1;
container.appendChild(table);
var tbody = document.createElement("tbody");
table.appendChild(tbody);
for(var i = 0; i < 3; i++){
    var tr = document.createElement("tr");
    tr.setAttribute("class" , "row");
    tbody.appendChild(tr);
    for(var j = 0; j < 3; j++){
        var td = document.createElement("td");
        td.setAttribute("class" , "row-data");
        tr.appendChild(td);
        td.innerHTML = "cell " + i + ", " + j;  

    }

}
container.appendChild(table);
}
createTable();