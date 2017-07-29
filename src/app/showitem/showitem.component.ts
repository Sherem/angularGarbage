import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.less']
})
export class ShowitemComponent implements OnInit {
  @Input() item: String;

  constructor() { }

  ngOnInit() {
  }

}
