import { PtnContainer, PtnStack } from '@components/core';
import { FullScreenError } from '@components/errors/FullScreenError';
import { ExampleList } from '@components/lists/ExampleList';
import { FullScreenLoading } from '@components/loadings/FullScreenLoading';
import { useExample } from '@hooks/example/useExample';

export const HomePage = () => {
  const { data, isFetching, isError, refetch } = useExample();

  if (isFetching) {
    return <FullScreenLoading />;
  }
  if (isError || !data) {
    return (
      <FullScreenError
        title='Can not load badges'
        description='Please try again'
        onClick={refetch}
      />
    );
  }
  return (
    <PtnContainer maxWidth='lg'>
      <PtnStack padding={4}>
        <ExampleList example={data} />
      </PtnStack>
    </PtnContainer>
  );
};
export default HomePage;
