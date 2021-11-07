import { apiUrls } from '$lib/common/constants/apiUrls';
import axios from '$lib/httpService';
import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {
	const res: any = await axios.get(
		`${apiUrls.DOCTORS_URL}/front/list?page=1&pageSize=5&registrado=0`
	);
	const data = await res.data;

	return { body: data };
}
