import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from '@/styles/Charts.module.css';
import { useState, useEffect, useRef } from "react";

function DoughnutChart({ initialInvestment, finalInvestment }) {

  const [option, setOptions] = useState({
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
      }
    },
    tooltip: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 20,
      style: {
        color: '#000000',
      },
      formatter() {
        return `${this.key} <strong>$ ${this.y}</strong>`
      }
    },
    series: [{
      data: null,
    }],
    credits: {
      enabled: false,
    }
  });

  useEffect(() => {
    setOptions(previousOptions => {
      return ({
        ...previousOptions,
        series: [{
          data: [
            {
              name: 'Final investment',
              y: finalInvestment,
              color: '#0161FF',
              showInLegend: false,
            },
            {
              name: 'Initial investment',
              y: initialInvestment,
              color: '#2ecc71',
              showInLegend: false,
            }
          ]
        }],
      })
    })
  }, [initialInvestment, finalInvestment])

  return (
    <div className={styles.chart}>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  )
}

export default DoughnutChart;