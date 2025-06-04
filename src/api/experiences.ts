import axios from 'axios';

export const getExperiences = async () => {
    const res = await axios.get('http://localhost:8000/api/experiences/');
    return res.data;
};
