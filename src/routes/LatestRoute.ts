import {Router, Request, Response, NextFunction} from 'express';
import axios from 'axios';

export class HeroRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Latest data.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
      axios.get('https://coronavirus-19-api.herokuapp.com/countries/India')
          .then((response) => {
              res.json({
                  infected: response.data.cases,
                  deaths: response.data.cases,
                  recovered: response.data.recovered,
                  today: {
                      infected: response.data.todayCases,
                      deaths: response.data.todayDeaths
                  },
                  extras: {
                      critical: response.data.critical,
                      casesPerOneMillion: response.data.casesPerOneMillion
                  }
            })
        })
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;