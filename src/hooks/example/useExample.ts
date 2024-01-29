import { EXAMPLE_MESSAGE } from '@constants/messages/example';
import { QUERY_KEYS } from '@constants/queryKeys';
import { Example } from '@models/example/entities';
import { exampleService } from '@services/example';
import { useQuery } from '@tanstack/react-query';

export const useExample = () => {
  return useQuery<Example>({
    queryKey: [QUERY_KEYS.EXAMPLE],
    queryFn: context => exampleService.getOne(context),
    meta: {
      errorMessage: EXAMPLE_MESSAGE.GET_LIST_FAILED,
    },
  });
};
