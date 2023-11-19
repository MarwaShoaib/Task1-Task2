const fs = require("fs")

const addPerson=(id,fname, lname, age, city)=>{
    const allData= loadData()

     allData.push({
        id,
      fname,
      lname,
      age,
      city
  })
  saveData(allData)
}
  
//update function
const updateData = (fname2, lname2, age2, city2) =>{
    const allData= loadData()

    allData.push({
        fname2,
        lname2,
        age2,
        city2
    })
    saveData(allData)

}

const deletePerson = (id) => {
    const allData = loadData()

    const datatokeep = allData.filter ((obj) => {
      return obj.id !== id
    })
     saveData(datatokeep)
}

const listData = () => {
    const allData = loadData()

      allData.forEach((obj) => {
       console.log(obj.fname , obj.lname , obj.city)
      })
   } 


   const readData = (id) => {
    const allData = loadData()

     const  itemNeeded = allData.find((obj) => {
       return  obj.id == id 
     })
       console.log(itemNeeded)

     if (itemNeeded){
       console.log(itemNeeded.fname)
       console.log(itemNeeded.lname)
       console.log(itemNeeded.age)
       console.log(itemNeeded.city)
     }else {
       console.log("id needed not found")
     }
 }

const loadData = () => {
   
    try {
        const dataJson = fs.readFileSync('data50.json').toString()
        return JSON.parse(dataJson)
    } catch {
       return []
   }
 }

const saveData=(allData)=>{
    const saveDataJson= JSON.stringify(allData) //data json
     fs.writeFileSync('data50.json' , saveDataJson)
    
}

module.exports= {
    addPerson,
    updateData,
    deletePerson,
    readData,
    listData,
}