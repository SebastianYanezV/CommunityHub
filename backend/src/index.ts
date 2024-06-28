import Server from './server/server';
import dotenv from 'dotenv';

dotenv.config(); 

const port = parseInt(process.env.PORT || '3001', 10); 
const server = Server.init(port);

server.start(() => {
    console.log(`Server running on port ${server.port}`);
});
