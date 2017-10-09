var month = 0;

if(typeof(month) === 'number' && month !== 0) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log('Winter');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Spring');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Summer');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Fall');
            break;
        default:
            console.log('Input must be a number between 1 and 12');
            break;
    }
}
else {
    console.log("Enter a number (bigger than 0), please.")
}
