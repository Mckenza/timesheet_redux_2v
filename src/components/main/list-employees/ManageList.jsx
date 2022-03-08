import React from "react";
import { connect } from "react-redux";
import { viewAddForm } from "../../../redux/actions";

 function ManageList({viewAddForm}){

    return (
        <div className = 'manage_list'>
            <button className="button_create" onClick={() => viewAddForm()}>Добавить</button>
        </div>
    )
}

const mapDispatchToProps = {
    viewAddForm,
}

export default connect(null, mapDispatchToProps)(ManageList);