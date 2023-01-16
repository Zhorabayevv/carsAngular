import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  priceForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    car: ['', [Validators.required, Validators.minLength(3)]],
  });
  carsData = [
    {
      name: 'Lamborghini Huracan Spyder',
      img: '1.png',
      year: '2019',
      gear: 'автомат',
      engine: 5.2,
    },
    {
      name: 'Chevrolet Corvette',
      img: '2.png',
      year: '2017',
      gear: 'автомат',
      engine: 6.2,
    },
    {
      name: 'Ferrari California',
      img: '3.png',
      year: '2010',
      gear: 'автомат',
      engine: 3.9,
    },
    {
      name: 'Lamborghini Urus',
      img: '4.png',
      year: '2019',
      gear: 'автомат',
      engine: 4.0,
    },
    {
      name: 'Audi R8',
      img: '5.png',
      year: '2018',
      gear: 'автомат',
      engine: 5.2,
    },
    {
      name: 'Chevrolet Camaro',
      img: '6.png',
      year: '2019',
      gear: 'автомат',
      engine: 2.0,
    },
    {
      name: 'Maserati Quattroporte',
      img: '7.png',
      year: '2018',
      gear: 'автомат',
      engine: 3.0,
    },
    {
      name: 'Dodge Challenger',
      img: '8.png',
      year: '2019',
      gear: 'автомат',
      engine: 6.4,
    },
    {
      name: 'Nissan GT-R',
      img: '9.png',
      year: '2019',
      gear: 'автомат',
      engine: 3.8,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.priceForm);
  }

  goScroll(target: HTMLElement, car?: any): void {
    target.scrollIntoView({ behavior: 'smooth' });
    target.scrollIntoView({ behavior: 'smooth' });
    if (car) {
      this.priceForm.patchValue({ car: car.name });
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {
      transform:
        'translate3d(' +
        (e.clientX * 0.3) / 8 +
        'px,' +
        (e.clientY * 0.3) / 8 +
        'px,0px)',
    };
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = { backgroundPositionX: '0' + 0.3 * window.scrollY + 'px' };
  }

  onSubmit(): void {
    if (this.priceForm.valid) {
      alert('Ваша заявка принята!');
      this.priceForm.reset();
    }
  }
}
