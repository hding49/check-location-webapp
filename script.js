var data = new Array();

$(document).ready(function() {
    $("#addform").ajaxForm(function(response) {
        alert(response)
    });
});


function show(obj)
{  
    
    var ele1 = document.createElement("p")
    var node1 =document.createTextNode("Name: " + obj.name);
    ele1.appendChild(node1);
    document.getElementById("info").appendChild(ele1);

    var ele2 = document.createElement("p")
    var node2 =document.createTextNode("Address: " + obj.address);
    ele2.appendChild(node2);
    document.getElementById("info").appendChild(ele2);

}



function search()
{

    var searchid = document.getElementById("idsearch").value;
    console.log(searchid);
    $.ajax({
        type :"get",
        url :"http://localhost:8080/products/" + searchid,

        success: function(response){
            var data =response;

             var child = document.getElementById("info").children;

              for (j=child.length-1; j>=0; j--) 
              {
                 document.getElementById("info").removeChild(child[j]);
             }
             show(data); 

           }
       })
}