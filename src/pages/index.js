import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import styles from '@/styles/Home.module.css';
import Input from '../Components/Input.jsx';
import LineChart from '../Components/LineChart.jsx';
import DoughnutChart from '@/Components/DoughnutChart.jsx';
import CollapsibleBox from '@/Components/CollapsibleBox.jsx';

import { FaChartPie, FaChartLine } from 'react-icons/fa';
import { MdOutlineShowChart } from 'react-icons/md';




export default function Home() {

  const [initialAmount, setInitialAmount] = useState(100000);
  const [finalAmount, setFinalAmount] = useState(1000000);
  const [years, setYears] = useState(10);

  let CAGR = 25.89;
  const [output, setOutput] = useState(25.89);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([100000, 125890, 158482.921, 199514.1492469, 251168.36248692241, 316195.85153478663, 398058.9574971429, 501116.42159315315, 630855.4631436205, 794183.9425515039]);


  function calculate() {
    CAGR = (Math.pow((finalAmount / initialAmount), (1 / years)) - 1) * 100;
    if (CAGR === Infinity || isNaN(CAGR)) {
      setOutput('-');
    }
    else {
      setOutput(CAGR.toFixed(2));
    }

    calculateGraphPoints();
  }

  function calculateGraphPoints() {
    let points = [];
    let cumulativeAmount = parseFloat(initialAmount);
    for (let i = 0; i <= years; i++) {
      points.push(cumulativeAmount);
      cumulativeAmount = cumulativeAmount + parseFloat(cumulativeAmount * CAGR / 100);
    }
    setGraphPoints(points);
  }




  return (
    <>
      <Head>
        <title>CAGR calculator</title>
        <link rel="icon" href='./logo.png' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" as="font" data-href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap" />
        <meta name="description" content="CAGR Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <Image className={styles.image} src='/app-background.png' width={1080} height={500}></Image>
      <main >

        <div>
          <div className={styles.heading}><span className={styles.bluecolor}>Compound Annual Growth Rate</span> Calculator</div>
          <p className={styles.subheading}>CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time. It’s calculated as the average rate of return that would have to be compounded annually to reach the final value from the initial value over the given time period. CAGR is expressed as a percentage and it is useful in comparing the growth of different investments. It provides a more accurate picture of the growth of an investment than simple average returns, as it takes into account the compounding effect of reinvested returns.</p>
        </div>


        <div className={styles.calculatorWrapper}>

          <div className={styles.calculator}>
            {/*wrapper*/}
            <div className={styles.inputWrapper}>
              <div className={styles.input_container}>
                {/*input boxes*/}
                <div>
                  {/*Initial investment block*/}
                  <div>Initial investment</div>
                  <Input
                    id='initialInvestment'
                    type='rupees'
                    min={1000}
                    max={10000000}
                    step={100}
                    value={initialAmount}
                    setValue={setInitialAmount}
                  />
                </div>

                <div>
                  {/*Final investment block*/}
                  <div>Final investment</div>
                  <Input
                    id='finalInvestment'
                    type='rupees'
                    min={1000}
                    max={10000000}
                    step={100}
                    value={finalAmount}
                    setValue={setFinalAmount}
                  />
                </div>

                <div>
                  {/*Duration of investment block*/}
                  <div>Duration of investment(Years)</div>
                  <Input
                    id='years'
                    min={1}
                    max={40}
                    value={years}
                    setValue={setYears}
                  />
                </div>
              </div>

              <div className={styles.control_container}>
                {/*control boxes*/}
                <div className={styles.buttonBorder}>
                  <div className={`${styles.calculate} ${styles.button}`} onClick={calculate}>Calculate</div>
                </div>
              </div>

              <div className={styles.output_box}>
                {/*CARG output*/}
                <div id="CAGR_output">CAGR {(output === '-') ? output : `is ${output}%`}</div>
              </div>
            </div>

            {/* vertical line */}
            <div className={styles.verticalline}></div>

            {/* Charts */}
            <div className={styles.chartContainer}>

              <div className={styles.toggle}>
                <button className={isLineChart ? styles.icon2 : styles.icon1} onClick={() => { setCheck(true) }}><MdOutlineShowChart /></button>
                <button className={isLineChart ? styles.icon1 : styles.icon2} onClick={() => { setCheck(false) }}><FaChartPie /></button>
              </div>

              <div className={styles.chart}>
                {isLineChart ? <LineChart points={graphPoints} /> : <DoughnutChart initialInvestment={initialAmount} finalInvestment={finalAmount} dependency={output} />}
              </div>

            </div>
          </div>

          {/* Side Pannel */}
          <div className={styles.sidePannel}>
            <h3>How to use this calculator?</h3>
            <CollapsibleBox
              heading={'Compound Annual Growth Rate'}
              content={'CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time.'}
            />
            <CollapsibleBox
              heading={'Uses of CAGR'}
              content={'CAGR is the best formula for evaluating how different investments have performed over time.Investors can compare the CAGR to evaluate how well one stock performed against other stocks.'}
            />
            <CollapsibleBox
              heading={'How can CAGR  help me?'}
              content={'CAGR lets you know the compounded returns you earn on an annual basis irrespective of the individual yearly performances of the fund. So you can compare the performance of different investments.'}
            />

          </div>

        </div>

        <div className={styles.faq}>

          <CollapsibleBox
            heading={'What is CAGR?'}
            content={'CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time. It\'s calculated as the average rate of return that would have to be compounded annually to reach the final value from the initial value over the given time period.'}
          />

          <CollapsibleBox
            heading={'Why should I calculate CAGR?'}
            content={'CAGR is expressed as a percentage and it is useful in comparing the growth of different investments. It provides a more accurate picture of the growth of an investment than simple average returns, as it takes into account the compounding effect of reinvested returns. CAGR provides a standardised way to compare the performance of different investments over the same time period, which makes it easier to determine which investments have performed better or worse.'}
          />

          <CollapsibleBox
            heading={'How does the calculator work?'}
            content={'It uses the following logic'}
          />

          <CollapsibleBox
            heading={'What are the advantages of calculating CAGR?'}
            content={
              <ul>
                <li>Future projections: By using the CAGR of an investment, you can make projections about what the future value of your investment might be, based on past performance. This can be helpful in making investment decisions or setting financial goals.</li>
                <li>Investment performance evaluation: CAGR helps you to evaluate the performance of your investment over a specified period of time. It provides a clear picture of the growth or decline of your investment, which can help you make informed decisions about your investments.</li>
                <li>Portfolio analysis: CAGR can be used to analyse the performance of your portfolio as a whole, which can be helpful in making adjustments to your investment strategy.</li>
              </ul>
            }
          />

          <CollapsibleBox
            heading={'How to use CAGR calculator?'}
            content={'FundsIndia CAGR calculator is an intuitive tool that calculates the CAGR easily. Just plug in the Initial, Final Investment values along with the tenure of the investment and FundsIndia Calculator will give you the accurate CAGR of your investment.'}
          />
        </div>

        <div className={styles.relatedCalculators}>
          <h4>Related Calculators</h4>
        </div>
      </main>
    </>
  )
}
