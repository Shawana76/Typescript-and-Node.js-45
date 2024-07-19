//Task 15
let guestArr : string[] = ["Awais","Zulqarnain","Shawana"];
let canNotAttend : string = "Shawana"

//console.log(canNotAttend + " " "can not attend the dinner.")

let newGuest : string = "Junaid"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

//console.log(guestArr)

guestArr.map((items) => 
console.log(`Dear ${items}, you are invited to the dinner.`)
)
