import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../store/reducer'
import { Histogram } from './components/Histogram'

export const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.data)

    const [selectValue, setSelectValue] = useState('sevenDays')

    useEffect(() => {
        const days = selectValue === 'sevenDays' ? 7 : 30;
        let date = new Date();
        const res = date.setTime(date.getTime() - (days * 24 * 60 * 60 * 1000));

        date = new Date(res);

        const year = date.getFullYear()

        let month = (1 + date.getMonth()).toString();
         month = month.length > 1 ? month : '0' + month;

        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        const formattedTime = `${year}-${month}-${day}`
        dispatch(getData(formattedTime))
    }, [selectValue, dispatch])
    return (
        <Histogram data={data.data.data} setSelectValue={setSelectValue} selectValue={selectValue} />
    )
}