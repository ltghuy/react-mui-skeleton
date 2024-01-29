export interface Example {
  total: number;
  items: ExampleItem[];
}

export interface ExampleItem {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
}
