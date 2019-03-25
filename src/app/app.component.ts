import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor() { }

  title = 'chartPOC';
  public barChartOptions = {
    "hover": {
      "animationDuration": 0
    },
    "animation": {
      "duration": 1,
      "onComplete": function() {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;

        // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function(dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            var data = dataset.data[index];
            if(data>0){
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            }else{
              ctx.fillText(data, bar._model.x, bar._model.y + 15);
            }
          });
        });
      }
    },
    title: {
      display: true,
      text: 'Column chart with negative values'
    },
    legend: {
      display: true,
      position: 'bottom',
      setBorder: 0,
      labels: {
          fontColor: 'rgb(255, 99, 132)',
          usePointStyle : true
      }
    },
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          padding: 20,
          min: -40,
          max: 60,
          stepSize: 20,
          callback: function(value, index, values) {
              return value+'M';
          }
        }
      }],
      xAxes: [{

        gridLines: {
          drawBorder: false,
          display: false
        },
        ticks: {
        }
      }]
    }
  };
  public barChartLabels = ['AH', 'Book Income', 'Foreign', 'Perm', 'Taxes', 'Temp'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{
    label: 'Corp',
    data: [-2, 45, -12, 44, -8, -24],
  }, {
    label: 'Other',
    data: [-5, 25, -12, 5, -8, -27],
  }, {
    label: 'PSHIP',
    data: [-7, 15, -3, 5, -8, -30],
  }];
  public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: '#7cb5ec',
            borderColor: '#7cb5ec',
            pointBackgroundColor: '#7cb5ec',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: '#414046',
            borderColor: '#414046',
            pointBackgroundColor: '#414046',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // dark grey
            backgroundColor: '#8eec83',
            borderColor: '#8eec83',
            pointBackgroundColor: '#8eec83',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
  ngOnInit() {
  }
}

