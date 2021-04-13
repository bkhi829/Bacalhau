import axios from 'axios';

export const fetchAllMembers = () => axios.get(process.env.REACT_APP_API_URL+"/bacalhauAPI/members");