let value = 0;

    let add = document.querySelector("[data-action='increment']");
    add.addEventListener('click', counterValue);

    function counterValue(add) {
        value += 1;
        document.getElementById("value").innerHTML = value;
    };


    let rob = document.querySelector("[data-action='decrement']");
    rob.addEventListener('click', counterValueS);

    function counterValueS(rob) {
            value -= 1;
            document.getElementById("value").innerHTML = value;
        }
    
    
    
    