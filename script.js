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
