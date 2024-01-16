import { Subject } from "rxjs";

export const cartItemAddedSubject = new Subject();
export const cartItemRemovedSubject = new Subject();
// export const addCategorySubject = new Subject();
export const shoppingCartUpdateSubject = new Subject();

    
export const cartItems = [];

cartItemAddedSubject.subscribe((itemId) => {
  if (!cartItems.includes(itemId)) {
    cartItems.push(itemId);
    shoppingCartUpdateSubject.next(cartItems);
  }
});

cartItemRemovedSubject.subscribe((itemId) => {
  if (cartItems.includes(itemId)) {
    cartItems.splice(cartItems.indexOf(itemId), 1);
    shoppingCartUpdateSubject.next(cartItems);
  }
});