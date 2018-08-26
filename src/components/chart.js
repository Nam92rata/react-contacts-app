import React, { Component } from 'react';
import { BarChart } from 'react-easy-chart';
class Chart extends Component{
    render(){
        return (
        <div>
                <BarChart
                    axisLabels={{ x: 'Years', y: 'Percentage' }}
                    axes
                    colorBars
                    height={350}
                    width={650}
                    barWidth={20}
                    // xType={'time'}
                    // tickTimeDisplayFormat={'%a'}
                    // xDomainRange={['1-Jan-15', '20-Jan-15']}
                    data={[
                        { x: '10-Jan-15', y: 20 },
                        { x: '12-Jan-15', y: 10 },
                        { x: '15-Jan-15', y: 33 }
                    ]}
                />
        </div>
    )
    }
    
}
export default Chart