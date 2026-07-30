import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TOPICS } from '../topics/topics.data';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected readonly topics = TOPICS;
}
