import axios from 'axios';

export const getAbout = async () => {
    const res = await axios.get('http://localhost:8000/api/about/');
    return res.data;
};
