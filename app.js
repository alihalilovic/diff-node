const { exec } = require("child_process")
const fs = require("fs")

const args = process.argv.slice(2)
console.log(args)

exec(`diff ${args[0]} ${args[1]}`, (error, stdout, stderr) => {
  const rawStdout = stdout.split("\n");
  const processedArray = rawStdout.filter(item => {
    if (item.startsWith("<") || item.startsWith(">")) {
      return item.slice(2)
    }
  })

  processedArray.sort((a, b) => {
    if(a.startsWith("<")) {
      return -1;
    }  
    return 1;
  })
  
  const rawDiff = processedArray.map(it => it.slice(2))

  const temp = new Object()
  const diffArr = rawDiff.map(item => {
    const diffItems = item.split("=")
    return {
      key: diffItems[0],
      value: diffItems[1]
    }
  })

  for(let i = 0; i < diffArr.length; i++) {
    if(!temp.hasOwnProperty(diffArr[i].key)) {
      temp[diffArr[i].key] = []
    }
    temp[diffArr[i].key].push(diffArr[i].value)
  }

  const finalJSON = []
  for(let [key, values] of Object.entries(temp)) {
    finalJSON.push(
      {
        key,
        oldValue: values[0],
        newValue: values[1]
      }
    )
  }

  const final = JSON.stringify(finalJSON, null, 2)
  fs.writeFileSync("result.json", final)
})