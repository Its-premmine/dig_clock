const digitalClock = document.querySelector("#clockTime");

const currentTime = () =>{
    // let currTime = new Date();
    // document.getElementById("clockTime").textContent = currTime
    let cutTIme = new Date().toLocaleTimeString();
    digitalClock.textContent = cutTIme;
}

currentTime();
setInterval(()=>{
    currentTime()
},1000)
 