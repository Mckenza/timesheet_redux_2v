import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { closeAddMonth } from "../../../redux/actions";
import { saveMonth } from "../../../redux/actionsMonth";

const InputsMonthData = ({ closeAddMonth, saveMonth }) => {

    const [year, setYear] = useState(() => {
        const time = new Date(Date.now());
        return time.getFullYear();
    })
    const [month, setMonth] = useState(1);
    const monthsButtons = useRef(null);

    function changeColor(e) {
        for (let item of monthsButtons.current.children) {
            item.classList.remove('colorBack');
        }
        e.target.classList.toggle('colorBack');

        setMonth(Number(e.target.getAttribute('number')));
    }

    useEffect(() => {
        monthsButtons.current.addEventListener('click', changeColor);
        
        return () => {
            window.removeEventListener('click', changeColor);
        }
    }, [])

    useEffect(() => {
        console.log(month);
    }, [month]);

    function justPackingData(){
        const id = JSON.parse(localStorage.getItem('currentIdMonthList'));
        return {
            id,
            date: {
                month,
                year,
            },
            info: {},
        }
    }

    return (
        <div className="inputs_month_data">
            <h2>ГОД И МЕСЯЦ</h2>
            <div className="year_for_table">
                
                <input value={year} type="number" onChange={(e) => { setYear(e.target.value) }} placeholder='Год'></input>
            </div>
            <div ref={monthsButtons} className="months_buttons">
                <button number='1'>Январь</button>
                <button number='2'>Февраль</button>
                <button number='3'>Март</button>
                <button number='4'>Апрель</button>
                <button number='5'>Май</button>
                <button number='6'>Июнь</button>
                <button number='7'>Июль</button>
                <button number='8'>Август</button>
                <button number='9'>Сентябрь</button>
                <button number='10'>Октябрь</button>
                <button number='11'>Ноябрь</button>
                <button number='12'>Декабрь</button>
            </div>
            <div className="manage_buttons">
                <button onClick={() => { closeAddMonth() }}>Отмена</button>
                <button onClick={() => { saveMonth(justPackingData()) }}>Добавить</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    closeAddMonth,
    saveMonth,
}

export default connect(null, mapDispatchToProps)(InputsMonthData);