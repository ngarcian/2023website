function run(interval, frames) {
    var int = 1;
    
    function func() {
        document.rightSide.id = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}

run(1000, 10); //milliseconds, frames