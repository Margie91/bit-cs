function hideEmail(email) {
    var firstPart = '';
    var secondPart = '';
    var hiddenMail = '';
    //var half = 0;

    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            break;
        } else {
            firstPart += email[i];
        }
    }

    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            for (var j = i; j < email.length; j++)
                secondPart += email[j];
        }
    }

   // half = firstPart.length / 2;
    
    for (var i = 0; i < firstPart.length / 2; i++) {
        hiddenMail += firstPart[i];
    }

    return hiddenMail + '...' + secondPart;
}

console.log(hideEmail('myemailaddress@bgit.rs'));