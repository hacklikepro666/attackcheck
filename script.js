document.body.onload = launch();

function launch() {
    var inc = 0,
        max = 26151;
        delay = 50; // 100 milliseconds
 
    function timeoutLoop() {
       document.getElementById('accounts-span').innerHTML = inc;
       if (inc < max)
       inc+= 463;
       setTimeout(timeoutLoop, delay);
    }
 
    setTimeout(timeoutLoop, delay);
 }