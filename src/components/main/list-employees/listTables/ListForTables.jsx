import React from "react";
import ItemForListTables from "./ItemForListTables";

const ListForTables = () => {

    return (
        <div className="list_tables_empl">
            <button className="button_left">&#8656;</button>
            <button className="button_right">&#8658;</button>
            <div className="wrap_item_tables">
                <ItemForListTables />
                <ItemForListTables />
                <ItemForListTables />
                <ItemForListTables />
            </div>

        </div>
    )
}

export default ListForTables;