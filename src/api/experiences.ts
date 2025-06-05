import axios from 'axios';

import { BASE_URL } from "./index";

export const getExperiences = async () => {
    const res = await axios.get(BASE_URL + '/api/experiences/');
    return res.data;
};
