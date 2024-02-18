'use server';

import { redirect } from 'next/navigation';
import { CartServiceFactory } from '../services/cart.service';

export type CartItem = {
  product_id: string;
  quantity: number;
  total: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
};

export async function addToCartAction(formData: FormData) {
  const cartService = CartServiceFactory.create();
  await cartService.addToCart({
    product_id: formData.get('product_id') as string,
    quantity: parseInt(formData.get('quantity') as string),
  });
  redirect('/my-cart');
}

export async function removeItemFromCartAction(formData: FormData) {
  const cartService = CartServiceFactory.create();
  const index = parseInt(formData.get('index') as string);

  cartService.removeItemFromCart(index);
}