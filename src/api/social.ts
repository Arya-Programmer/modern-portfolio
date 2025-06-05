import axios from 'axios';

export const getSocial = async () => {
    const res = await axios.get('http://localhost:8000/api/socials/');
    return res.data;
};
