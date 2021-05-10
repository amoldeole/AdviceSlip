import { Component, OnInit } from '@angular/core';
import { AdviceSlipModel, Slip } from 'src/app/models/slip-models';
import { AdviceSlipService } from './../../services/advice-slip.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.sass']
})
export class AdviceComponent implements OnInit {
  searchedList: Slip[];
  searchModel: string;
  noDataMessage: string;
  isAdviceChecked: boolean;
  constructor(private adviceSlipService: AdviceSlipService) { }

  ngOnInit(): void {}

  randomAdvice(): void {
    this.searchedList = [];
    this.isAdviceChecked = true;
    this.noDataMessage = null;
    this.adviceSlipService.getRandomAdvice().subscribe((response: AdviceSlipModel) => {
      this.searchModel = '';
      this.searchedList.push(response.slip);
    });
  }

  searchAdvice(): void {
    if(!(this.searchModel) || !this.searchModel.trim().length) {
      this.searchedList = [];
    } else {
      this.isAdviceChecked = true;
      this.searchedList = [];
      this.noDataMessage = null;
      this.adviceSlipService.getSearchedAdvice(this.searchModel).subscribe((response: AdviceSlipModel) => {
        if (response.slips && response.slips.length) {
          this.searchedList = response.slips;
        } else {
          this.noDataMessage = response.message.text;
        }
      });
    }
  }
}
