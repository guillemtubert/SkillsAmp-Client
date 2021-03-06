import axios from 'axios';

class GrowthModelService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: false // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  getAll =() => {
    return this.auth.get(`/growth-model`)
    .then((data) => data )
  }

  getOne = (id) =>{
    return this.auth.get(`/growth-model/${id}`)
    .then((data) => data.data )
  }

  getOneByName = (name) => {
    return this.auth.get(`/growth-model/name/${name}`)
    .then((data) => data.data )
  }

}

const growthModelService = new GrowthModelService();

export default growthModelService;
