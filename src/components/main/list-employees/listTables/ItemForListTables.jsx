import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteMonth } from "../../../../redux/actionsMonth";

function parseDate(date) {
    const [year, month] = date.split('-');

    const arrayMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return `${arrayMonth[month - 1]} ${year}`;
}

const ItemForListTables = ({ idEmpl, data, deleteMonth }) => {

    const params = useParams();

    

    return (
        <div className="table_item">
            <div className="date">
                {parseDate(data)}
            </div>
            <div className="hours_from_table">
                176 часов
            </div>
            <Link to={`calendar/${idEmpl}/${data}`}/>
            
            <button onClick={() => {deleteMonth({id: idEmpl, idMonth: data})}} className="delete_table">&#10006;</button>
        </div>
    )
}

const mapDispatchToProps = {
    deleteMonth,
}

export default connect(null, mapDispatchToProps)(ItemForListTables);