import { Router } from 'express';

const routes = new Router();

import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';


routes.get('/', (request, response) => {
  response.send("Hello Word")
});

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)


export default routes;
