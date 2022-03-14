import React from "react";
import { connect } from "react-redux";
import InputsMonthData from "./InputsMonthData";

const FormMonth = ({viewMonth}) => {

    if(!viewMonth){
        return (
            <div style={{display: 'none'}}></div>
        )
    }

    return (
        <div className="month_add_form">
            <InputsMonthData/>
        </div>
    )   
}

const mapStateToProps = (state) => {
    return {
        viewMonth: state.viewBlocks.viewAddMonth,
    }
}

export default connect(mapStateToProps, null)(FormMonth);