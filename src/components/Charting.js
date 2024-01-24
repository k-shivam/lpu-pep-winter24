import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const Charting = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 10 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 20 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 30 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 40 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 50 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 100 },
    ],
    series: [{ type: 'pie', angleKey: 'avgTemp', legendItemKey: 'month' }],
  });

  return (
    <AgChartsReact options={chartOptions} />
  );
}

export default Charting