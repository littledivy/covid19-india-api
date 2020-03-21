import {Router, Request, Response, NextFunction} from 'express';
import axios from 'axios';

export class TimelineRouter {
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
      axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=IN&timelines=true')
          .then((response) => {
              res.json({
                  last_updated: response.data.locations[0].last_updated,
                  timelines: {
                      confirmed: response.data.locations[0].timelines.confirmed.timeline,
                      deaths: response.data.locations[0].timelines.deaths.timeline,
                      recovered: response.data.locations[0].timelines.recovered.timeline
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
const timelineRoutes = new TimelineRouter();
timelineRoutes.init();

export default timelineRoutes.router;