import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { CatService } from '../shared/services/cat.service';
import { NavController } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SharedModule],
})
export class HomePage implements OnInit {

  search = new FormControl('')
  breeds: any
  originalBreeds: any[] = []
  isLoading = false

  constructor(
    private readonly _catServ: CatService,
    private readonly navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.getBrends()
  }

  getBrends() {
    this.isLoading = true
    this._catServ.getAll().subscribe({
      next: (data) => {
        this.isLoading = false
        this.breeds = data
        this.originalBreeds = [...this.breeds]
      },
      error: (err) => {

      },
      complete: () => {
        this.isLoading = false
      }
    })
  }

  filteredBreeds() {
    if (!this.search.value) {
      this.breeds = [...this.originalBreeds]
      return
    }

    this.breeds = this.originalBreeds.filter(breed =>
      breed.name.toLowerCase().includes(this.search.value)
    )
  }

  detail(breed: any) {
    this.navCtrl.navigateForward('/detail', {
      state: { breed }
    })
  }
}
