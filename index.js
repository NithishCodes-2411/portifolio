const colorChange = document.getElementById("colorChange");
colorChange.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum===1){
        document.querySelector("*").style.backgroundColor = "white";
    }
    if(randomNum==2){
        document.querySelector("*").style.backgroundColor = "blue";
    }
    else{
        document.querySelector("*").style.backgroundColor = "black";
    }
  });
