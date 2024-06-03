import { useAuthContext } from "@/Contexts";
import DatePicker, { DayValue } from "@hassanmojab/react-modern-calendar-datepicker"
import moment from "moment";
import React, { useEffect, useState } from 'react'
import { CustomLocale } from "./LocaleCalendar";

type Props = {}

const DatePickerSingle = (props: Props) => {
    const {
        dataFiltro,
        setDataFiltro
    } = useAuthContext();
    const [selectedDay, setSelectedDay] = useState<DayValue>(null);

    const formatInputValue = () => {
        if (!selectedDay) return '';
        return `${('0' + selectedDay.day).slice(-2) + '/' + ('0' + selectedDay.month).slice(-2) + '/' + selectedDay.year}`;
    };
    useEffect(() => {
        if (selectedDay) {
            setDataFiltro(
                moment(
                    selectedDay?.year + '-' + selectedDay?.month + '-' + selectedDay?.day,
                    'YYYY-MM-DD'
                ).toDate()
            );
        }
    }, [selectedDay, setDataFiltro]);
    
    return (
        <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            inputPlaceholder={`${moment(dataFiltro).format('DD/MM/YYYY')}`} // placeholder
            formatInputText={formatInputValue} // format value
            inputClassName="!border-0 outline-none !bg-transparent !text-gray-400 !font-medium md:!text-xs !text-[10px] !px-0" // custom class
            calendarClassName="responsive-calendar"
            shouldHighlightWeekends
            locale={CustomLocale}
        />
    )
}

export default DatePickerSingle