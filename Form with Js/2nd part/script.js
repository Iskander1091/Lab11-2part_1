var selectedRow = null

function OFS() {
    if (validate()) {
        var forma = readForma();
        if (selectedRow == null)
            insertion(forma);
        else
            updateRecord(forma);
        FormReset();
    }
}

function readForma() {
    var forma = {};
    forma["book"] = document.getElementById("book").value;
    forma["author"] = document.getElementById("author").value;
    forma["price"] = document.getElementById("price").value;
    return forma;
}

function insertion(data) {
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.book;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function FormReset() {
    document.getElementById("book").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("book").value = selectedRow.cells[0].innerHTML;
    document.getElementById("author").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(forma) {
    selectedRow.cells[0].innerHTML = forma.book;
    selectedRow.cells[1].innerHTML = forma.author;
    selectedRow.cells[2].innerHTML = forma.price;
}

function onDelete(td) {
    if (confirm('Are you sure to delete your book ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("empList").deleteRow(row.rowIndex);
        FormReset();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("book").value == "") {
        isValid = false;
        document.getElementById("BookNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("BookNameValidationError").classList.contains("hide"))
            document.getElementById("BookNameValidationError").classList.add("hide");
    }
    return isValid;
}