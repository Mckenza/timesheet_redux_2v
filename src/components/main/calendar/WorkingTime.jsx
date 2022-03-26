import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeHours } from "../../../redux/redux_for_calendar/calendarAction";

const WorkingTime = ({ changeHours }) => {

    const [time, setTime] = useState({
        hoursStart: 8,
        minutsStart: 30,
        hoursFinish: 16,
        minutsFinish: 0,
    });

    function changeTime(e) {
        setTime(prev => {
            return {
                ...prev,
                [e.target.name]: Number(e.target.value),
            }
        })
    }

    useEffect(() => {
        changeHours(time);
    }, [time]);

    return (
        <div className="enter_time">
            <h4>Время работы</h4>
            <h5>Начало рабочего дня</h5>
            <div className="start_time">
                <input onChange={changeTime} name="hoursStart" value={time.hoursStart} type="number"></input>
                <input onChange={changeTime} name="minutsStart" value={time.minutsStart} type="number"></input>
            </div>
            <h5>Конец рабочего дня</h5>
            <div className="finish_time">
                <input onChange={changeTime} name="hoursFinish" value={time.hoursFinish} type="number"></input>
                <input onChange={changeTime} name="minutsFinish" value={time.minutsFinish} type="number"></input>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    changeHours,
}

export default connect(null, mapDispatchToProps)(WorkingTime);