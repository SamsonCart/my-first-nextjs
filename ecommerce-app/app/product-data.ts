export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [{
  id: '123',
  name: 'Hat',
  imageUrl: 'hat.jpg',
  description: 'A stylish hat for all occasions.',
  price: 19.99
}, {
  id: '456',
  name: 'Shirt',
  imageUrl: 'shirt.jpg',
  description: 'A comfortable shirt for everyday wear.',
  price: 29.99
}, {
  id: '789',
  name: 'Shoes',
  imageUrl: 'shoes.jpg',
  description: 'Durable shoes for all terrains.',
  price: 49.99
}, {
  id: '101112',
  name: 'Watch',
  imageUrl: 'watch.jpg',
  description: 'A classic watch for timeless style.',
  price: 99.99
}];