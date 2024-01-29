import { FullScreenError } from '@components/errors/FullScreenError';

export const ForbiddenPage = () => {
  return <FullScreenError title='403' description='Forbidden' />;
};
export default ForbiddenPage;
