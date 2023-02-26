import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from '@/styles/Charts.module.css'
import { useState, useEffect, useRef } from "react";

export default function Chart({ points }) {

    const [options, setOptions] = useState({
        chart: {
            type: 'areaspline',
            styleMode: true,
            backgroundColor: 'transparent',

        },

        title: {
            text: ""
        },

        xAxis: {
            title: {
                text: "Years",
            },
        },

        yAxis: {
            enabled: false,
        },

        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 20,
            style: {
                color: '#000000',
            },
            formatter() {
                return `Amount <strong>$ ${this.y}</strong>`
            }
        },

        legend: {
            enabled: false,
        },

        series: [
            {
                name: 'CAGR',
                data: [100000, 125890, 158482.921, 199514.1492469, 251168.36248692241, 316195.85153478663, 398058.9574971429, 501116.42159315315, 630855.4631436205, 794183.9425515039],
            }
        ],

        credits: {
            enabled: false
        },

    });

    useEffect(() => {
        setOptions(previousState => {
            return ({
                ...previousState, series: {
                    data: points,
                }
            })
        })
    }, points);

    return (
        <div className={styles.chart}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}