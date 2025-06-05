import axios from 'axios';

import { BASE_URL } from "./index";

export const getAbout = async () => {
    const res = await axios.get(BASE_URL + '/api/about/');
    return res.data;
};
