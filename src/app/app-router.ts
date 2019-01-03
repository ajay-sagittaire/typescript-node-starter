import { Application } from 'express';
import { Server } from 'typescript-rest';

import HomeService from './home/home.service';

export default class AppRouter {

    constructor(app: Application) { 
        this.config(app); 
    }

    private config(app: Application) {
        Server.buildServices(app,
            HomeService,
        );
    }

}