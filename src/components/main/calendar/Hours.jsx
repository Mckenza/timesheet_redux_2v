import React from "react";

export default ({ timesMain, type }) => {

    const {hoursStart: hS, minutsStart: mS, hoursFinish: hF, minutsFinish: mF} = timesMain;

    return (
        <div className="info_time">
            <h4>{type}</h4>
            <div className="start_hours">{`${hS}:${mS}`}</div>
            <div className="finish_hours">{`${hF}:${mF}`}</div>
        </div>
    )
}