
import express from 'express';
import cors from 'cors';
import {router} from '../routes/usuarios.js';


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middleswares
        this.middlewares();

        //Rutas de mi apicacion

        
        this.routes();
    }

    middlewares(){
        //directorio publico
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.usuariosPath, router)
        

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }

}

export {Server}