function createMultiplication(rows, columns) {
    let html = "<table>";
    for (let rowNumber of Array(rows).keys()) { // create array out of rows count
        html = html + "<tr>";
        for (let columnNumber of Array(columns).keys()) {
            html  = html + `<td>${(rowNumber+1) * (columnNumber+1)} </td>`;

        }
        html = html + "</tr>";    
    }
    html = html + "</table>"; 
    return html;  
}
function onGeneratePressed() {
    let rowsInput = document.getElementById("rows-input").value;
    let columnsInput = document.getElementById("columns-input").value;

    let rows = Number(rowsInput);
    let columns = Number(columnsInput);

    if (!isNaN(rows) && !isNaN(columns)) {
        let tableHtml = createMultiplication(rows,columns);
        document.write(tableHtml);
    } else {
        alert("Please enter valid number");
    }
   
}