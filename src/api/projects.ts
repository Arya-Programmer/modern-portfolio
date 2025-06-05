import axios from 'axios';
import { BASE_URL } from '.';

export const getProjects = async () => {
    const res = await axios.get(BASE_URL + '/api/projects/');
    return res.data;
};
