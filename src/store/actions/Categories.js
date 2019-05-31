import { FETCH_CATEGORIES, FETCH_CATEGORIES_PER_DEPARTMENT } from '../types';
import { fetchData } from '../config';

export const getCategories = () => {
    return fetchData("/categories", FETCH_CATEGORIES);
};

export const getDepartmentCategories = (departmentId) => {
    return fetchData(`/categories/inDepartment/${departmentId}`, FETCH_CATEGORIES_PER_DEPARTMENT);
};