import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { GraphsDataService, Campaign, Locations } from '../graphs-data.service';
import { ChartConfiguration, ChartType, ChartOptions, Chart, registerables } from 'chart.js';
import { map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import  ChartDataLabels  from 'chartjs-plugin-datalabels'

// Chart.register(...registerables);
Chart.register(ChartDataLabels, ...registerables)

type SummaryDataType = {
  [key: string]: { users: number; impressions: number };
}

type SummaryEntry = {
  time: string;
  users: number;
  impressions: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgChartsModule,
    HttpClientModule,
    // BaseChartDirective,
    CommonModule
  ],
  providers: [GraphsDataService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  campaigns: Campaign[] = [];
  locations: Locations[] = [];
  summaryData: { onlineUsers: number, entries: SummaryEntry[] } = { onlineUsers: 0, entries: [] };
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

  public doughnutChartLabels: string[] = [
    'Male',
    'Female',
    'Other'
  ];

  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [150, 100, 50],
      backgroundColor: [
        '#1520A6',
        '#FD6A02',
        '#30A245'
      ],
      hoverBackgroundColor: [
        '#1520A6',
        '#FD6A02',
        '#30A245'
      ]
    }
  ]

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: '50%',
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      datalabels: {
        display: false
      }
    }
  }

  public horizontalBarChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Samsung', 'Oppo', 'Nokia', 'Tecno', 'Infinix', 'HTC'],
    datasets: [
      {
        data: [51.4, 26.7, 7.2, 35.1, 11.5, 26.7],
        backgroundColor: [
          '#1520A6', '#FD6A02', '#30A245', '#CC142B', '#7F3E3B', '#7F63F4'
        ],
        borderRadius: 10
      }
    ]
  };

  public horizontalBarChartOptions: ChartConfiguration<'bar'>['options'] = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        color: '#FCFCFC',
        font: {
          weight: 700
        },
        formatter: (value: number) => {
          return `${value}%`;
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: false
        },
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  public barChartPlugins = [ChartDataLabels];

  public secondDoughnutChartLabels: string[] = [
    '18 - 24',
    '35+',
    '25-34'
  ];

  public secondDoughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [280, 90, 30],
      backgroundColor: [
        '#1520A6',
        '#FD6A02',
        '#30A245'
      ],
      hoverBackgroundColor: [
        '#1520A6',
        '#FD6A02',
        '#30A245'
      ]
    }
  ]

  public secondDoughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: '50%',
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      datalabels: {
        display: false
      }
    }
  }

  ngAfterViewInit(): void {
    const chartContext = this.chartCanvas.nativeElement.getContext('2d');
    const gradient = chartContext.createLinearGradient(0, 0, 0, this.chartCanvas.nativeElement.offsetHeight);
    gradient.addColorStop(0, 'rgba(253,106,2,1)');
    gradient.addColorStop(1, 'rgba(253,106,2,0.2)');
    this.lineChartData.datasets[0].backgroundColor = gradient;
  }

  ngOnInit(): void {
    let rawData: SummaryDataType = this.graphsDataService.getSummaryData();

    this.summaryData.entries = Object.keys(rawData).map(key => {
      return {
        time: this.formatTimeLabel(key),
        users: rawData[key].users,
        impressions: rawData[key].impressions
      }
    })

    this.campaigns = this.graphsDataService.getCampaignData();

    this.locations = this.graphsDataService.getLocationsData();
  }

  private formatTimeLabel(time: string): string {
    const timeLabels: { [key: string]: string } = {
      today: 'Today',
      yesterday: 'Yesterday',
      lastWeek: 'Last Week',
      last7Days: 'Last 7 Days',
      last30Days: 'Last 30 Days',
      thisYear: 'This Year (Jan - Today)',
      lastYear: 'Last Year'
    };

    const formattedTime = time.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return timeLabels[time] || formattedTime;
  }

}
