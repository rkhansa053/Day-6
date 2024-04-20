// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[] = ["Ayesha","Sanam","Aizal"];
console.log("Great news! I have a bigger dinner table.");

// Adding more people
guests.unshift("Kainat");
guests.splice(guests.length / 2, 0, "Anusha");
guests.push("Izma");

guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join dinner with me?`);
    
});

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log('Unfortunately, I can only invite two people for dinner.');
while (guests.length > 2) {
    let removeGuest = guests.pop();
    console.log(`Sorry, ${removeGuest}, I cant invite you for dinner.`);
};
guests.forEach(guests => {
    console.log(`Dear ${guests}, you are still invited for dinnner.`);
    
})

guests.splice(0, guests.length);
console.log(guests);
