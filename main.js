// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:
const reverseArray = array => { // creates function to reverse array for validate credit card function
    let retArray = []
    for (let i = 0; i < array.length; i ++) {
        retArray.unshift(array[i])
    }
    return retArray
}

function validateCred(array) { //starts function for validating credit cards
    check = array[array.length - 1] // makes check number
    let newarray = array
    newarray = reverseArray(newarray) // sets new array to reversed old array with last number popped
    let sum = check // sets initial sum to check number

    for (let i = 1; i < newarray.length; i += 2) { // starts for loop to loop through every new array value
        if (newarray[i] * 2 >= 10) {
            sum += (newarray[i] * 2) -9
        } else {
            sum += newarray[i] * 2 
        } // adds values to sum regardless of if the doubled number is more than 10

        if (newarray[i+1]) {
            sum += newarray[i+1] // adds the non doubled number each time
        }
    }
     
    if (sum % 10 === 0) {
        return true // checks if sum is divisible by 10 and returns true if it is
    } else {
        return false
    }
}

function findValidCards(array) {
    let invalidList = []
    for (let i = 0; i < array.length; i++) {
        if (validateCred(array[i])) {
            continue
        } else {
            invalidList.push(array[i])
        }
    }
    return invalidList
}

function idInvalidCompanies(array) {
    const invalidCards = findValidCards(array)
    let invalidStartNumbers = []
    invalidCards.forEach(element => invalidStartNumbers.push(element[0]))
    let invalidCompanies = []
    if (invalidStartNumbers.includes(3)) {
        invalidCompanies.push("Amex (American Express)")
    } if (invalidStartNumbers.includes(4)) {
        invalidCompanies.push("Visa")
    } if (invalidStartNumbers.includes(5)) {
        invalidCompanies.push("Mastercard")
    } if (invalidStartNumbers.includes(6)) {
        invalidCompanies.push("Discover")
    } if(invalidCompanies.includes(1, 2, 7, 8, 9, 0)) {
        invalidCompanies.push("Company not found")
    }

    return(invalidCompanies)
}




console.log(validateCred(valid1))
console.log(validateCred(valid2))
console.log(validateCred(valid3))
console.log(validateCred(valid4))
console.log(validateCred(invalid1))
console.log(validateCred(invalid2))
console.log(validateCred(invalid3))
console.log(validateCred(invalid4))

//console.log(idInvalidCompanies(batch))





