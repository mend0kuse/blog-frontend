import { useCreateArticleMutation } from '@/entities/Article';

export const useCreateArticle = () => {
	const [createArticle, { data: response, ...otherData }] = useCreateArticleMutation();

	return { createArticle, response, ...otherData };
};
