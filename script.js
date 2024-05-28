//! inital values
 var selectedRow = null;
 
//! form onsubmit logic

function formOnSubmit(e){
    event.preventDefault();             //! important line
    var formData = readFormData();
    if(selectedRow == null){
     insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    } 
    onReset();
}

//! get method(retriving the data )

function readFormData(){
    var formData={};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//! insert the data(post method)

function insertNewRecord(data){
     var table = document.getElementById("tableList").getElementsByTagName("tbody")[0];
     var newRow = table.insertRow(table.length)
     cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.productCode;
     cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.product;
     cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.qty;
     cell4 = newRow.insertCell(3);
     cell4.innerHTML = data.perPrice;
     cell4 = newRow.insertCell(4);
     cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button><button onClick="onDelete(this)">Delete</button>`;
}

//! edit and update data(updating the data)
//edit button func
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;

}
//after edit submit func (update)

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;

}

//! deleting the data(delete method)

function onDelete(td){
    if(confirm("Are you sure ?")){
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex)
    }
}

//! resting the form
function onReset(){
    document.getElementById("productCode").value="";
    document.getElementById("product").value="";
    document.getElementById("qty").value="";
    document.getElementById("perPrice").value="";
    selectedRow = null;
}