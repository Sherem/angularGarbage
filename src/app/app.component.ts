import { Component } from '@angular/core';
//import { MylistComponent } from './mylist/mylist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  selectedItem = '';
  title = 'My app';
  list = ['a', 'b', 'c', 's', 'k'];

  didSelect(item) {
    this.selectedItem = item;
  }
}
