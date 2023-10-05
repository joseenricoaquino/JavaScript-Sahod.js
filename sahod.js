//Get the current date
const today = new Date();
const arr = [];
const HOLIDAYS = ["10/16/2023", "11/24/2023", "12/25/2023", "01/01/2024"]

for (i = 0; i < 10; i++){

  //Get the next payday
  const temp = new Date(today.getFullYear(), today.getMonth() + i, + 15 );

  if (temp.getDay() === 0){
    temp.setDate(temp.getDate() + 1);
    if(isHoliday(temp)){
      temp.setDate(temp.getDate() + 1);
    }
    arr.push(temp);
  } else if (temp.getDay() === 6) {
    temp.setDate(temp.getDate() + 2);
    if(isHoliday(temp)){
      temp.setDate(temp.getDate() + 1);
    }
    arr.push(temp);
  } else {
    if(isHoliday(temp)){
      temp.setDate(temp.getDate() + 1);
    }
    arr.push(temp);
  }

}
console.log("Next Payday", arr[0]);
console.log("Next 10 paydays", arr);

const daysLeft = arr[0].getDate() - today.getDate();
console.log(`${daysLeft} Days Left Until Next Payday.`)

function isHoliday(dateToCheck) {
        
        return HOLIDAYS.includes(dateToCheck.toLocaleDateString())
        
}