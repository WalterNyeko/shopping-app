import { FETCH_CATEGORIES, FETCH_CATEGORIES_PER_DEPARTMENT } from '../types';
import { fetchData } from '../config';

/**
 * ensures that a user can be able to retrieve all categories
 * of products
 *
 * @returns {Array}
 */
export const getCategories = () => {
    return fetchData("/categories", FETCH_CATEGORIES);
};

/**
 * ensures that a user can be able to retrieve all categories
 * of products for a particular department
 *
 * @param {String} departmentId
 *
 * @returns {Array}
 */
export const getDepartmentCategories = (departmentId) => {
    return fetchData(`/categories/inDepartment/${departmentId}`, FETCH_CATEGORIES_PER_DEPARTMENT);
};