import axios from 'axios';

export const fetchAllMembers = () => axios.get("http://localhost:5000/bacalhauAPI/members");