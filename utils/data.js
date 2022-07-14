import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@store.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
    {
      name: 'Doe',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Product 1 Title',
      slug: 'product-1-title--0001',
      category: 'Category 1',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-3560i-A.png?alt=media&token=553dcfb7-2c83-495d-a23f-5e4610459c9b',
      price: 100,
      brand: 'Brand 1',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
    {
      name: 'Product 2 Title',
      slug: 'product-2-title--0002',
      category: 'Category 2',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-A-3060i.png?alt=media&token=5fc8c276-9164-4359-8714-dae461c63e17',
      price: 100,
      brand: 'Brand 2',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
    {
      name: 'Product 3 Title',
      slug: 'product-3-title--0003',
      category: 'Category 3',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-A-3555i.png?alt=media&token=91f5bf15-ae5d-47ca-b72e-cf990562dc1a',
      price: 100,
      brand: 'Brand 3',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
    {
      name: 'Product 4 Title',
      slug: 'product-4-title--0004',
      category: 'Category 4',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-A-4030i%20MFP.png?alt=media&token=e4e93782-4ee8-49a9-bace-aa7b95497b38',
      price: 100,
      brand: 'Brand 4',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
    {
      name: 'Product 5 Title',
      slug: 'product-5-title--0005',
      category: 'Category 5',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-A-4030iMFP-4035iMFP-original.png?alt=media&token=4bc5b6a5-3b98-404e-bacf-4b5c2c829ff7',
      price: 100,
      brand: 'Brand 5',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
    {
      name: 'Product 6 Title',
      slug: 'product-6-title--0006',
      category: 'Category 6',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-A-p-4035i.png?alt=media&token=17c28a60-1ada-47fd-9494-975d8d91a7dc',
      price: 100,
      brand: 'Brand 6',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
    {
      name: 'Product 7 Title',
      slug: 'product-7-title--0007',
      category: 'Category 7',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-A-drum-unit-3060i-3560i.png?alt=media&token=faef683a-e940-4b02-8419-59eca7be9efa',
      price: 100,
      brand: 'Brand 7',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
    {
      name: 'Product 8 Title',
      slug: 'product-8-title--0008',
      category: 'Category 8',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ecommerce-f33e3.appspot.com/o/alnour_store_run1%2Fstore-A-toner-for-3555i-4555i-5555i-C.png?alt=media&token=9b271e93-f2e5-4336-8536-4bfaa1c7c1e4',
      price: 100,
      brand: 'Brand 8',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Product',
    },
  ],
};

export default data;
