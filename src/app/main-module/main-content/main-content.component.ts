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
  socialMediaIcons: string[] | undefined;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.loadMainWatches();
    this.loadSocialMediaIcons();
  }

  loadMainWatches() {
    this.mainWatches = this.mainService.getMainWatches();
  }

  loadSocialMediaIcons() {
    this.socialMediaIcons = this.mainService.getSocialMediaIcons();
  }

  scrollToColection(): void {
    const section = document.getElementById('collection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
