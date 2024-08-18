// var http = require('http'); 
// var fs = require('fs');
// http.createServer(function (req, res) { 
//    fs.readFile('a.html', function(err, data) { 
//       res.writeHead(200, {'Content-type': 'text/html'}); 
//       res.write(data);           
//       return res.end(); 
//     }); 
//  }).listen(5000);

// var fs = require('fs');
//  fs.unlink('new.html',function(err){
//  if (err) throw err;
//  console.log("deleted")
//  })

// var fs = require('fs');
// fs.rename('a.html','abc.html',function (err){
//    if(err) throw err;
//    console.log("renamed")
// })

// var fs= require('fs');
// fs.appendFile('new.html','helllo word ', function(err){
//    if (err) throw err;
//    console.log(" create new html file");
// });
  
// var fs= require('fs');

// fs.open('ne.html','r',function(err){
//    if (err) throw err;
//    console.log(" use to create new file")
// })

// var url= require('url');
// var adr='https://chat.openai.com/c/e6a6ebcd-8045-4dff-b956-4bdaf4dc86ea'
// var q= url.parse(adr,true);
// console.log(q.host)
// console.log(q.pathname +" search= "+ q.search)


// create new directory
// let fs= require('fs');
// let DIR ="./image"
// fs.mkdir(DIR,(err=>{
//    if (err){
//       console.log("have one ")
//    }
//    else{
//       console.log("create a new folder")
//    }
// if ( err){
// console.log("have one error ");}
//else{
//console.log("next error ")
//}
//
// }))
// this code is use to send mail to one device to other

// var mailer = require('nodemailer');
//  var send = mailer.createTransport({
//    service :'gmail',
//    auth:{
//       user:'sahilpanwar1212@gmail.com',
//       pass:'Sahil1212@#'  
//    }
//  });

//  var mailOptions = {
//    from: 'sahilpanwar1212@gmail.com',
//    to: 'preetip1245@gmail.com',
//    subject: 'Test Email',
//    text: 'This is a test email.'
//  };

//  send.sendMail( mailOptions, function(err, info){
//    if(err){
//       console.log( 'error' )
//    }
//    else{
//       console.log(info.response)
//    }
//  })


// var fs = require('fs');
//  fs.open('uploder.js','w',function(err){
//     if(err) throw err;
//     console.log('new file created')
//  })