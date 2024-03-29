function Stopwatch (){
   
let startTime, endTime, running, duration=0;

this.start = function() {
if(running)
throw new Error('stopwatch is already running');

running = true;
startTime = new Date();
};

this.stop = function(){
    if (!running)
    throw new Error('stopwatch is not running');

    running = false;
    endTime = new Date();

    let timeElapsed = (endTime.getTime() - startTime.getTime())/1000;
    duration += timeElapsed;
    
};

this.reset = function(){
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
};
Object.defineProperty(this,'duration', {
    get: function() {return duration;}
});

}