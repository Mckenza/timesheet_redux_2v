import React from "react";
import { connect } from "react-redux";
import InputsForm from "./InputsForm";

function FormAdd({viewAdd}){

    if(!viewAdd){
        return (
            <div style={{display: 'none'}}></div>
        )
    }

    return (
        <div className="form_add_employee">
            <InputsForm/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        viewAdd: state.viewBlocks.viewAddForm,
    }
}

export default connect(mapStateToProps, null)(FormAdd);