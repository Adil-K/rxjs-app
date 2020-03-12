import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'PokeMart';
  buttonLabel = 'Cart';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setButtonLabel();
  }

  handleCartClick(): void {
    this.setButtonLabel();
  }

  setButtonLabel(): void {
    if (this.router.url !== '/cart') {
      this.buttonLabel = 'Shop';
      this.router.navigate(['cart']);
    } else {
      this.buttonLabel = 'Cart';
      this.router.navigate(['shop']);
    }
  }
}
