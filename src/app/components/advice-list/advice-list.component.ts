import { Component, Input, OnInit } from '@angular/core';
import { AdviceSlipModel } from 'src/app/models/slip-models';

@Component({
  selector: 'app-advice-list',
  templateUrl: './advice-list.component.html',
  styleUrls: ['./advice-list.component.sass']
})
export class AdviceListComponent implements OnInit {
  @Input() searchedList: AdviceSlipModel[];
  @Input() noDataMessage: string;
  constructor() { }
  ngOnInit(): void {}
}
