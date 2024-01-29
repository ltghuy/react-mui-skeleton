import { PtnAvatar, PtnPaper, PtnStack, PtnTypography } from '@components/core';
import { ExampleItem } from '@models/example/entities';

export interface ExampleItemCardProps {
  exampleItem: ExampleItem;
}
export const ExampleItemCard = ({ exampleItem }: ExampleItemCardProps) => {
  const fullName = `${exampleItem.firstName} ${exampleItem.lastName}`;

  return (
    <PtnPaper variant='outlined' sx={{ padding: 2 }}>
      <PtnStack direction='row' spacing={2} alignItems='center'>
        <PtnAvatar src={exampleItem.avatar}>{fullName[0]}</PtnAvatar>
        <PtnStack flex={1}>
          <PtnTypography variant='subtitle1'>{fullName}</PtnTypography>
          <PtnTypography variant='caption'>{exampleItem.email}</PtnTypography>
        </PtnStack>
      </PtnStack>
    </PtnPaper>
  );
};
