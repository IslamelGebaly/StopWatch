isOn = false;

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
    timer.textContent = "00:00:00";
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

    button.addEventListener('click', e => {
        e.textContent = "Stop";
        e.setAttribute("style", 
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
    });
    container.appendChild(button);
    doc.body.appendChild(container);
}


app()