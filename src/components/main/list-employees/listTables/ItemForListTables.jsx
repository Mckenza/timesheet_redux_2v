import React from "react";

const ItemForListTables = () => {

    return (
        <div className="table_item">
            <div className="date">
                24 февраля 2022
            </div>
            <div className="hours_from_table">
                176 часов
            </div>
            <button className="edit_table"></button>
            <button className="delete_table">&#10006;</button>
        </div>
    )
}

export default ItemForListTables;