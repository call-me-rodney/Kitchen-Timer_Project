var sec_counter = 0, min_counter = 0, clockID, colourID, start_times = 0, counter = 1;
var divClass, resetClass;

function timer(){
    sec_counter++
    if(sec_counter<10){
        document.querySelector("#sec").textContent = "0"+sec_counter;
        // sec_counter++;
    }else if(sec_counter<60){
        document.querySelector("#sec").textContent = sec_counter;
        // sec_counter++;
    }else if(sec_counter===60){
        sec_counter = 0;
        min_counter++;
        document.querySelector("#sec").textContent = "0"+sec_counter;
        if(min_counter<10){
            document.querySelector("#min").textContent = "0"+min_counter;
        }else{
            document.querySelector("#min").textContent = min_counter;
        }
    }
};

function colour_shift(){
    if(counter===1){
        divClass = ".one";
        resetClass = ".five";
    }else if(counter===2){
        divClass = ".two";
        resetClass = ".one";
    }else if(counter===3){
        divClass = '.three';
        resetClass = ".two";
    }else if(counter===4){
        divClass = ".four";
        resetClass = ".three";
    }else{
        divClass = ".five";
        resetClass = ".four";
    }
    document.querySelector(divClass).style.backgroundColor = "green";
    document.querySelector(resetClass).style.backgroundColor = "palevioletred";
    counter ++;
    if(counter>5){
        counter = 1;
    }
};

function start(){
    start_times++;
    try {
        if(start_times<2){
            clockID = setInterval(timer,1000);
            colourID = setInterval(colour_shift,1000);
        }
    } catch (error) {
        console.error(`Error in setInterval: ${error}`);
    }
};

function stop(){
    try {
        clearInterval(clockID);
        clearInterval(colourID);
    } catch (error) {
        console.error(`Error in clearInterval: ${error}`);
    }
    min_counter = 0;
    sec_counter = 0;
    start_times = 0;
    counter = 1;
    document.querySelector("#sec").textContent = "00";
    document.querySelector("#min").textContent = "00";
    document.querySelector(divClass).style.backgroundColor = "palevioletred";
};

// Start the timer when the start button is clicked
document.querySelector(".start").addEventListener("click", start);

// Stop the timer when the stop button is clicked
document.querySelector(".stop").addEventListener("click", stop);