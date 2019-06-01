import { FETCH_DEPARTMENTS } from '../types';
import { fetchData } from '../config';

export const getDepartments = () => {
    return fetchData("/departments", FETCH_DEPARTMENTS);
};