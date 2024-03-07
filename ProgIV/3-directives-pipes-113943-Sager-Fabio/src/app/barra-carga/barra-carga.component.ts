import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barra-carga',
  templateUrl: './barra-carga.component.html',
  styleUrls: ['./barra-carga.component.css']
})
export class BarraCargaComponent {
  @Input() numberOfPets: number = 0;
  @Output() onLoadFinished = new EventEmitter<boolean>();
  progressWidth: string = '0%';


  ngOnInit(): void {
    this.simulateLoading();
  }

  simulateLoading() {
    let progress = 0;
    let step = Math.round(100 / this.numberOfPets); 

    const interval = setInterval(() => {
      progress += step;
      this.progressWidth = progress + '%';

      if (progress >= 100) {
        clearInterval(interval);
        
        setTimeout(() => {
          this.onLoadFinished.emit(true);
        }, 500)
      }
    }, 1000);

  }
}
