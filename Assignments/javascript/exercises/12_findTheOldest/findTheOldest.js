function findTheOldest(people) {
    return people.reduce(function(prev, current) {
      var prevAge = prev.yearOfDeath ? prev.yearOfDeath - prev.yearOfBirth : new Date().getFullYear() - prev.yearOfBirth;
      var currentAge = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : new Date().getFullYear() - current.yearOfBirth;
      return (prevAge > currentAge) ? prev : current;
    });
  }
  
// Do not edit below this line
module.exports = findTheOldest;
