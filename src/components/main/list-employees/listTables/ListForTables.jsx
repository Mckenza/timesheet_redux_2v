import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadMonths } from "../../../../redux/actionsMonth";
import ItemForListTables from "./ItemForListTables";

const ListForTables = ({idEmpl, listMonth, loadMonths}) => {

    useEffect(() => {
        loadMonths(idEmpl);
        console.log(listMonth)
    }, [])

    return (
        <div className="list_tables_empl">
            <button className="button_left">&#8656;</button>
            <button className="button_right">&#8658;</button>
            <div className="wrap_item_tables">
                {
                    
                }
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    loadMonths,
}

const mapStateToProps = (state) => {
    return {
        listMonth: state.listMonth,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListForTables);