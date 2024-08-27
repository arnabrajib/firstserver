
const http = require("http");
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("This is the Home Page")
        res.end()
    }
    else if(req.url=="/about"){
        res.write("This is the About Page")
        res.end()
    }
    else if(req.url=="/contact"){
        res.write("This is the Contact Page")
        res.end()
    }

    else if (req.url === "/file-write") {

        fs.writeFile("demo.txt", "hello world", (err) => {
            if (err) {
                res.write("Failed to create file");
                res.end();
            } else {
                res.write("File created successfully");
                res.end();
            }
        });
    }
    else {
        res.write("Page not found");
        res.write("404! Page not found");
        res.end();
    }
})
server.listen(5500,()=>{
    console.log("server is running at 5500");
})