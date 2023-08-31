import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Label,
} from 'recharts';
// import { Container } from './StatisticsChart.styled';
import { useGetMonthlyTasksQuery } from 'redux/tasks/tasksApi';
// import { format, startOfToday } from 'date-fns';

function CustomBar(props) {
  const { fill, x, y, width, height, borderRadius } = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
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
  const { fill, x, y, width, height, borderRadius } = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      <rect
        x={x}
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
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#000"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
        fontStyle={'normal'}
        fontWeight={500}
      >
        {value}%
      </text>
    </g>
  );
};
const data = [
  {
    name: 'To Do',
    uv: 5,
    pv: 10,
  },
  {
    name: 'In Progress',
    uv: 0,
    pv: 0,
  },
  {
    name: 'Done',
    uv: 0,
    pv: 0,
  },
];
export default function StatisticsChart({ currentDay, currentMonth }) {
  const [chartWidth, setChartWidth] = useState(860);
  const [chartHeight, setChartHeight] = useState(440);
  const [sizeBar, setSizeBar] = useState(27);
  const [padChart, setPadChart] = useState(40);
  const [padTopChart, setPadTopChart] = useState(40);
  const [padBottomChart, setPadBottomChart] = useState(40);

  const [dataChart, setDataChart] = useState(data);
  const { data: allTasks, refetch } = useGetMonthlyTasksQuery(currentMonth);
  if (allTasks) console.log('allTasks.data :>> ', allTasks.data);
  useEffect(() => {
    refetch();
    if (allTasks) {
      const tasks = [...allTasks.data];
      if (tasks && tasks.length > 0) {
        const data = [
          {
            name: 'To Do',
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
                      task =>
                        task.category === 'TODO' && task.date === currentDay
                    ).length /
                      tasks.filter(task => task.date === currentDay).length) *
                      100
                  ),
          },
          {
            name: 'In Progress',
            uv:
              tasks.length === 0
                ? 0
                : Math.ceil(
                    (tasks.filter(task => task.category === 'INPROGRES')
                      .length /
                      tasks.length) *
                      100
                  ),
            pv:
              tasks.filter(task => task.date === currentDay).length === 0
                ? 0
                : Math.ceil(
                    (tasks.filter(
                      task =>
                        task.category === 'INPROGRES' &&
                        task.date === currentDay
                    ).length /
                      tasks.filter(task => task.date === currentDay).length) *
                      100
                  ),
          },
          {
            name: 'Done',
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
                      task =>
                        task.category === 'DONE' && task.date === currentDay
                    ).length /
                      tasks.filter(task => task.date === currentDay).length) *
                      100
                  ),
          },
        ];
        setDataChart(data);
      }
    }
  }, [allTasks, currentDay, refetch]);
  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 375) {
        setChartWidth(320);
        setChartHeight(400);
        setSizeBar(22);
        setPadChart(14);
        setPadTopChart(80);
        setPadBottomChart(40);
      } else if (screenWidth <= 768) {
        setChartWidth(335);
        setChartHeight(684);
        setSizeBar(22);
        setPadChart(14);
        setPadTopChart(80);
        setPadBottomChart(40);
      } else if (screenWidth < 1440) {
        setChartWidth(600);
        setChartHeight(424);
        setSizeBar(27);
        setPadChart(32);
        setPadTopChart(64);
        setPadBottomChart(32);
      } else {
        setChartWidth(860);
        setChartHeight(440);
        setSizeBar(27);
        setPadChart(40);
        setPadTopChart(80);
        setPadBottomChart(40);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ResponsiveContainer width={chartWidth} height={chartHeight}>
      <BarChart
        data={dataChart}
        margin={{
          top: padTopChart,
          right: padChart,
          left: padChart,
          bottom: padBottomChart,
        }}
        style={{
          border: '0.8px solid #E3F3FF',
          borderRadius: 16,
        }}
      >
        <CartesianGrid
          strokeDasharray="0 0"
          vertical={false}
          stroke={'#E3F3FF'}
          horizontal={{
            strokeWidth: 1,
          }}
        />

        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ dy: 19 }}
          style={{
            color: '#343434',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '150%',
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tick={{
            dx: -padChart,
            color: '#343434',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '150%',
          }}
        >
          <Label
            value="Tasks"
            position="top"
            dx={-5}
            dy={-24}
            style={{
              color: '#343434',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '150%',
            }}
          />
        </YAxis>

        <Bar
          dataKey="pv"
          fill="none"
          shape={<CustomBar borderRadius={10} />}
          barSize={sizeBar}
          style={{ zIndex: 2 }}
        >
          <LabelList dataKey="pv" content={renderCustomizedLabel} />
        </Bar>
        <Bar
          dataKey="uv"
          barSize={sizeBar}
          fill="none"
          style={{ zIndex: 2 }}
          shape={<CustomBar1 borderRadius={10} />}
        >
          <LabelList dataKey="uv" content={renderCustomizedLabel} />
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
    </ResponsiveContainer>
  );
}
