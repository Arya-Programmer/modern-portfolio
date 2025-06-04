import axios from 'axios';

export const getProjects = async () => {
    const res = await axios.get('http://localhost:8000/api/projects/');
    return res.data;
};
