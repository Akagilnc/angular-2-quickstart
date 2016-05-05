/**
 * Created by deronlee on 5/5/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var ShoppingListComponent = (function () {
    function ShoppingListComponent() {
        this.shoppingListItems = [
            { name: "Milk" },
            { name: "Sugar" },
            { name: "Bread" }
        ];
        this.selectedItem = { name: "" };
    }
    ShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
        this.selectedItem = shoppingListItem;
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: "shopping-list",
            template: "\n        <ul>\n            <li \n            *ngfor=\"#shoppingListItem of shoppingListItems\"\n            (click)=\"onItemClicked(shoppingListItem)\"\n            >{{ shoppingListItem.name }}</li>\n        </ul>\n        <input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n    ",
        })
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map