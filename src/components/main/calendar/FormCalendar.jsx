import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeAction, editTime, savetimes } from "../../../redux/redux_for_calendar/calendarAction";
import DaysWeek from "./DaysWeek";
import ItemCalendar from "./ItemCalendar";

function createFormCalendar(date) {
    const [year, month] = date.split('-');
    // узнаем кол-во дней в месяце и номер дня в неделе
    const objDate = new Date(year, month, 0);
    const amountDays = objDate.getDate();
    const lastDayWeek = objDate.getDay() ? objDate.getDay() : 7;
    // Узнаем номер первого дня месяца
    const objDateFirstDay = new Date(year, month - 1, 1);
    const firstDayWeek = objDateFirstDay.getDay() ? objDateFirstDay.getDay() : 7;

    const arrayDays = [];
    for (let i = 0; i < firstDayWeek - 1; i++) {
        arrayDays.push({
            typeDay: 'blank',
        });
    }

    for (let i = 0; i < amountDays; i++) {
        arrayDays.push({
            typeDay: 'normal',
            numberDay: i + 1,
        });
    }


    for (let i = 7; i > lastDayWeek; i--) {
        arrayDays.push({
            typeDay: 'blank'
        });
    }

    return arrayDays;
}
// params - id and yearmonth 
// dataMonth - state with working days and hours

const FormCalendar = ({ params, dataMonth, manage, changeAction, savetimes }) => {

    const [viewCalendar, setViewCalendar] = useState([...createFormCalendar(params.yearmonth)]);

    return (
        <div className="calendar">
            <DaysWeek />
            {
                viewCalendar.map((item, index) => {
                    let hours;
                    if (item.typeDay === 'normal') {
                        if (`day_${item.numberDay}` in dataMonth) {
                            hours = dataMonth[`day_${item.numberDay}`];
                        } else {
                            hours = 'noHours';
                        }
                    } else {
                        hours = 'blank';
                    }

                    return <ItemCalendar item={item} hours={hours} key={index} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //manage: state.calendar.manage,
        dataMonth: state.calendar.dataMonth,
    }
}

const mapDispatchToProps = {
    changeAction,
    savetimes,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCalendar);





/*
function createFormCalendar(date, infoDate) {
    //console.log(infoDate)
    const [year, month] = date.split('-');
    // узнаем кол-во дней в месяце и номер дня в неделе
    const objDate = new Date(year, month, 0);
    const amountDays = objDate.getDate();
    const lastDayWeek = objDate.getDay() ? objDate.getDay() : 7;
    // Узнаем номер первого дня месяца
    const objDateFirstDay = new Date(year, month - 1, 1);
    const firstDayWeek = objDateFirstDay.getDay() ? objDateFirstDay.getDay() : 7;

    const arrayDays = [];
    for (let i = 0; i < firstDayWeek - 1; i++) {
        arrayDays.push({ typeDay: 'blank' });
    }

    for (let i = 0; i < amountDays; i++) {
        if (`day_${i + 1}` in infoDate) {
            arrayDays.push({
                typeDay: 'normal',
                numberDay: i + 1,
                dayInfo: {
                    ...infoDate[`day_${i + 1}`]
                }
            });
        } else {
            arrayDays.push({
                typeDay: 'normal',
                numberDay: i + 1,
                dayInfo: {
                    empty: true,
                }
            });
        }
    }

    for (let i = 7; i > lastDayWeek; i--) {
        arrayDays.push({ typeDay: 'blank' });
    }

    return arrayDays;
}
*/