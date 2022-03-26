import React, { useState } from "react";

export default ({ date }) => {

    function parseDate() {
        const [year, month] = date.date.split('-');
        const arrayMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return `${arrayMonth[month - 1]} ${year}`;
    }

    return (
        <div className="month_and_hours">
            <h4>Краткая статистика</h4>
            <div className="name_month">
                {parseDate()}
            </div>
            <div className="amount_hours">
                {date.hours ? date.hours : 0} часов
            </div>
        </div>
    )
}