import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import "./barChart.css";

const BarChart = ({ width, height, data }) => {
  const chartRef = useRef();

  const initializeChart = () => {
    d3.select(chartRef.current).attr("width", width).attr("height", height);
  };

  const clearChart = () => {
    d3.select(chartRef.current).selectAll("g").remove();
  };

  useEffect(() => {
    initializeChart();
  }, []);

  useEffect(() => {
    clearChart();
    renderChart();
  }, [data]);

  // const handleMouseEnter = (event, data) => {
  //   resetTooltip();
  //   initTooltip();

  //   var tooltipDiv = d3.select("#myTooltip");
  //   tooltipDiv.transition().duration(200).style("opacity", 1);

  //   tooltipDiv
  //     .html(function (d) {
  //       return (
  //         "<p>Total : " +
  //         d.value +
  //         "</p>" +
  //         "<p>Initial invest : " +
  //         d.getInitialInvestment() +
  //         "</p>" +
  //         "<p>Growth : " +
  //         d.getGrowthRate() +
  //         "</p>"
  //       );
  //     })
  //     .style("left", parseFloat(event.pageX) + "px")
  //     .style("cursor", "pointer")
  //     .style("top", function (d) {
  //       return event.pageY - 17 + "px";
  //     });
  // };

  // const handleMouseExit = (event, data) => {
  //   var tooltipDiv = d3.select("#myTooltip");
  //   tooltipDiv.transition().duration(500).style("opacity", 0);
  // };

  // const handleClick = (event, data) => {
  //   var tooltipDiv = d3.select("#myTooltip");
  //   tooltipDiv.transition().duration(200).style("opacity", 1);

  //   tooltipDiv
  //     .style("left", parseFloat(event.pageX) + "px")
  //     .style("cursor", "pointer")
  //     .style("top", function (d) {
  //       return event.pageY - 17 + "px";
  //     });
  // };

  //  render bar chart from incoming data
  const renderChart = () => {
    const yValues = data.map((item) => item.value);
    const xValues = data.map((item) => item.product);
    const svg = d3.select(chartRef.current);

    const margin = 100;
    let width = svg.attr("width") - margin;
    let height = svg.attr("height") - margin;
    const xScale = d3
      .scaleBand()
      .domain(xValues)
      .range([0, width])
      .padding(0.4);
    const yScale = d3.scaleLinear().range([height, 0]);

    const innerGraph = svg
      .append("g")
      .attr("transform", `translate(${margin / 2},${margin / 2})`);

    yScale.domain([0, Math.ceil(d3.max(yValues) / 100) * 100]);

    //   x - axis
    innerGraph
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
    //   y- axis
    innerGraph
      .append("g")
      .attr("transform", `translate(0,0)`)
      .call(
        d3.axisLeft(yScale).tickFormat(function (d) {
          return d + " €";
        })
      );
    // adding bar
    var barGroup = innerGraph
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "bar");
    barGroup
      .append("rect")
      .attr("x", function (d) {
        return xScale(d.product);
      })
      .attr("y", function (d) {
        return yScale(d.value);
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) {
        return height - yScale(d.value);
      })
      .attr("fill", function (d) {
        return d.color;
      })
      .attr("border", "none");
    // .on("mouseover", function (event, d) {
    //   handleMouseEnter(event, d);
    // })
    // .on("click", function (event, d) {
    //   handleClick(event, d);
    // })
    // .on("mouseout", function (event, d) {
    //   handleMouseExit(event, data);
    // });

    barGroup
      .append("text")
      .attr("class", "label")
      .attr("x", function (d) {
        return xScale(d.product) + 20;
      })
      .attr("y", function (d) {
        return yScale(d.value) - 20;
      })
      .attr("dy", ".75em")
      .text(function (d) {
        return d.value + " €";
      });

    // initTooltip();

    // innerGraph
    //   .exit()
    //   .transition()
    //   .duration(300)
    //   .attr("y", (d) => height)
    //   .attr("height", 0)
    //   .remove();
  };

  const initTooltip = () => {
    d3.select("body")
      .data(data)
      .enter()
      .append("div")
      .attr("id", "myTooltip")
      .style("opacity", 0);
  };

  const resetTooltip = () => {
    d3.selectAll("#myTooltip").remove();
  };

  return (
    <div className="investment-chart">
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default BarChart;
