console.log('connnected');

// for user to enter favorite number//
let favNum = prompt('Enter your favorite number!');
favNum = Number(favNum);

// What happens if number is above 1000//
if (favNum >= 1000){
    alert("Woah, that's a big number!");
// What happens if number is above 0//
}else if (favNum >= 0){
    alert("That's a cool number.");
// What happens if number is under 0//
}else if (favNum < 0){
    alert("Negative numbers?! That's just bananas.");
// What happens if word is entered instead of number//
}else (favNum => "");{
    alert("Enter a valid integer");
}
