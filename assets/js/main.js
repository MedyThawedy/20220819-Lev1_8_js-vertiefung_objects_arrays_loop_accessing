let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

/*
Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
Schreibe Funktion für das Objekt, die in der Console folgendes ausgeben:
name
coop
city
emails
*/

function showObj() {

    studentData.map(
        ({ name, age, coop, address, emails }) => {
            console.log('name : ' + name, ' , age : ' + age, ', coop ' + coop + ', emails :' + emails[0] + ' : ' + emails[1]);
        }
    );
    console.log('-----------------------------');
    console.log('-----------------------------');
    studentData.forEach(
        ({ name, age, coop, address, emails }) => {
            console.log('name : ' + name, ' , age : ' + age, ', coop ' + coop + ', emails :' + emails[0] + ' : ' + emails[1]);
        }
    );

}

console.log('-----------------------------');
console.log('-----------------------------');

function showSolution() {
    console.log('-------------Map()----------------');
    studentData.map(
        ({ name, age, coop, address, emails }) => {
            console.log('name : ' + name)
            console.log('coop ' + coop);
            console.log(emails);
        }
    );

    console.log('--------------ForEach()---------------');
    studentData.forEach(
        ({ name, age, coop, address, emails }) => {
            console.log('name : ' + name)
            console.log('coop ' + coop);
            console.log(emails);
            console.log(address.city);
        }
    );

}
