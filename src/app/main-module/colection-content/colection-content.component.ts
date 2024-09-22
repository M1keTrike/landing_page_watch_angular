import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { IWatch } from '../models/iwatch';

@Component({
  selector: 'app-colection-content',
  templateUrl: './colection-content.component.html',
  styleUrl: './colection-content.component.css',
})
export class ColectionContentComponent implements OnInit {
  constructor(private mainService: MainService) {}

  colectionWatches: IWatch[] | undefined;

  ngOnInit(): void {
    this.loadColectionWatches();
  }

  loadColectionWatches() {
    this.colectionWatches = this.mainService.getColectionWatches();
  }
}
