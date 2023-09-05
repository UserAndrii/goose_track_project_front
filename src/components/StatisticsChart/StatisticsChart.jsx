import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
} from 'recharts';
import PoppinsFontMedium from '../../fonts/Poppins-Medium.ttf';
import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';
import i18next from 'i18next';

export default function StatisticsChart({
  currentDay,
  currentMonth,
  isLightTheme,
}) {
  const { t } = useTranslation();

  const lightLine = 'rgba(227, 243, 255, 1)';
  const darkLine = 'rgba(227, 243, 255, 0.15)';
  const lightText = '#343434';
  const darkText = '#FFF';

  const [themaLine, setThemaLine] = useState(
    isLightTheme ? lightLine : darkLine
  );
  const [themaText, setThemaText] = useState(
    isLightTheme ? lightText : darkText
  );
  console.log('object :>> ', isLightTheme, themaLine, themaText);
  const [chartWidth, setChartWidth] = useState(860);
  const [chartHeight, setChartHeight] = useState(440);
  const [sizeBar, setSizeBar] = useState(27);
  const [padChart, setPadChart] = useState(40);
  const [padTopChart, setPadTopChart] = useState(40);
  const [padBottomChart, setPadBottomChart] = useState(40);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(18);
  const [fontSizeL, setFontSizeL] = useState(14);
  const [lineHeightL, setLineHeightL] = useState(21);
  const [dataChart, setDataChart] = useState([]);
  const [tasksPosition, setTasksPosition] = useState(-25);
  const [marginBar, setMarginBar] = useState(14);
  const { data: allTasks, refetch } = useGetMonthlyTasksQuery(currentMonth);
  
  useEffect(() => {
    setThemaText(isLightTheme ? lightText : darkText);
    setThemaLine(isLightTheme ? lightLine : darkLine);
  }, [isLightTheme]);

  useEffect(() => {
    refetch();
    const tasks = allTasks ? [...allTasks.data] : [];
    const data = [
      {
        name: t('statChart.todo'),
        uv:
          tasks.length === 0
            ? 0
            : Math.ceil(
                (tasks.filter(task => task.category === 'TODO').length /
                  tasks.length) *
                  100
              ),
        pv:
          tasks.filter(task => task.date === currentDay).length === 0
            ? 0
            : Math.ceil(
                (tasks.filter(
                  task => task.category === 'TODO' && task.date === currentDay
                ).length /
                  tasks.filter(task => task.date === currentDay).length) *
                  100
              ),
      },
      {
        name: t('statChart.inprogress'),
        uv:
          tasks.length === 0
            ? 0
            : Math.ceil(
                (tasks.filter(task => task.category === 'INPROGRESS').length /
                  tasks.length) *
                  100
              ),
        pv:
          tasks.filter(task => task.date === currentDay).length === 0
            ? 0
            : Math.ceil(
                (tasks.filter(
                  task =>
                    task.category === 'INPROGRESS' && task.date === currentDay
                ).length /
                  tasks.filter(task => task.date === currentDay).length) *
                  100
              ),
      },
      {
        name: t('statChart.done'),
        uv:
          tasks.length === 0
            ? 0
            : Math.ceil(
                (tasks.filter(task => task.category === 'DONE').length /
                  tasks.length) *
                  100
              ),
        pv:
          tasks.filter(task => task.date === currentDay).length === 0
            ? 0
            : Math.ceil(
                (tasks.filter(
                  task => task.category === 'DONE' && task.date === currentDay
                ).length /
                  tasks.filter(task => task.date === currentDay).length) *
                  100
              ),
      },
    ];
    setDataChart(data);
  }, [allTasks, currentDay, refetch, t]);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 375) {
        setChartWidth(307);
        setChartHeight(418);
        setSizeBar(22);
        setPadChart(14);
        setPadTopChart(80);
        setPadBottomChart(40);
        setFontSize('12px');
        setLineHeight('16px');
        setFontSizeL('12px');
        setLineHeightL('16px');
        setTasksPosition(0);
        setMarginBar(4);
      } else if (screenWidth <= 767) {
        setChartWidth(307);
        setChartHeight(418);
        setSizeBar(22);
        setPadChart(14);
        setPadTopChart(80);
        setPadBottomChart(40);
        setFontSize('12px');
        setLineHeight('16px');
        setFontSizeL('12px');
        setLineHeightL('16px');
        setTasksPosition(0);
        setMarginBar(4);
      } else if (screenWidth < 1440) {
        setChartWidth(640);
        setChartHeight(424);
        setSizeBar(27);
        setPadChart(32);
        setPadTopChart(64);
        setPadBottomChart(32);
        setFontSize('16px');
        setLineHeight('18px');
        setFontSizeL('14px');
        setLineHeightL('21px');
        setTasksPosition(-16);
        setMarginBar(14);
      } else {
        setChartWidth(860);
        setChartHeight(440);
        setSizeBar(27);
        setPadChart(40);
        setPadTopChart(80);
        setPadBottomChart(40);
        setFontSize('16px');
        setLineHeight('18px');
        setFontSizeL('14px');
        setLineHeightL('21px');
        setTasksPosition(-25);
        setMarginBar(14);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function CustomBar(props) {
    const { x, y, width, height, borderRadius } = props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="url(#pvGradient)"
          rx={borderRadius}
          ry={borderRadius}
        />
      </g>
    );
  }

  function CustomBar1(props) {
    const { x, y, width, height, borderRadius } = props;

    return (
      <g>
        <rect
          x={x + marginBar}
          y={y}
          width={width}
          height={height}
          fill="url(#uvGradient)"
          rx={borderRadius}
          ry={borderRadius}
        />
      </g>
    );
  }
  const renderCustomizedLabel = props => {
    const { x, y, width, value, lineHeight, fontSize } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - radius}
          fill={themaText}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={fontSize}
          fontStyle={'normal'}
          fontWeight={500}
          fontFamily={PoppinsFontMedium}
          lineheight={lineHeight}
        >
          {value}%
        </text>
      </g>
    );
  };
  const renderCustomizedLabel1 = props => {
    const { x, y, width, value, lineHeight, fontSize } = props;
    const radius = 10;

    return (
      <g>
        <text
          x={x + width / 2 + marginBar}
          y={y - radius}
          fill={themaText}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={fontSize}
          fontStyle={'normal'}
          fontWeight={500}
          fontFamily={PoppinsFontMedium}
          lineheight={lineHeight}
        >
          {value}%
        </text>
      </g>
    );
  };
  return (
    <BarChart
      width={chartWidth}
      height={chartHeight}
      data={dataChart}
      margin={{
        top: padTopChart,
        right: padChart,
        left: padChart,
        bottom: padBottomChart,
      }}
      style={{
        borderRadius: 16,
        border: `1px solid ${themaLine}`,
      }}
    >
      <CartesianGrid
        strokeDasharray="0 0"
        vertical={false}
        stroke={themaLine}
        dx={20}
        horizontal={{
          strokeWidth: 1,
        }}
      />

      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tick={{
          dy: 19,
          fill: `${themaText}`,
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '21px',
        }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        domain={[0, 100]}
        tick={{
          fill: `${themaText}`,
          dx: -padChart,
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '150%',
        }}
      >
        <Label
          value={t('statChart.tasks')}
          position="top"
          dx={tasksPosition}
          dy={-24}
          fill={themaText}
          style={{
            fontSize: fontSizeL,
            fontWeight: 600,
            lineHeight: lineHeightL,
          }}
        />
      </YAxis>

      <Bar
        dataKey="pv"
        fill="none"
        shape={<CustomBar borderRadius={8} />}
        barSize={sizeBar}
        style={{ zIndex: 2 }}
      >
        <LabelList
          dataKey="pv"
          content={renderCustomizedLabel}
          lineheight={lineHeight}
          fontSize={fontSize}
        />
      </Bar>
      <Bar
        dataKey="uv"
        barSize={sizeBar}
        fill="none"
        style={{
          zIndex: 2,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        shape={<CustomBar1 borderRadius={8} marginBar={marginBar} />}
      >
        <LabelList
          dataKey="uv"
          content={renderCustomizedLabel1}
          lineheight={lineHeight}
          fontSize={fontSize}
          marginBar={marginBar}
        />
      </Bar>
      <defs>
        <linearGradient id="pvGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 210, 221, 0)" />
          <stop offset="100%" stopColor="#FFD2DD" />
        </linearGradient>
        <linearGradient id="uvGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(62, 133, 243, 0)" />
          <stop offset="100%" stopColor="#3E85F3" />
        </linearGradient>
      </defs>
    </BarChart>
  );
}
