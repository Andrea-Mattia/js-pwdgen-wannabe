//GENERAL

/*
* 1. WRITE FIRSTNAME
* 2. WRITE LASTNAME
* 3. WRITE FAVOURITE COLOR
* 4. ADD NUMBER: 21
* 5. GENERATE PASSWORD
*/

// 1.
function myFunction() {
    var firstName = prompt("Enter Your First Name:");
    var lastName = prompt("Enter Your Last Name:");
    var prefColor = prompt("Enter Your Favourite Color:");
    var pwd = firstName + lastName + prefColor + 21;
    document.getElementById('your-pass').innerHTML = pwd;
}