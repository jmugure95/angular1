import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<boolean>();
  show = false;

  constructor() { }

  ngOnInit(): void {
  }
  showRecipes(): any{
    this.featureSelected.emit(!this.show);
}
  showShoppingList(): any{
    this.featureSelected.emit(this.show);
  }
}
