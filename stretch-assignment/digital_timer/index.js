let val =setInterval(watch, 10);

let ms10, ms100, sec, sec10;
let counter = 0;


function watch(){

    counter++;
    ms10 = counter;
    

    ms100 = Math.floor(counter/ 10);
    sec = Math.floor(counter / 100);
    sec10 = Math.floor(counter / 1000);

    if (ms10 % 10 === 0){
        ms10 = 0;
    document.getElementById("msTens").innerHTML = ms10;
    } else
    document.getElementById("msTens").innerHTML = ms10 % 10;

    if (ms100 % 10 === 0) {
        ms100 = 0;
        document.getElementById("msHundreds").innerHTML = ms100;
    } else
    document.getElementById("msHundreds").innerHTML = ms100 % 10;
    
    if (sec % 10 === 0){
        sec = 0;
        document.getElementById("secondOnes").innerHTML = sec;
    } else
    document.getElementById("secondOnes").innerHTML = sec % 10 ;

    if (sec10 % 10 === 1){
        
        document.getElementById("secondTens").innerHTML = 1;
        document.getElementById("msTens").innerHTML = 0;
        document.getElementById("msHundreds").innerHTML = 0;
        document.getElementById("secondOnes").innerHTML = 0;
        counter = 0;

        document.getElementById("secondTens").style.color = 'red';
        document.getElementById("msTens").style.color = 'red';
        document.getElementById("msHundreds").style.color = 'red';
        document.getElementById("secondOnes").style.color = 'red';
        document.getElementById("colon").style.color = 'red';
        clearInterval(val);
      

       
    } else
    document.getElementById("secondTens").innerHTML = sec10 % 10;


    
        // document.getElementById("msTens").innerHTML = 0;
        // document.getElementById("msHundreds").innerHTML = 0;
        // document.getElementById("secondOnes").innerHTML = 0;
        // document.getElementById("secondOnes").innerHTML = 0;

   


    
}





