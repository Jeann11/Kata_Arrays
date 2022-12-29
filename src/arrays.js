

let data = ["José", "Maria", "Ulises", "Olivia", "Maria", "Ulises", "Vanessa"];

  let result = data.filter((item,index)=>{
    return data.indexOf(item) === index;
  })

  module.exports = result
