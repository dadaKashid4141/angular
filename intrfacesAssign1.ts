console.log("*******************************Extend Interfaces************************");

interface passengerInfo{
    
    passengerName:string;
    age:number;
    gender:string
}
interface jurneyInfo{
    ticketNo:number;
    place:string;
    bookingSeat:number;

}
 interface myflight extends passengerInfo,jurneyInfo{
    travellingCopony:string;
    class:string;
    ticketPrise:number
    
 }
 var myJurney:myflight={
    travellingCopony:"Air India",
    class:"Bussiness",
    ticketPrise:99999,
    passengerName:"Yash",
    age:25,
    gender:"Male",
    ticketNo:6012,
    place:"mumbai",
    bookingSeat:2,

 }
 console.log(myJurney);
 