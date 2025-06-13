import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class DetailPage implements OnInit {

  breed: any

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
    const navigate = this.router.getCurrentNavigation()
    this.breed = navigate?.extras?.state?.['breed']
  }

}
