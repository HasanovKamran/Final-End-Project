const eye = document.querySelector("#eye")
const passinput = document.querySelector("#password")

function show(){
    if(eye.className==="fa-regular fa-eye"){
        eye.className="fa-regular fa-eye-slash"
        passinput.attributes[0].value="text"
    }
    else{
        eye.className="fa-regular fa-eye"
        passinput.attributes[0].value="password"
    }
    
}

eye.addEventListener("click",show);