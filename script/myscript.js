// get the element from DOM
var itemToBeAdded = document.getElementById("input-item");
var button = document.getElementById("addItem");
var ul =  document.getElementById("list");


// add eventlistener
var count=0;
function addListItem(){
   
    var li = document.createElement("li");
    
    var btn = document.createElement("button");
    btn.textContent="Delete";
    btn.id="btn-"+count++;
    btn.addEventListener("click",deleteItem );
    li.appendChild(document.createTextNode(itemToBeAdded.value));
    li.appendChild(btn);
     ul.appendChild(li);
    itemToBeAdded.value="";

}

button.addEventListener("click",function(){

    // if the button is clicked read the value in itembox.
    if(itemToBeAdded.value!=""){
        addListItem();
    }else{
        alert("you have not added any item");
    }
});

itemToBeAdded.addEventListener("keypress",function(keyStoke){

     var key=  keyStoke.which ;
     if(itemToBeAdded.value.trim()!="" && key==13){
        addListItem();
     }

});

// delete item 
function deleteItem(event){
    var itemTobeDeleted = event.path[0].id;
    var delButton = document.getElementById(itemTobeDeleted);
    delButton.parentNode.remove();

    
}


