import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { loadAllAData } from "../../../redux/redux_for_calendar/calendarAction";
import InfoEmpl from "./InfoEmpl";
import ManageButtons from "./ManageButtons";
import ShortInfo from "./ShortInfo";
import WorkingTime from "./WorkingTime";

const Calendar = ({ calendarData, loadAllAData }) => {
    const params = useParams();

    useEffect(() => {
        loadAllAData(params.id, params.yearmonth);
    }, [])

    if (!calendarData.infoEmpl) {
        return (
            <div>
                LOADING DATA......
            </div>
        )
    }

    return (
        <div className="wrap_calendar">
            <div className="manage_calendar">
                <div className="info_about_employee">
                    <InfoEmpl infoEmp = {calendarData.infoEmpl} />
                    <ShortInfo date = {{date: params.yearmonth, hours: calendarData.dataMonth.hours}}/>
                </div>
                <WorkingTime/>
                <ManageButtons/>
            </div>
            <div className="calendar">

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        calendarData: state.calendar,
    }
}

const mapDispatchToProps = {
    loadAllAData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);