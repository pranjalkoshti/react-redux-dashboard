import * as types from './types';

export const threadClickHandler = (id,title) => ({
    type: types.THREAD_CLICK_HANDLER,
    payload:{id:id,title:title}
})

export const filtersHandler = (filters) => ({
    type: types.FILTERS_HANDLER,
    payload:filters
})

export const resetFilters = () => ({
    type: types.RESET_FILTERS,
})