var http = require ('http');
var fs = require('fs');
var formidable = require('formidable');
 http.createServer( function ( req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    if (req.url ==='/upload'){
      let form = new formidable.IncomingForm();
      form.parse(req);
      form.on('fileBegin',function(name,file){
      
         file.filepath = __dirname +'/upload/' + file.originalFilename ;
         res.end();
      })

      form.on('file',function(){
         res.write("file uploaded")
         res.end();
         console.log("uploaded")
      })
    }
    else{
      let html = fs.readFileSync('new.html');
      res.write(html);
      res.end()
    }

 }).listen(8080)