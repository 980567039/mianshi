import axios from '../utils/interactive';

// get
const getAny = _ => axios.get('/api', _);

// post
const postAny = _ => axios.post('/api', _);

export {
  getAny,
  postAny
};
