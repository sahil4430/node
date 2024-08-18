// const express= require ('express');
// const port  = 3000;
// const app = express();
// app.get (
//     '/',(req, res)=>{
//         res.send ("hello")
//     }
// )
// app.get (
//     "/about",(req, res) =>{
//         res.send ("aboutpage")
//     }
// )
// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`)
//     console.log(`Example app listening on port ${port}`)
// })

const express= require ('express');
const path= require ('path');
const port= 3000;
const app = express();
 app.get(
    '/',(req,res) =>{
        res.send("this is home page")
    }
)

app.get(
    "/about",(req,res)=>{
        res.sendFile(path.join(__dirname,'new.html'))
    }
)
app.listen(port ,()=>{
    console.log(`http://localhost:${port}`)
}

)
 