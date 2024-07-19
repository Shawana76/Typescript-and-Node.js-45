//Task 15
var guestArr = ["Awais", "Zulqarnain", "Shawana"];
var canNotAttend = "Shawana";
//console.log(canNotAttend + " " "can not attend the dinner.")
var newGuest = "Junaid";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
