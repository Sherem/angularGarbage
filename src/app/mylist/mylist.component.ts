import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.less']
})
export class MylistComponent implements OnInit {
  @Input() list: String[];

  currentItem: String;

  @Output() doSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  listClick(item: String) {
    this.currentItem = item;

    this.doSelect.emit(this.currentItem);

  }

}
