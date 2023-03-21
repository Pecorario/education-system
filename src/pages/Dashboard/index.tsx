import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector
} from 'recharts';

import axios from 'axios';
import api from '@/services/api';

import Select from '@/components/Select';
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';

import * as S from './style';

interface GeneralInfo {
  totalSchools: number;
  totalTeachers: number;
  totalClassrooms: number;
  blockedClassrooms: number;
  unblockedClassrooms: number;
}

interface ClassroomsInfo {
  totalCapacity: number;
  blockedClassrooms: number;
  unblockedClassrooms: number;
}

const renderActiveShape = (props: any) => {
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
        fontSize="14px"
        fill="#fc9700"
      >{`Cap. Mesas: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        fontSize="12px"
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tableSchoolId, setTableSchoolId] = useState(0);
  const [chartSchoolId, setChartSchoolId] = useState(0);

  const [schools, setSchools] = useState([]);
  const [classrooms, setClassrooms] = useState([]);

  const [generalInfoData, setGeneralInfoData] = useState<GeneralInfo>();
  const [classroomsBySchoolData, setClassroomsBySchool] =
    useState<ClassroomsInfo>();

  const [schoolsData, setSchoolsData] = useState([]);
  const [teachersData, setTeachersData] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  const onPieEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleLoadSchools = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/schools');

      setTableSchoolId(data[0].id);
      setChartSchoolId(data[0].id);

      setSchools(data);
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          return enqueueSnackbar(
            error.response?.data.message || 'Houve um erro inesperado',
            {
              variant: 'error',
              autoHideDuration: 2000
            }
          );
        }
      }

      return enqueueSnackbar('Houve um erro inesperado', {
        variant: 'error',
        autoHideDuration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadClassroomsBySchoolId = async () => {
    try {
      if (chartSchoolId !== 0) {
        setIsLoading(true);
        const { data } = await api.get(`/schools/${chartSchoolId}`);

        setClassrooms(data.classrooms);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          return enqueueSnackbar(
            error.response?.data.message || 'Houve um erro inesperado',
            {
              variant: 'error',
              autoHideDuration: 2000
            }
          );
        }
      }

      return enqueueSnackbar('Houve um erro inesperado', {
        variant: 'error',
        autoHideDuration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadClassroomsInfoBySchoolId = async () => {
    try {
      if (tableSchoolId !== 0) {
        setIsLoading(true);
        const { data } = await api.get(
          `/dashboard/classrooms-info/${tableSchoolId}`
        );

        setClassroomsBySchool(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          return enqueueSnackbar(
            error.response?.data.message || 'Houve um erro inesperado',
            {
              variant: 'error',
              autoHideDuration: 2000
            }
          );
        }
      }

      return enqueueSnackbar('Houve um erro inesperado', {
        variant: 'error',
        autoHideDuration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadGeneralInfo = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/dashboard/general-info');

      setGeneralInfoData(data);
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          return enqueueSnackbar(
            error.response?.data.message || 'Houve um erro inesperado',
            {
              variant: 'error',
              autoHideDuration: 2000
            }
          );
        }
      }

      return enqueueSnackbar('Houve um erro inesperado', {
        variant: 'error',
        autoHideDuration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadSchoolsData = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/dashboard/schools-data');

      setSchoolsData(data);
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          return enqueueSnackbar(
            error.response?.data.message || 'Houve um erro inesperado',
            {
              variant: 'error',
              autoHideDuration: 2000
            }
          );
        }
      }

      return enqueueSnackbar('Houve um erro inesperado', {
        variant: 'error',
        autoHideDuration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadTeachersData = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/dashboard/teachers-data');

      setTeachersData(data);
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          return enqueueSnackbar(
            error.response?.data.message || 'Houve um erro inesperado',
            {
              variant: 'error',
              autoHideDuration: 2000
            }
          );
        }
      }

      return enqueueSnackbar('Houve um erro inesperado', {
        variant: 'error',
        autoHideDuration: 2000
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoadSchools();
    handleLoadClassroomsBySchoolId();
    handleLoadClassroomsInfoBySchoolId();
    handleLoadGeneralInfo();
    handleLoadSchoolsData();
    handleLoadTeachersData();
  }, []);

  useEffect(() => {
    handleLoadClassroomsBySchoolId();
  }, [chartSchoolId]);

  useEffect(() => {
    handleLoadClassroomsInfoBySchoolId();
  }, [tableSchoolId]);

  return (
    <>
      {isLoading && <Loading />}

      <S.Container>
        <S.InfoAndBarChartContainer>
          <S.CardsContainer>
            <S.Card>
              {generalInfoData ? (
                <>
                  <S.Title>Informações Gerais</S.Title>

                  <S.ItemsContainer>
                    <S.Item>
                      <S.ItemTitle>Colégios:</S.ItemTitle>
                      <S.ItemText>{generalInfoData?.totalSchools}</S.ItemText>
                    </S.Item>
                    <S.Item>
                      <S.ItemTitle>Professores:</S.ItemTitle>
                      <S.ItemText>{generalInfoData?.totalTeachers}</S.ItemText>
                    </S.Item>
                    <S.ItemDetails>
                      <S.ItemDetailsContent>
                        <S.ItemTitle>Salas:</S.ItemTitle>
                        <S.ItemText>
                          {generalInfoData?.totalClassrooms}
                        </S.ItemText>
                      </S.ItemDetailsContent>

                      <S.ItemDetailsContent
                        paddingLeft="20px"
                        fontSize="0.7rem"
                      >
                        <S.ItemTitle>Desbloqueadas:</S.ItemTitle>
                        <S.ItemText>
                          {generalInfoData?.unblockedClassrooms}
                        </S.ItemText>
                      </S.ItemDetailsContent>

                      <S.ItemDetailsContent
                        paddingLeft="20px"
                        fontSize="0.7rem"
                      >
                        <S.ItemTitle>Bloqueadas:</S.ItemTitle>
                        <S.ItemText>
                          {generalInfoData?.blockedClassrooms}
                        </S.ItemText>
                      </S.ItemDetailsContent>
                    </S.ItemDetails>
                  </S.ItemsContainer>
                </>
              ) : (
                <NotFound />
              )}
            </S.Card>

            <S.Card>
              <S.Title>Colégio</S.Title>
              {classroomsBySchoolData ? (
                <>
                  <Select
                    data={schools}
                    hasSmallSize={true}
                    value={tableSchoolId}
                    onChange={e => setTableSchoolId(Number(e.target.value))}
                  />

                  <S.ItemsContainer hasMarginTop>
                    <S.Item>
                      <S.ItemTitle>Salas desbloqueadas:</S.ItemTitle>
                      <S.ItemText>
                        {classroomsBySchoolData?.unblockedClassrooms || '-'}
                      </S.ItemText>
                    </S.Item>
                    <S.Item>
                      <S.ItemTitle>Salas bloqueadas:</S.ItemTitle>
                      <S.ItemText>
                        {classroomsBySchoolData?.blockedClassrooms}
                      </S.ItemText>
                    </S.Item>
                    <S.Item>
                      <S.ItemTitle>Capacidade Máxima:</S.ItemTitle>
                      <S.ItemText>
                        {classroomsBySchoolData?.totalCapacity}
                      </S.ItemText>
                    </S.Item>
                  </S.ItemsContainer>
                </>
              ) : (
                <NotFound />
              )}
            </S.Card>
          </S.CardsContainer>

          <S.ChartCard>
            <S.Title>Colégio x Salas</S.Title>
            <S.Chart>
              {schoolsData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={schoolsData}
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
                    <Bar
                      name="Quantidade de salas bloqueadas"
                      dataKey="totalBlockedClassrooms"
                      fill="#fc9700"
                    />
                    <Bar
                      name="Quantidade total de salas"
                      dataKey="totalClassrooms"
                      fill="#00e88f"
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <NotFound />
              )}
            </S.Chart>
          </S.ChartCard>
        </S.InfoAndBarChartContainer>

        <S.ChartsContainer>
          <S.ChartCard width="40%" minWidth="560px">
            <S.TitleContainer>
              <S.Title>Salas x Capacidade</S.Title>
              {schools.length > 0 && (
                <Select
                  width="30%"
                  data={schools}
                  value={chartSchoolId}
                  hasSmallSize={true}
                  onChange={e => setChartSchoolId(Number(e.target.value))}
                />
              )}
            </S.TitleContainer>

            <S.Chart>
              {classrooms.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShape}
                      data={classrooms}
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
              ) : (
                <NotFound />
              )}
            </S.Chart>
          </S.ChartCard>

          <S.ChartCard width="60%" paddingBottom="0">
            <S.Title>Professores x Salas designadas</S.Title>

            <S.Chart span="none">
              {teachersData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={teachersData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar
                      name="Salas Designadas"
                      dataKey="designedClassrooms"
                      fill="#fc9700"
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <NotFound />
              )}
            </S.Chart>
            {/* <S.Chart>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={teachersData}
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
                  barSize={10}
                  fill="#fc9700"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </S.Chart> */}
          </S.ChartCard>
        </S.ChartsContainer>
      </S.Container>
    </>
  );
};

export default Dashboard;
