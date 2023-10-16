const screen = document.querySelector(".operations");
const bottoms = document.querySelectorAll(".items");
const calculator = document.querySelector(".container");
const theme = document.querySelector("#theme");

bottoms.forEach(bottom => {
    bottom.addEventListener("click",()=>{
        const bottomSelected = bottom.textContent;
        console.log(bottomSelected);
        
        if(bottom.id ==="clean"){
            screen.textContent = "0";
            return;
        }
        if(bottom.id==="delete"){
            if(screen.textContent.length === 1){
                screen.textContent = "0";
            } else{
                screen.textContent = screen.textContent.slice(0,-1);
            }
            return;
        }
        if(bottom.id === "equal"){
            screen.textContent = eval(screen.textContent);
            return;
        }
        if(screen === "0"){
            screen.textContent = bottomSelected;
        } else{
            screen.textContent += bottomSelected;
        }

        if(bottom.id==="theme"){
            calculator.classList.toggle("active");
            return;
        }
    });
});