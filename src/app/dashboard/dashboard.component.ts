import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { GraphsDataService } from '../graphs-data.service';
import { ChartConfiguration, ChartType, Chart, registerables } from 'chart.js';
import { map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgChartsModule,
    HttpClientModule
  ],
  providers: [GraphsDataService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // public chartType: ChartType = 'line';
  // public chartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   scales: {
  //     y: {
  //       beginAtZero: true
  //     }
  //   }
  // }
  // public chartData: ChartConfiguration['data']= {
  //   datasets: [],
  //   labels: []
  // };

  // @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>

  // constructor(private graphsDataService: GraphsDataService){}

  // ngAfterViewInit(){
  //   this.graphsDataService.getData().pipe(
  //     map((data) => data.map(d => ({ x: d.label, y: d.value })))
  //   ).subscribe(mappedData => {
  //     const ctx = this.chartCanvas.nativeElement.getContext('2d');
  //     const gradient = ctx!.createLinearGradient(0, 0, 0, 400);
  //     gradient.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
  //     gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');

  //     this.chartData = {
  //       datasets: [{
  //         data: mappedData,
  //         backgroundColor: gradient,
  //         borderColor: 'rgb(255, 99, 132)',
  //         pointBackgroundColor: 'rgb(255, 99, 132)',
  //         fill: true
  //       }],
  //       labels: mappedData.map(d => d.x)
  //     }
  //   })
  // }

}
