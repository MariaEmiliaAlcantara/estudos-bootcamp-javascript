const person = {
  firstName: "Maria",
  lastName: "Alcantara",
  id: 1,
  fullName: function () {
    // função dentro de objeto é considerada método
    return this.firstName + " " + this.lastName;
  },
  getId: function () {
    return this.id;
  },
};

console.log(person.fullName());

console.log(person.getId());
