import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showRecipes = new EventEmitter<boolean>();
  @Output() ShoppingList = new EventEmitter<boolean>();
  showRe = false;
  showSl = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleRecipes(): any{
    this.showRecipes.emit(!this.showRe);
  }
  toggleShoppingList(): any{
    this.ShoppingList.emit(!this.showSl);
  }
}
