import React from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import {
  BarSeries,
  AreaSeries,
  CandlestickSeries,
  LineSeries,
  MACDSeries
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  EdgeIndicator,
  CurrentCoordinate,
  MouseCoordinateX,
  MouseCoordinateY
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
  MovingAverageTooltip,
  MACDTooltip
} from "react-stockcharts/lib/tooltip";
import { ema, macd, sma } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";

const macdAppearance = {
  stroke: {
    macd: "#0000ff",
    signal: "#00ff00"
  },
  fill: {
    divergence: d => {
      if (d.macd.divergence > 0) {
        return "#bf00ff";
      }
      return "#00ff00";
    }
  }
};

const mouseEdgeAppearance = {
  textFill: "#542605",
  stroke: "#05233B",
  strokeOpacity: 1,
  strokeWidth: 3,
  arrowWidth: 5,
  fill: "#00ff00"
};

class CandleStickChartWithMACDIndicator extends React.Component {
  render() {
    const { type, data: initialData, width, ratio } = this.props;
    const ema26 = ema()
      .id(0)
      .options({ windowSize: 26 })
      .merge((d, c) => {
        d.ema26 = c;
      })
      .accessor(d => d.ema26);

    const ema12 = ema()
      .id(1)
      .options({ windowSize: 12 })
      .merge((d, c) => {
        d.ema12 = c;
      })
      .accessor(d => d.ema12);

    const macdCalculator = macd()
      .options({
        fast: 12,
        slow: 26,
        signal: 9
      })
      .merge((d, c) => {
        d.macd = c;
      })
      .accessor(d => d.macd);

    const smaVolume50 = sma()
      .id(3)
      .options({
        windowSize: 50,
        sourcePath: "volume"
      })
      .merge((d, c) => {
        d.smaVolume50 = c;
      })
      .accessor(d => d.smaVolume50);

    const calculatedData = smaVolume50(
      macdCalculator(ema12(ema26(initialData)))
    );
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      calculatedData
    );

    return (
      <ChartCanvas
        height={600}
        width={width}
        ratio={ratio}
        margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
        type={type}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
      >
        <Chart
          id={1}
          height={400}
          yExtents={[d => [d.high, d.low], ema26.accessor(), ema12.accessor()]}
          padding={{ top: 10, bottom: 20 }}
        >
          <XAxis
            axisAt="bottom"
            orient="bottom"
            showTicks={false}
            outerTickSize={0}
            tickStroke="#FFFFFF"
            stroke="#FFFFFF"
          />
          <YAxis
            axisAt="right"
            orient="right"
            ticks={5}
            tickStroke="#FFFFFF"
            stroke="#FFFFFF"
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
            {...mouseEdgeAppearance}
          />
          <CandlestickSeries
            tickStroke="#FFFFFF"
            stroke="#FFFFFF"
            stroke={d => (d.close > d.open ? "#00ff00" : "#FFFFFF")}
            wickStroke={d => (d.close > d.open ? "#00ff00" : "#FFFFFF")}
            fill={d => (d.close > d.open ? "#00ff00" : "#bf00ff")}
          />
          <LineSeries
            yAccessor={ema26.accessor()}
            stroke={ema26.stroke()}
            stroke="#FFFFFF"
          />
          <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()} />
          <CurrentCoordinate
            yAccessor={ema26.accessor()}
            fill={ema26.stroke()}
            tickStroke="#FFFFFF"
            stroke="#FFFFFF"
          />
          <CurrentCoordinate
            yAccessor={ema12.accessor()}
            fill={ema12.stroke()}
          />
          <EdgeIndicator
            itemType="last"
            orient="right"
            edgeAt="right"
            yAccessor={d => d.close}
            fill={d => (d.close > d.open ? "#bf00ff" : "#f0b3ff")}
            stroke={d => (d.close > d.open ? "#bf00ff" : "#bf00ff")}
            textFill={d => (d.close > d.open ? "#000000" : "#000000")}
            strokeOpacity={1}
            strokeWidth={3}
            arrowWidth={2}
          />
          // #00ff00 // #bf00ff
          <MovingAverageTooltip
            onClick={e => console.log(e)}
            origin={[-38, 15]}
            options={[
              {
                yAccessor: ema26.accessor(),
                type: "EMA",
                stroke: "#ff8533",
                windowSize: ema26.options().windowSize
              },
              {
                yAccessor: ema12.accessor(),
                type: "EMA",
                stroke: "#FFFFFF",
                windowSize: ema12.options().windowSize
              }
            ]}
          />
        </Chart>
        <Chart
          id={2}
          height={150}
          yExtents={[d => d.volume, smaVolume50.accessor()]}
          origin={(w, h) => [0, h - 300]}
        >
          <YAxis
            axisAt="left"
            orient="left"
            ticks={5}
            tickFormat={format(".2s")}
            tickStroke="#FFFFFF"
            stroke="#FFFFFF"
          />

          <MouseCoordinateY
            at="left"
            orient="left"
            displayFormat={format(".4s")}
            {...mouseEdgeAppearance}
          />

          <BarSeries
            yAccessor={d => d.volume}
            fill={d => (d.close > d.open ? "#00e600" : "#bf00ff")}
          />
          <AreaSeries
            yAccessor={smaVolume50.accessor()}
            stroke={smaVolume50.stroke()}
            fill={smaVolume50.fill()}
          />
        </Chart>
        <Chart
          id={3}
          height={150}
          yExtents={macdCalculator.accessor()}
          origin={(w, h) => [0, h - 150]}
          padding={{ top: 10, bottom: 10 }}
        >
          <XAxis
            axisAt="bottom"
            orient="bottom"
            tickStroke="#FFFFFF"
            stroke="#FFFFFF"
          />
          <YAxis
            axisAt="right"
            orient="right"
            ticks={2}
            tickStroke="#FFFFFF"
            stroke="#FFFFFF"
          />

          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeFormat("%Y-%m-%d")}
            rectRadius={5}
            {...mouseEdgeAppearance}
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
            {...mouseEdgeAppearance}
          />

          <MACDSeries yAccessor={d => d.macd} {...macdAppearance} />
          <MACDTooltip
            origin={[-38, 15]}
            yAccessor={d => d.macd}
            options={macdCalculator.options()}
            appearance={macdAppearance}
          />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
    );
  }
}

CandleStickChartWithMACDIndicator.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithMACDIndicator.defaultProps = {
  type: "svg"
};

CandleStickChartWithMACDIndicator = fitWidth(CandleStickChartWithMACDIndicator);

export default CandleStickChartWithMACDIndicator;
// this goes above MACDaveragetool
// <OHLCTooltip
//   origin={[-40, 0]}
//   options={[
//     {
//       yAccessor: ema12.accessor(),
//       type: ema12.type(),
//       stroke: ema12.stroke(),
//       windowSize: ema12.options().windowSize
//     },
//     {
//       yAccessor: ema26.accessor(),
//       type: ema26.type(),
//       stroke: ema26.stroke(),
//       windowSize: ema26.options().windowSize
//     }
//   ]}
// />
