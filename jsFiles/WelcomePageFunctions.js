let ClickStart=document.querySelector('button');

ClickStart.addEventListener('click',function(event){
    let UserName=document.querySelector('input');
    let errorMsg=document.getElementsByClassName('error')[0];
    if(UserName.value==""||!isNaN(UserName.value))
    {
        event.preventDefault();
        if(UserName.value=="")
            errorMsg.innerText="Name Field is required";
        else{
            errorMsg.innerText="Name Field Must be a String";
        }
    }
    else{
        errorMsg.innerText="";
        
    }

});


