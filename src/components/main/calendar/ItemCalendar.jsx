import React from "react";
import { connect } from "react-redux";
import { editTime } from "../../../redux/redux_for_calendar/calendarAction";
import Hours from "./Hours";

const ItemCalendar = ({ item, hours, times, manage, editTime }) => {

    // item - для построения календаря {typeDay: 'bb', numberDay: 'bb'};
    // hours - время для этого компанента


    function saveTimes() {
        if (hours === 'noHours') {
            editTime({
                [`day_${item.numberDay}`]: {
                    [manage.typeWork]: {
                        ...times,
                    }
                }
            })
        } else {
            const buff = {
                ...hours,
                [manage.typeWork]: {
                    ...times,
                }
            };
            editTime({
                [`day_${item.numberDay}`]: {
                    ...buff,
                }
            })
        }
    }

    if (hours === 'blank') {
        return <div className="item_calendar_blank">

        </div>
    }

    return (
        <div className="item_calendar">
            {
                hours === 'noHours'
                    ?
                    <div className="empty_day">
                        Данных еще нет.
                    </div>
                    :
                    <div className="hours_day">
                        {
                            hours.mainWork
                                ?
                                <Hours timesMain={hours.mainWork} type='Основная' />
                                :
                                <div className="empty_time"></div>
                        }
                        {
                            hours.subWork
                                ?
                                <Hours timesMain={hours.subWork} type='Заместительство' />
                                :
                                <div className="empty_time"></div>
                        }
                        {
                            hours.nightWork
                                ?
                                <Hours timesMain={hours.nightWork} type='Дежурство' />
                                :
                                <div className="empty_time"></div>
                        }
                    </div>
            }
            <div className="number_day">{item.numberDay}</div>
            <button onClick={() => { saveTimes() }} className="save_data_about_day"></button>

        </div>
    )
}

// получить стейт времени и передать в функцию выше для сохранения
const mapStateToProps = state => {
    return {
        times: state.calendar.times,
        manage: state.calendar.manage,
    }
}

const mapDispatchToProps = {
    editTime,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCalendar);





/*
    function saveHours() {
        if (manage.action === 'edit') {
            if ('empty' in timesItem) {
                setTimesItem(prev => {
                    delete prev.empty;
                    saveData({
                        [`day_${item.numberDay}`]: {
                            ...prev,
                            [manage.typeWork]: {
                                ...hours,
                            }
                        }
                    })
                    return {
                        ...prev,
                        [manage.typeWork]: {
                            ...hours,
                        }
                    }
                })
            } else {
                setTimesItem(prev => {
                    saveData({
                        [`day_${item.numberDay}`]: {
                            ...prev,
                            [manage.typeWork]: {
                                ...hours,
                            }
                        }
                    })
                    return {
                        ...prev,
                        [manage.typeWork]: {
                            ...hours,
                        }
                    }
                })
            }
        }
    }
    */