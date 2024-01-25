import React, { useState } from 'react';

import { AgChartsReact } from 'ag-charts-react';
import AuthProvider from './AuthProvider';

const ChartData = () =>{
    const [chartOptions, setChartOptions] = useState({
        data: [
            { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        series: [{ type: 'pie', angleKey: 'avgTemp', legendItemKey: 'month' }],
      });

      return (
        <AgChartsReact options={chartOptions}/>
      )
}

export default AuthProvider(ChartData);

