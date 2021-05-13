//.map()
//creates a NEW array

//syntax
//const newArray = values.map(value => value)

const ages2018 = [21, 45, 56, 32, 45, 2];

const ages2021 = ages2018.map((age) => age + 3);

console.log(ages2021);
