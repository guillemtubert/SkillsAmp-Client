import axios from 'axios';

class UsersService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: false // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  getAll =() => {
    return this.auth.get(`/user`)
    .then((data) => data )
  }

  getOne =(id) =>{
    return this.auth.get(`/user/${id}`)
    .then((data)=> data.data )
  }

  getOneByEmail = (email) =>{
    return this.auth.get(`/user/email/${email}`)
    .then((data)=> data )
  }

  updateTheUserTeam = (id, teamId ) =>{
    return this.auth.put(`/user/${id}`, {team: teamId})
    .then((data)=> data )
  }

  updateUserCurrentCompass = (id, CurrentFinalCompassId ) =>{
    return this.auth.put(`/user/${id}`, {currentGrowthCompass: CurrentFinalCompassId} )
    .then((data)=> data )
  }

  updateUser = (id, userUpdated ) =>{
    return this.auth.put(`/user/edit/${id}`, userUpdated)
    .then((data)=> data )
  }

}

const userService = new UsersService();

export default userService;
