import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';

export interface IData {
  active: number
  active_diff: number
  confirmed: number
  confirmed_diff: number
  date: string
  deaths: number
  deaths_diff: number
  fatality_rate: number
  last_update: string
  recovered: number
  recovered_diff: number
  region: []
}

interface IHistogram {
  data: IData[],
  setSelectValue: (date: string) => void
  selectValue: string
}

export const Histogram = ({ data, setSelectValue, selectValue }: IHistogram) => {

  const [drillDownData, setDrillDownData] = useState([])
  const [showDrill, setShowDrill] = useState(false)
  const handleClickBar = (data: any) => {
    setDrillDownData(data.region.cities)
    setShowDrill(true)
  }

  const handleChange = (event: any) => {
    setSelectValue(event.target.value);
  }

  return (
    <>
    <div style={{display: 'flex'}}>
      <p style={{marginLeft: 15}}>Filter by</p>
      <select style={{margin: 17}} value={selectValue} onChange={handleChange}>
        <option value="sevenDays">7 days ago</option>
        <option value="oneMonth">1 month ago</option>
      </select>
      </div>

      <BarChart
        width={1500}
        height={800}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="region.province" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmed" onClick={handleClickBar} fill="#8884d8" />
        <Bar dataKey="deaths" onClick={handleClickBar} fill="#82ca9d" />
      </BarChart>

      {showDrill &&
        <ComposedChart
          layout="vertical"
          width={800}
          height={2000}
          data={drillDownData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="deaths" fill="#82ca9d" />
          <Bar dataKey="confirmed" fill="#413ea0" />
        </ComposedChart>
      }
    </>
  );

}
