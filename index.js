// Code your solution in this file!
const drivers = ["Tulley","Jhon","verce","kukuli",];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
    
}
const firstTwoDrivers=returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);


function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}
const lastTwoDrivers=returnLastTwoDrivers(drivers)
console.log(lastTwoDrivers);

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];



 const createFareMultiplier= function(multiplyValue){
    return function (value){
        return multiplyValue * value
    }
 }


const fareDoubler = createFareMultiplier(2);


const fareTripler=createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, driversToReturn) {
    return driversToReturn(drivers);
}

    
 