/**
 * Generate Date
 * Go to browser console and paste the following code
 * Change date, time as your requirement.
 *  */ 

let date = new Date();
let arr = [];
for(var i=16; i<=20; i++){
    let index = i;
    if(i < 10){
        index = '0'+i;
    }
    let obj =   '{Date:'+ '"' +parseInt(date.getFullYear()+ 1)+"-01-"+index+ '",' +
                'Fajr:'+ '"05:26",'+
                'Dhuhr:'+ '"12:10",'+
                'Asr:'+ '"03:54",'+
                'Maghrib:'+ '"05:34",'+
                'Isha:' +'"06:51",'+
                'Sehri:'+ '"05:20",'+
                'Iftar:'+ '"05:34"'+    
                '}';
    
    arr.push(obj);
};
console.log(arr.join(","));