
import api from '../services/api';
import Dev from '../models/Dev';


import parseStringsAsArray from '../utils/parseStringsAsArray';

class DevController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringsAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs });
  }
}

export default new DevController();