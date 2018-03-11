import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQuantity = new EventEmitter<CartItem>()
  @Output() decreaseQuantity = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQuantity.emit(item)
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQuantity.emit(item)
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }
}
