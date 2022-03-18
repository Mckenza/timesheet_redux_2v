import React from "react";
import { Link, useParams } from "react-router-dom";

function parseDate(date) {
    const [year, month] = date.split('-');

    const arrayMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return `${arrayMonth[month - 1]} ${year}`;
}

const ItemForListTables = ({ idEmpl, data }) => {

    const params = useParams();

    function goCalendar(){
        document.location = `calendar/${idEmpl}/${data}`;
    }

    return (
        <div className="table_item">
            <div className="date">
                {parseDate(data)}
            </div>
            <div className="hours_from_table">
                176 часов
            </div>
            <Link to={`calendar/${idEmpl}/${data}`}/>
            
            <button className="delete_table">&#10006;</button>
        </div>
    )
}

export default ItemForListTables;