import React, { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import * as am5percent from "@amcharts/amcharts5/percent";

function PieChart1() {
  useEffect(() => {
    var chartData = {
      2022: [
        { sector: "Сельхозпроизводители", size: 50 },
        { sector: "Агрохолдинги", size: 40 },
        { sector: "Смежные отрасли", size: 70 },
        { sector: "Транспортная логистика", size: 30 },
      ],

      2023: [
        { sector: "Сельхозпроизводители", size: 30 },
        { sector: "Агрохолдинги", size: 25 },
        { sector: "Смежные отрасли", size: 50 },
        { sector: "Транспортная логистика", size: 80 },
      ],
    };

    am5.ready(function () {
      var root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          innerRadius: 120,
          layout: root.verticalLayout,
          maxLabelWidth: 20,
          radius: 60, //---neeed that
        })
      );

      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          categoryField: "sector",
          valueField: "size",

          alignLabels: false,
          inside: true,
        })
      );
      // series.get("colors").set("colors", []);

      series.ticks.template.set("visible", false);
      series.slices.template.set("tooltipText", "{category}: {size}");
      series.labels.template.set("text", "{size}");

      series
        .get("colors")
        .set("colors", [
          am5.color("rgba(43, 54, 30, 1)"),
          am5.color("rgba(131, 145, 89, 1)"),
          am5.color("rgba(234, 240, 228, 1)"),
          am5.color("rgba(174, 142, 73, 1)"),
        ]);

      series.data.setAll([
        { sector: "Сельхозпроизводители", size: 50 },
        { sector: "Агрохолдинги", size: 40 },
        { sector: "Смежные отрасли", size: 70 },
        { sector: "Транспортная логистика", size: 30 },
      ]);

      //   let legend = chart.children.push(
      //     am5.Legend.new(root, {
      //       layout: root.verticalLayout,
      //       y: am5.percent(50),
      //       centerY: am5.percent(50),
      //     })
      //   );
      //   legend.data.setAll(series.dataItems);

      series.appear(1000, 100);

      var label = root.tooltipContainer.children.push(
        am5.Label.new(root, {
          x: am5.p50,
          y: am5.p50,
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0x000000),
          fontSize: 24,
          fontWeight: "bold",
        })
      );

      var currentYear = 2022;
      function getCurrentData() {
        var data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2023) currentYear = 2022;
        return data;
      }
      root._logo.dispose();

      label.set("text", currentYear);
      function loop() {
        var data = getCurrentData();
        for (var i = 0; i < data.length; i++) {
          series.data.setIndex(i, data[i]);
        }
        chart.setTimeout(loop, 4000);
      }
      loop();
    });
  }, []);

  return (
    <div className="w-[243px] h-[243px] z-10 flex-grow" id="chartdiv"></div>
  );
}

export default PieChart1;
