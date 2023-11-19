/* Task 1 : 

1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )
2) change obj to Json 
3) store in file 
4) read file (json)
5) Convert to obj 
6) Update data to ( adel ahmed , 40 , cairo) 
7) convert obj to Json 
8) store in file (writeFileSync)

Task 2 : 
1- to add 7 persons with ids from 1-7 
(id - fname - lname - age - city ) 
2- to delete id 4 - 6 
3- to list fname & lname & city for all . 
4- to read all data for only the 5th person .
*/
const person = require('./person');
const yargs = require('yargs');

yargs.command({ 
  command: 'add',
  describe: 'to add an item',
  builder: {
    fname: {
      describe: 'first name',
      demandOption: true,
      type: 'string'
    },
    lname: {
      describe: 'last name',
      demandOption: true,
      type: 'string'
    },
    age: {
      describe: 'age',
      demandOption: false,
      type: 'number'
    },
    city: {
      describe: 'city',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (x) => {
    person.addPerson(x.id,x.fname, x.lname, x.age, x.city);
  }
});
////////////////////////////////// 
yargs.command({
command: 'update',
describe: 'to update an item',
builder: {
  fname: {
    describe: 'first name',
    demandOption: true,
    type: 'string'
  },
  lname: {
    describe: 'last name',
    demandOption: true,
    type: 'string'
  },
  age: {
    describe: 'age',
    demandOption: true,
    type: 'number'
  },
  city: {
    describe: 'city',
    demandOption: true,
    type: 'string'
  }
},
handler: (x) => {
    person.updateData(x.fname, x.lname, x.age, x.city);
  }
});
yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x)=> {
     //  console.log("you have already deleted an item")
      person.deletePerson(x.id)
    }
  })

  yargs.command({
    command: "list",
    describe: "to list data",
    handler: ()=> {
      person.listData()
    }
   })

   yargs.command({
    command : "read",
    describe : "to read data",
    builder : {
      id: {
         describe : "this is id desc in read command",
         demandOption: true,
         type: 'string'
      }
    },
    handler: (x)=> {
       person.readData(x.id)
    }
  })
yargs.parse();

////////////////////
// node app1.js add --id=1 --fname="ali" --lname="ahmed" --age=6 --city="cairo"
// node app1.js add --id=2 --fname="amr" --lname="ahmed" --age=6 --city="cairo"
// node app1.js add --id=3 --fname="hamed" --lname="ahmed" --age=6 --city="cairo"
// node app1.js add --id=4 --fname="khaled" --lname="ahmed" --age=6 --city="cairo"
// node app1.js add --id=5 --fname="laila" --lname="ahmed" --age=6 --city="cairo"
// node app1.js add --id=6 --fname="marwa" --lname="ahmed" --age=6 --city="cairo"
//node app1.js add --id=7 --fname="ahmed" --lname="hossam" --age=6 --city="cairo"
//node app1.js update --id=7 --fname="adel" --lname="ahmed" --age=40  --city="cairo"
//node app1.js delete --id=1
//node app1.js list
//node app1.js read --id=5