const wish = document.querySelector("button");

wish.addEventListener("click",()=>{
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            alert("Thanks for your wish!");
        }   
        else{
            alert("Allow notificaton to see the message from us")
        }
    })
})