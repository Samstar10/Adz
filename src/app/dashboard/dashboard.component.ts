import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { GraphsDataService } from '../graphs-data.service';
import { ChartConfiguration, ChartType, ChartOptions, Chart, registerables } from 'chart.js';
import { map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgChartsModule,
    HttpClientModule,
    // BaseChartDirective
  ],
  providers: [GraphsDataService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor(private graphsDataService: GraphsDataService){}

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Sep 27',
      'Sep 28',
      'Sep 29',
      'Sep 30',
      'Oct 1',
      'Oct 2',
      'Oct 3',
      'Oct 4'
    ],
    datasets: [
      {
        data: [600, 400, 200, 400, 600, 200, 200, 500],
        label: 'Viewers',
        fill: true,
        tension: 0.4,
        borderColor: '#FD6A02',
        // backgroundColor: 'rgba(253,106,2,0.5)'
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  public lineChartLegend = false;

  ngAfterViewInit(): void {
    const chartContext = this.chartCanvas.nativeElement.getContext('2d');
    const gradient = chartContext.createLinearGradient(0, 0, 0, this.chartCanvas.nativeElement.offsetHeight);
    gradient.addColorStop(0, 'rgba(253,106,2,1)');
    gradient.addColorStop(1, 'rgba(253,106,2,0.2)');
    this.lineChartData.datasets[0].backgroundColor = gradient;
  }

}
