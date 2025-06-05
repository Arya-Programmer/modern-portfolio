import axios from 'axios';
import { BASE_URL } from '.';

export const getSocial = async () => {
    const res = await axios.get(BASE_URL + '/api/socials/');
    return res.data;
};
