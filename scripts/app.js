function app(){
    const doc = document;
    const container = doc.createElement("div");
    container.setAttribute("style",
        `position: 
        relative; 
        left:450px;
        top: 200px; 
        border-style:double; 
        border-width:10px; 
        text-align:center;
        color: white;
        background-color:blue;
        width:400px`
    )
    doc.body.appendChild(container);

    const timer = doc.createElement("h1");
    timer.textContent = "00:00:00";
    container.appendChild(timer);

    button = doc.createElement("button");
    button.textContent = "Start";
    button.setAttribute("style", 
        `position: relative;
        top:225px; left:775px;
        border-style:double;
        border-width:5px;
        border-color: white;
        text-align: center;
        font-size: 20px;
        color: white;
        background-color: green;
        width: 100px;
        height: 50px`
    )

    doc.body.appendChild(button);
}

function updateStopWatch(){

}

app()