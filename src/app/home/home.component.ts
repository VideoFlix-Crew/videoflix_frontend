import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    public communicationService: CommunicationService
  ) {
    if (this.router.url === '/home') {
      this.communicationService.isLoggedIn = true;
    }
  }

  ngOnInit(): void {}

  handlePlayVideo() {
    console.log('play video');
  }
}
