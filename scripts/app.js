let isOn = false;
let [hours, minutes ,seconds, milliseconds] = [0, 0, 0, 0];
let [h, m, s, ms] = ["00", "00", "00", "00"];

function app(){
    const doc = document;
    
    //Setting up a container for the page
    const container = doc.createElement("div");
    container.className = "container";

    //timer display
    const display = doc.createElement("div");
    display.className = "display"
    container.appendChild(display);
    
    ///timer element
    const timer = doc.createElement("h1");
    timer.textContent = `${h}:${m}:${s}:${ms}`;
    display.appendChild(timer);

    //button
    button = doc.createElement("button");
    button.className = "button start";
    button.textContent = "Start";
    
    button.addEventListener('click', e => {
        changeButton(button);
        const interval = setInterval(() => {
            if(!isOn){
                clearInterval(interval);
            }

            updateTimer();
            timer.textContent = `${h}:${m}:${s}:${ms}`
        }
        ,10);
    });

    //reset button
    reset = doc.createElement('button');
    reset.textContent = "Reset";
    reset.className = "button reset"
    reset.addEventListener("click", () =>{
        if(isOn)
            changeButton(button);
            
        [hours, minutes ,seconds, milliseconds] = [0, 0, 0, 0];
        [h, m, s, ms] = ["00", "00", "00", "00"];
        timer.textContent = `${h}:${m}:${s}:${ms}`;
    });
    container.appendChild(reset);

    container.appendChild(button);
    doc.body.appendChild(container);
}

function changeButton(button){
    if(isOn){
        button.textContent = "Start";
        button.className = "button start";
        isOn = false;
    }
    else{
        button.className = "button stop";
        button.textContent = "Stop";
        isOn = true;
    }
}

function updateTimer(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
}

app()