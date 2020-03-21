import {Router, Request, Response, NextFunction} from 'express';
import axios from 'axios';

export class StateRouter {
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
      axios.get('https://api.rootnet.in/covid19-in/stats/latest')
          .then((response) => {
            var stateList = []
              response.data.data.regional.forEach(element => {
                  stateList.push({
                      [element.loc]: {
                          confirmed: element.confirmedCasesIndian,
                          deaths: element.deaths,
                          recovered: element.discharged
                      }
                  })
              });
              res.json({
                  states: stateList
            })
        })
  }
  public getState(req: Request, res: Response, next: NextFunction) {
    axios.get('https://api.rootnet.in/covid19-in/stats/latest')
      .then((response) => {
              var stateData = []
              response.data.data.regional.forEach(element => {
                if (element.loc == req.param.state) {
                  stateData.push(element) 
                }
              });
              if(stateData.length < 0) stateData.push({ error: "State "+req.param.state+" not found"})
              res.json({
                  stateData
            })
        })
  }
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:state', this.getState);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const stateRoutes = new StateRouter();
stateRoutes.init();

export default stateRoutes.router;