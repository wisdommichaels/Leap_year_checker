
document.getElementById('leapYearForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const year = parseInt(document.getElementById('year').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(year)) {
        resultElement.textContent = 'Please enter a valid year.';
        return;
    }

    if (isLeapYear(year)) {
        resultElement.textContent = `${year} is a leap year.`;
    } else {
        resultElement.textContent = `${year} is not a leap year.`;
    }
});

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}