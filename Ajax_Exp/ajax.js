let fetchBtn =  document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("Done")

    const xhr = new XMLHttpRequest();
    
    //This is for open the new object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    xhr.open('POSt','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-Type','application/json')

    //What to do on progress

    xhr.onprogress = function(){
        console.log("HI!");
    }

    //onreadystate is outdated function but you can still use it
    // xhr.onreadystatechange = function(){     
    //     console.log("ready state is ", xhr.readyState)
    // }
   
    //What to do when response is ready
    //onload means is we have done the request
    xhr.onload = function(){

        if(this.status == 200){
            console.log(this.responseText);
        }
        else if(this.status == 404){
            console.log("Text is not getting by file!")
        }
        else if(this.status == 429){
            console.log("Client is getting more request as expected!")
        }
    }

    params = `{"message":"Nothing is error Everything is fined because of The Harshiv Joshi."}`

    xhr.send(params)
    console.log("Harshiv is using async nature of javascript")
}

let populateBtn = document.getElementById("backupBtn");
populateBtn.addEventListener('click',populateDatahandle);

function populateDatahandle(){
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employee/1',true);

    xhr.onload = function(){
        if(this.status == 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else if(this.status == 429){
            console.log("There are two many request");
        }
        else{
            console.log("Some Error Occured");
        }
    }


    //For Send the request
    xhr.send();


}