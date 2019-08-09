// const http = require('http'); //เรียกใช้ http ออบเจคที่ NodeJS พัฒนาไว้แล้ว

// const hostname = '127.0.0.1'; //ตั้งค่า Host
// const port = 3000; //ตั้งค่า Port

// const server = http.createServer((req, res) => { // สร้าง server ขึ้นมา
//     res.statusCode = 200; // เช็คค่าสถานะ 200 คือสมบูรณ์ completed
//     res.setHeader('Content-Type', 'text/plain'); // ข้อมูลใน body เป็นแบบ text
//     res.end('Hello World\n'); // ส่งสัญญาณให้ server รู้ว่ามี header และ body สมบูรณ์พร้อมข้อความ Hello World
// });

// server.listen(port, hostname, () => { // ให้เปิด server ที่ Host และ port ที่ตั้งไว้
//     console.log(`Server running at http://${hostname}:${port}/`); // แสดง log ไว้ใน Terminal
// });
const express = require('express'); //เรียกใช้ express

const hostname = '127.0.0.1'; //ตั้งค่า Host
const port = 3000; //ตั้งค่า Port

let server = express(); //สร้าง new instance  ของ expressใหม่ เก็บไว้ในตัวแปร

//เมื่อมีการเรียก http get เข้ามาด้วยรูทพาธ / จะเข้ามาทำงานภายในฟังก์ชั่นข้างในขอบเขตของfunction (req,res)
server.get('/', function(req, res, next) { 
    //ทำการส่งข้อความกลับไปยังฝั่งไคล์เอนต์
    res.send('Hello world from Express.js');
});
// ให้เปิด server ที่ Host และ port ที่ตั้งไว้
server.listen(port, hostname, () => {
    //ทำการแสดงข้อความบน หน้าจอ Terminal
    console.log(`Server running at http://${hostname}:${port}/`);
});