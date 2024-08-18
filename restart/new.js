// this is the code for making the file and add some data into it 

// const fs= require('fs')

// fs.writeFile(
//     "./test.txt","addd this",(err)=>{
//         console.log(err)
//     }
// );
// console.log ("making it")

// moving forward to the some complex structure in which we read data from one file and the data we read moving to that file , read them and then make a file with combining the both data . we have 3 file and we amke a new in which the combione data of that must be present

const fs= require('fs');
fs.readFile("./files data.txt",'Utf-8',(err,data1)=>{
    fs.readFile(`./${data1}`,'utf-8',(err,data)=>{
        console.log(data)
        fs.readFile("./test.txt","Utf-8",(err,data2)=>{
            fs.readFile(`./${data2}`,'Utf-8',(err,data3)=>{
                console.log(data3)
                fs.writeFile("./combine.txt",`${data} \n${data3}`,(err)=>{
                    console.log(err)
                })
            })
        })
        
    })
})


