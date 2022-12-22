let isOn = false;
let [hours, minutes ,seconds, milliseconds] = [0, 0, 0, 0];
let [h, m, s, ms] = ["00", "00", "00", "00"];

function app(){
    const doc = document;
    
    //Setting up a container for the page
    const container = doc.createElement("div");
    container.setAttribute("style", 
        `width: 866px;
        height: 700px;
        margin: 0px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center`
    );

    //timer display
    const display = doc.createElement("div");
    display.setAttribute("style",
        `border-style:double; 
        border-width:10px; 
        text-align:center;
        color: white;
        background-color:blue;
        width:400px`
    )
    container.appendChild(display);
    
    ///timer element
    const timer = doc.createElement("h1");
    timer.textContent = `${h}:${m}:${s}:${ms}`;
    display.appendChild(timer);

    //button
    button = doc.createElement("button");
    button.textContent = "Start";
    button.setAttribute("style", 
        `border-style:double;
        border-width:5px;
        border-color: white;
        text-align: center;
        font-size: 20px;
        color: white;
        background-color: green;
        width: 100px;
        height: 50px;
        position: relative;
        margin-left: 320px`
    );

    let interval;
    button.addEventListener('click', e => {
        changeButton(button)
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
    reset.addEventListener("click", () =>{
        clearInterval(interval);
        [hours, minutes ,seconds, milliseconds] = [0, 0, 0, 0];
        [h, m, s, ms] = ["00", "00", "00", "00"];
        timer.textContent = `${h}:${m}:${s}:${ms}`;
    });

    
    reset.setAttribute("style", 
        `border-style:double;
        border-width:5px;
        border-color: white;
        text-align: center;
        font-size: 20px;
        color: white;
        background-color: purple;
        width: 100px;
        height: 50px;
        position: relative;
        margin-right: 320px`
    );

    container.appendChild(reset);

    container.appendChild(button);
    doc.body.appendChild(container);
}

function changeButton(button){
    if(!isOn){
    button.textContent = "Stop";
    button.setAttribute("style", 
        `border-style:double;
        border-width:5px;
        border-color: white;
        text-align: center;
        font-size: 20px;
        color: white;
        background-color: red;
        width: 100px;
        height: 50px;
        position: relative;
        margin-left: 320px`);
        isOn = true;
    }
    else{
        button.textContent = "Start";
    button.setAttribute("style", 
        `border-style:double;
        border-width:5px;
        border-color: white;
        text-align: center;
        font-size: 20px;
        color: white;
        background-color: green;
        width: 100px;
        height: 50px;
        position: relative;
        margin-left: 320px`);
        isOn = false;
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