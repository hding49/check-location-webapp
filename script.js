var data = new Array();

$(document).ready(function() {
    $("#addform").ajaxForm(function(response) {
        alert(response)
    });
});

function add()
{
    alert("Create successfully!");
    readProduct();
    
}
 
function read()
{
    $.ajax({
        type :"get",
        url :"http://54.89.90.204:8080/products/read",

        success: function(response){
             data = response;

             var child = document.getElementById("info").children;

             for (j=child.length-1; j>=0; j--) 
             {
                document.getElementById("info").removeChild(child[j]);
             }

             alert("Read all successfully!");

             for (i=0; i<data.length; i++)
             {
                 show(data[i]);
             }

           }
       })
}

function show(obj)
{  
    var ele1 = document.createElement("p")
    var node1 =document.createTextNode("name:" + obj.name);
    ele1.appendChild(node1);
    document.getElementById("info").appendChild(ele1);

    var ele2 = document.createElement("p")
    var node2 =document.createTextNode("address:" + obj.address);
    ele2.appendChild(node2);
    document.getElementById("info").appendChild(ele2);


}

function update()
{   
    var addname = document.getElementById("nameupdate").value;
    var addtype = document.getElementById("typeupdate").value;
    var addloan = document.getElementById("loanupdate").value;
    var addquantity = document.getElementById("quantityupdate").value;

    var searchid = document.getElementById("idsearch").value;

    $.ajax({
        type :"put",
        url :"http://54.89.90.204:8080/products/" + searchid +"/update",
        data:{
              "name":addname,
              "type":addtype,
              "loan":addloan,
              "quantity":addquantity,
        },

        success: function(response){

            alert("Update successfully!");
            
           }
       })
}


function delet()
{   
    var deleteid = document.getElementById("iddelete").value;

    $.ajax({
        type :"delete",
        url :"http://54.89.90.204:8080/products/" + deleteid +"/delete",

        success: function(response){

           alert("Delete successfully!");

           }
       })
}

function readProduct() {
    setInterval(function() {
        setTimeout(function() {
            document.getElementById("submit").click();
        }, 0)
    }, 2000)

}

//function quantitySanitization(str) {
    //var r = /^\+?[1-9][0-9]*$/;
    //return r.test(str);
//}

function search()
{

    var searchid = document.getElementById("idsearch").value;
console.log(searchid);
    $.ajax({
        type :"get",
        url :"http://54.89.90.204:8080/products/" + searchid,

        success: function(response){
            var data =response;
            alert("Search successfully!");

            document.getElementById("nameupdate").value = data.name;
            document.getElementById("typeupdate").value = data.address;


             var child = document.getElementById("info").children;

             for (j=child.length-1; j>=0; j--) 
             {
                document.getElementById("info").removeChild(child[j]);
             }

             alert("Read successfully!");

             for (i=0; i<data.length; i++)
             {
                 show(data[i]);
             }

            

           }
       })
}