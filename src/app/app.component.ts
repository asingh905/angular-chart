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
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.font ='10px Arial';
        
        this.data.datasets.forEach(function(dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            var data = dataset.data[index];
            if(data>0)
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            else
              ctx.fillText(data, bar._model.x, bar._model.y + 15);
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
      labels: {
          usePointStyle : true
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Values'
        },
        gridLines: {
          drawBorder: false,
        },
        ticks: {
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
  public lineChartColors: Array<any> = [{
            backgroundColor: '#7cb5ec',
            borderColor: '#7cb5ec',
        }, {
            backgroundColor: '#414046',
            borderColor: '#414046'
        }, {
            backgroundColor: '#8eec83',
            borderColor: '#8eec83'
        }];
  ngOnInit() {
  }
}





