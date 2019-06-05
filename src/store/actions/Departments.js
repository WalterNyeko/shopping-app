import { FETCH_DEPARTMENTS } from '../types';
import { fetchData } from '../config';

/**
 * ensures that a user can be able to retrieve
 * all the departments in the application
 *
 * @returns {Array}
 */
export const getDepartments = () => {
    return fetchData("/departments", FETCH_DEPARTMENTS);
};