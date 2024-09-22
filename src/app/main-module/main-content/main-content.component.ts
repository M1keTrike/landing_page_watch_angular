import { Component, OnInit } from '@angular/core';
import { IWatch } from '../models/iwatch';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent implements OnInit {
  mainWatches: IWatch[] | undefined;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.loadMainWatches;
  }

  loadMainWatches() {
    this.mainWatches = this.mainService.getMainWatches();
  }
}
