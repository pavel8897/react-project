export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Смартфон Galaxy S24",
      price: 79990,
      image: "https://placehold.co/400x300",
      description: "Мощный смартфон с отличной камерой"
    },
    {
      id: 2,
      name: "Ноутбук MacBook Air",
      price: 119990,
      image: "https://placehold.co/400x300",
      description: "Лёгкий и производительный"
    },
    {
      id: 3,
      name: "Наушники Sony WH-1000XM5",
      price: 29990,
      image: "https://placehold.co/400x300",
      description: "Лучшие шумоподавляющие наушники"
    }
  ];