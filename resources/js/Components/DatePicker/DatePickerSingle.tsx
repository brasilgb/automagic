import { useAuthContext } from "@/Contexts";
import DatePicker, { DayValue } from "@hassanmojab/react-modern-calendar-datepicker"
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import moment from "moment";
import React, { useEffect, useState } from 'react'
import { CustomLocale } from "./LocaleCalendar";

type Props = {}

const DatePickerSingle = (props: Props) => {
    const {
        setDataFiltro,
        setExecuteFilter,
        dataFiltro
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
            setExecuteFilter(true);
        }
    }, [selectedDay, setDataFiltro]);

    return (
        <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            inputPlaceholder={`${moment(dataFiltro).format("DD/MM/YYYY")}`} // placeholder
            formatInputText={formatInputValue} // format value
            inputClassName="!text-sm !font-bold !bg-gray-50 !rounded-md !shadow-md !border !border-white !text-gray-500" // custom class
            calendarClassName="responsive-calendar"
            shouldHighlightWeekends
            locale={CustomLocale}
        />
    )
}

export default DatePickerSingle