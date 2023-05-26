 let id = undefined;
 
 selectData();
 function manageData(){
    let name = document.getElementById("name").value;
    // console.log(name);
    if (name == ''){
       alert("Write something");
    }else{
        if(id==undefined){
            document.querySelector(".container").innerHTML = " "; 
            let arr = JSON.parse(localStorage.getItem('crud'));
            if(arr == null){
                data = [name];
                localStorage.setItem('crud',JSON.stringify(data));
            }else{
                arr.push(name);
                localStorage.setItem('crud',JSON.stringify(arr));
            }
            console.log(id);
        }else{
            let arr = JSON.parse(localStorage.getItem('crud'));
            arr[id] = name ;
            console.log(arr);
            localStorage.setItem('crud',JSON.stringify(arr));
            console.log("else");
            document.querySelector(".container").innerHTML = " ";
            
            
        }
    }
    selectData();
    document.getElementById("name").value = " ";
}

function selectData(){
    let arr = JSON.parse(localStorage.getItem('crud'));
    if(arr!=null){
        for(let k in arr){

            // console.log(arr[k]);
            let container = document.querySelector(".container");
            let newLi = document.createElement("p");
            
            let spanTrash = document.createElement("button");
            spanTrash.setAttribute("onclick",`removeData(${k})`);
            spanTrash.className = "fas fa-trash remove";

            let spanEdit = document.createElement("button");
            spanEdit.setAttribute("onclick",`editData(${k})`);
            spanEdit.className = "fas fa-edit edit";
            
            newLi.textContent = arr[k];
            newLi.classList.add("item_input");
            
            newLi.appendChild(spanEdit);
            newLi.appendChild(spanTrash);
            container.appendChild(newLi);
            
        }
    }
    
}

function editData(eid){
    id = eid;
    
    let arr = JSON.parse(localStorage.getItem('crud'));
    document.getElementById("name").value = arr[id];

}

function removeData(id){
   let arr = JSON.parse(localStorage.getItem('crud'));
   arr.splice(id,1);
   localStorage.setItem('crud',JSON.stringify(arr));
   document.querySelector(".container").innerHTML = " ";
   selectData();
//    

}

function removeAllData(){
    localStorage.clear();
    document.querySelector(".container").innerHTML = " ";
    //  console.log("remove");
}