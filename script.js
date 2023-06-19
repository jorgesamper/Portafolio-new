
    let button = document.querySelector(".button");
    let checkbox = document.querySelector(".checkbox");

    button.onclick = function(){
        if(checkbox.checked){
            document.body.classList.toggle("theme");
        }
    }
