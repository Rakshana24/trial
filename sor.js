function working(value) {
    const disp = document.getElementById("display");
    disp.value += value;
    console.log(disp.value);
}

function clearDisplay() { 
    const disp = document.getElementById("display");
    disp.value = ""; 
}

function calculateResult() {
    const disp = document.getElementById("display"); 
    try{
        disp.value = eval(disp.value);
        console.log(disp.value);
    } catch (error) {
        disp.value = "error"; 
    }
}