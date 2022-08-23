import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.scss']
})
export class CartSectionComponent implements OnInit {

  private cartSubscription: Subscription | undefined;
  public items: CartItem[] | undefined;
  public total: number = 0;

  constructor(private cartServ: CartService) { }

  ngOnInit(): void {
    this.items = this.cartServ.getItems();
    this.total = this.cartServ.getTotal();
    this.cartSubscription = this.cartServ.itemsChanged.subscribe(
      (items: CartItem[]) => {
        this.items = items;
        this.total = this.cartServ.getTotal();
      }
    );
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

  public onClearCart(event: { preventDefault: () => void; stopPropagation: () => void; }) {
    event.preventDefault();
    event.stopPropagation();
    this.cartServ.clearCart();
  }

  public onRemoveItem(event: { preventDefault: () => void; stopPropagation: () => void; }, item: CartItem) {
    event.preventDefault();
    event.stopPropagation();
    this.cartServ.removeItem(item);
  }

  public increaseAmount(item: CartItem) {
    this.cartServ.updateItemAmount(item, item.amount + 1);
  }

  public decreaseAmount(item: CartItem) {
    const newAmount = item.amount === 1 ? 1 : item.amount - 1;
    this.cartServ.updateItemAmount(item, newAmount);
  }

}
