import React from 'react';
import ChartistGraph from 'react-chartist';
 
class Graph extends React.Component {
  render() {
 
    var simpleLineChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [1, 3, 4, 5, 6]
      ]
    }
    var lineChartOptions = {
      low: 0,
      showArea: true
    }
 
    return (
      <div>
        <ChartistGraph data={simpleLineChartData} options={lineChartOptions} type={'Line'} />
      </div>
    )
  }
}

export default Graph;