const http=require('http');
const app=require('../app');

const server=http.createServer(app);

server.listen(process.env.BACKEND_PORT,()=>{
    console.log(`Server is Up and running locally at Port: ${process.env.BACKEND_PORT}`);
})