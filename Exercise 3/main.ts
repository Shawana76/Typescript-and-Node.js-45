//Name cases: Store a person's name in a variable, and then print that person's name in lowercase,uppercase,titlecase

let personName: string = "Shawana Khattak";

//in Lowercase 
console.log ("Lowercase:", personName.toLowerCase());

//in Uppercase 
console.log ("Uppercase:", personName.toUpperCase());


//in Titlecase
console.log("Titlecase:", personName.replace(/\b\w/g,c=>c.toUpperCase()))
