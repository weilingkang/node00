const fs=require('fs' );

fs.readFile('./00.txt','utf-8',function (err,data) {
    console.log(err);
    console.log(data);

})
console.log("wlk")