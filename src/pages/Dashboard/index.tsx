import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  ComposedChart,
  Line,
  Area
} from 'recharts';

import Select from '@/components/Select';

import * as S from './style';
import { useState } from 'react';

const data = [
  {
    name: 'Sesi',
    totalClassrooms: 40,
    totalClassroomsBlocked: 5
  },
  {
    name: 'Kelvin',
    totalClassrooms: 30,
    totalClassroomsBlocked: 2
  },
  {
    name: 'ETEC',
    totalClassrooms: 60,
    totalClassroomsBlocked: 12
  },
  {
    name: 'ETEC',
    totalClassrooms: 47,
    totalClassroomsBlocked: 3
  },
  {
    name: 'ETEC',
    totalClassrooms: 60,
    totalClassroomsBlocked: 24
  },
  {
    name: 'ETEC',
    totalClassrooms: 20,
    totalClassroomsBlocked: 13
  },
  {
    name: 'ETEC',
    totalClassrooms: 40,
    totalClassroomsBlocked: 7
  },
  {
    name: 'ETEC',
    totalClassrooms: 80,
    totalClassroomsBlocked: 0
  }
];

const data01 = [
  {
    name: 'Sala 1',
    deskCapacity: 40
  },
  {
    name: 'Sala 2',
    deskCapacity: 50
  },
  {
    name: 'Sala 3',
    deskCapacity: 20
  },
  {
    name: 'Sala 4',
    deskCapacity: 25
  },
  {
    name: 'Sala 5',
    deskCapacity: 14
  },
  {
    name: 'Sala 6',
    deskCapacity: 30
  },
  {
    name: 'Sala 6',
    deskCapacity: 30
  },
  {
    name: 'Sala 6',
    deskCapacity: 30
  },
  {
    name: 'Sala 6',
    deskCapacity: 30
  },
  {
    name: 'Sala 6',
    deskCapacity: 30
  },
  {
    name: 'Sala 6',
    deskCapacity: 80
  }
];

const data02 = [
  {
    name: 'Page A',
    designedClassrooms: 10
  },
  {
    name: 'Page B',
    designedClassrooms: 20
  },
  {
    name: 'Page C',
    designedClassrooms: 30
  },
  {
    name: 'Page D',
    designedClassrooms: 4
  },
  {
    name: 'Page E',
    designedClassrooms: 4
  }
];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        fontWeight="500"
        fontSize="1.1rem"
        textAnchor="middle"
        fill="#fc9700"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#fc9700"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="#fc9700"
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill="#fc9700" stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fc9700"
      >{`Cap. Mesas: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <S.Container>
      <S.InfoAndBarChartContainer>
        <S.CardsContainer>
          <S.Card>
            <S.Title>Informações Gerais</S.Title>

            <S.ItemsContainer>
              <S.Item>
                <S.ItemTitle>Colégios:</S.ItemTitle>
                <S.ItemText>30</S.ItemText>
              </S.Item>
              <S.Item>
                <S.ItemTitle>Professores:</S.ItemTitle>
                <S.ItemText>20</S.ItemText>
              </S.Item>
              <S.ItemDetails>
                <S.ItemDetailsContent>
                  <S.ItemTitle>Salas:</S.ItemTitle>
                  <S.ItemText>38</S.ItemText>
                </S.ItemDetailsContent>

                <S.ItemDetailsContent paddingLeft="20px" fontSize="0.7rem">
                  <S.ItemTitle>Desbloqueadas:</S.ItemTitle>
                  <S.ItemText>38</S.ItemText>
                </S.ItemDetailsContent>

                <S.ItemDetailsContent paddingLeft="20px" fontSize="0.7rem">
                  <S.ItemTitle>Bloqueadas:</S.ItemTitle>
                  <S.ItemText>38</S.ItemText>
                </S.ItemDetailsContent>
              </S.ItemDetails>
            </S.ItemsContainer>
          </S.Card>

          <S.Card>
            <S.Title>Colégio</S.Title>
            <Select data={[{ id: 1, name: 'Sesi' }]} hasSmallSize={true} />

            <S.ItemsContainer hasMarginTop>
              <S.Item>
                <S.ItemTitle>Salas ativas:</S.ItemTitle>
                <S.ItemText>38</S.ItemText>
              </S.Item>
              <S.Item>
                <S.ItemTitle>Salas bloqueadas:</S.ItemTitle>
                <S.ItemText>10</S.ItemText>
              </S.Item>
              <S.Item>
                <S.ItemTitle>Capacidade Máxima:</S.ItemTitle>
                <S.ItemText>3800</S.ItemText>
              </S.Item>
            </S.ItemsContainer>
          </S.Card>
        </S.CardsContainer>

        <S.ChartCard>
          <S.Title>Colégio x Salas</S.Title>
          <S.Chart>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar
                  name="Quantidade de salas bloqueadas"
                  dataKey="totalClassroomsBlocked"
                  fill="#fc9700"
                />
                <Bar
                  name="Quantidade total de salas"
                  dataKey="totalClassrooms"
                  fill="#00e88f"
                />
              </BarChart>
            </ResponsiveContainer>
          </S.Chart>
        </S.ChartCard>
      </S.InfoAndBarChartContainer>

      <S.ChartsContainer>
        <S.ChartCard width="40%" minWidth="560px">
          <S.Title>Salas x Capacidade</S.Title>
          <S.Chart>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#00e88f"
                  dataKey="deskCapacity"
                  onMouseEnter={(_, index) => onPieEnter(index)}
                />
              </PieChart>
            </ResponsiveContainer>
          </S.Chart>
        </S.ChartCard>

        <S.ChartCard width="60%">
          <S.Title>Professores x Salas designadas</S.Title>

          <S.Chart>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={data02}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Bar
                  name="Salas Designadas"
                  dataKey="designedClassrooms"
                  barSize={20}
                  fill="#fc9700"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </S.Chart>
        </S.ChartCard>
      </S.ChartsContainer>
    </S.Container>
  );
};

export default Dashboard;
