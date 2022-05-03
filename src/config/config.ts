import { environment } from "src/environments/environment";

export const baseurl = environment.production ? 'https://api.ShoppingCart.com' : 'http://localhost:3000';
export const poductsUrl = baseurl + "/products";
export const cartUrl = baseurl + "/cart";