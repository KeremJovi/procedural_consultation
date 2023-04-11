import api from '../index';

export type ProcessSearchParams = {
	numProcess?: string;
	court?: string;
};

export const getProcesses = (params: ProcessSearchParams) =>
	api.get('/find/', {
		params,
	});

export const getProcessDetails = (id: any) => api.get(`/details/${id}`);
