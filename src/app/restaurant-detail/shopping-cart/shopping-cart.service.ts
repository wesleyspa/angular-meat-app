import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQuantity(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items.map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

    increaseQuantity(item: CartItem) {
        item.quantity += 1;
    }

    decreaseQuantity(item: CartItem) {
        item.quantity -= 1
        if (item.quantity === 0)
            this.removeItem(item)
    }
}