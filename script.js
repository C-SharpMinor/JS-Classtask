// Practice Task: String Concatenation
// 1. Create two variables containing "Good" and "morning". Join them with a space using + and display the result.
const greeting1= "Good";
const greeting2= "morning";

const result = greeting1 + " " +  greeting2;
console.log(result);

// 2. Create a variable named visitorName containing "Chidi". Join the word "Welcome" with this variable to display:
//    Welcome Chidi

const visitorName= "Chidi";
const result1= "Welcome " + visitorName;
console.log(result1);

// 3. Use these variables:
//    const customerName = "Zainab";
//    const ticketCount = 3;
//    const eventName = "Music Night";
//    - Use + to create Zainab booked 3 tickets for Music Night. Store it in bookingMessage.
//    - Create the same message using .concat(). Store it in secondMessage.
//    - Display both using console.log().
// Remember: Include spaces and punctuation when joining strings.

   const customerName = "Zainab";
   const ticketCount = 3;
   const eventName = "Music Night";

   const bookingMessage= customerName + " booked " + ticketCount + " tickets for " + eventName;
   console.log(bookingMessage);

   console.log(customerName.concat(" booked ", ticketCount, " tickets for ", eventName));

   // Practice Tasks
// 1. Create variables for your name, age, and course.
const firstName= "Oreoluwa"
const age= 25
const course= "Full Stack Web Dev"

// 2. Use a template literal to introduce yourself.
console.log(`My name is ${firstName}. I'm {age} years old studying the course, ${course}`)

// 3. Create productName, price, and quantity.
const productName= "The Nothing Phone"
const price= 1000
const quantity= 200

// 4. Display a sentence containing the product name and total cost.
console.log(`We've got a product - ${productName}. We've got ${quantity} units of it. So it has a total cost of ${price * quantity}`)

// 5. Write a three-line welcome message using one template literal.
console.log(`Hello there, my name is ${firstName}. I'm {age} years old.
    I'm currently in TechStudio study the ${course} course. I hope to be good even to earn a living off it.
    I've got a product called ${productName}`)

// Display all results using console.log().
