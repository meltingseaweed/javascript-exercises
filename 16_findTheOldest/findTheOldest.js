const findTheOldest = function(people) {
    
    const currentYear = new Date().getFullYear();
    people.forEach((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }
    });  

    const ages = people.map((person) => person.yearOfDeath - person.yearOfBirth);
    

    let index = 0;
    for (i = 1; i < ages.length; i++) {
        if (ages[i] > ages[index]) {
            index = i;
        }
    }
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
