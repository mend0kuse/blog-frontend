import axios from 'axios';
import { USER_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
	baseURL: _API_,
	headers: {
		Authorization: localStorage.getItem(USER_KEY),
	},
});
