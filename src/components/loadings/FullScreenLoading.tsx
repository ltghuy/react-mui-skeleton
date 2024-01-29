import { PtnCircularProgress, PtnStack } from '@components/core';

export const FullScreenLoading = () => (
  <PtnStack
    flex={1}
    justifyContent='center'
    alignItems='center'
    width='100%'
    height='100%'
  >
    <PtnCircularProgress />
  </PtnStack>
);
