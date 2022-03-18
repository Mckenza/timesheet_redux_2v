import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadMonths } from "../../../../redux/actionsMonth";
import ItemForListTables from "./ItemForListTables";

const ListForTables = ({idEmpl, listMonth, loadMonths}) => {

    const [parseData, setParseData] = useState([]);
    
    function saveData(){
        if(listMonth[`data_tables_empl_${idEmpl}`]){
            const path = `data_tables_empl_${idEmpl}`;
            const keys = Object.keys(listMonth[path]);
            //const buf = keys.map(item => listMonth[path][item]);
            setParseData(keys);
        }
    }

    useEffect(() => {
        saveData();
    }, [listMonth]);


    useEffect(() => {
        loadMonths(idEmpl);
    }, [])

    return (
        <div className="list_tables_empl">
            <button className="button_left">&#8656;</button>
            <button className="button_right">&#8658;</button>
            <div className="wrap_item_tables">
                {
                    parseData.map(((item) => {
                        return <ItemForListTables idEmpl = {idEmpl} data = {item} key = {item}/>
                    }))
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