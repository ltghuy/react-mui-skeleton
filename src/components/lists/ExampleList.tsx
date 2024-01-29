import { ExampleItemCard } from '@components/cards/ExampleItemCard';
import { PtnStack } from '@components/core';
import { Example } from '@models/example/entities';

export interface ExampleListProps {
  example: Example;
}

export const ExampleList = ({ example }: ExampleListProps) => {
  return (
    <PtnStack spacing={2}>
      {example.items.map(exampleItem => (
        <ExampleItemCard key={exampleItem.id} exampleItem={exampleItem} />
      ))}
    </PtnStack>
  );
};
