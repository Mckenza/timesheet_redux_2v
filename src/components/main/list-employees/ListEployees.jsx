import React from "react";
import { connect } from "react-redux";
import ItemList from "./ItemList";

const ListEmployes = ({list}) => {

    return (
        <div className="wrap_list_empl">
            {
                list.map(item => {
                    return (
                        <ItemList info = {item}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.listEmpl,
    }
}

export default connect(mapStateToProps, null)(ListEmployes)