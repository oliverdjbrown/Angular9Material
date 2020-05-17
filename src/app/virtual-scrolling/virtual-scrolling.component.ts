import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScrollingComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
