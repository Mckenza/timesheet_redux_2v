import React, { useEffect, useState, useRef } from "react";

const InputsMonthData = () => {

    const [month, setMonth] = useState(0);
    const monthsButtons = useRef(null);

    function changeColor(e){
        for(let item of monthsButtons.current.children){
            item.classList.remove('colorBack');
        }
        e.target.classList.toggle('colorBack');
        
        setMonth(Number(e.target.getAttribute('number')));
    }

    useEffect(() => {
        monthsButtons.current.addEventListener('click', changeColor);

        return () => {
            monthsButtons.current.removeEventListener('click', changeColor);
        }
    }, [])

    useEffect(() => {
        console.log(month);
    }, [month])

    return (
        <div className="inputs_month_data">
            <div ref={monthsButtons} className="months_buttons">
                <button number = '1'>Январь</button>
                <button number = '2'>Февраль</button>
                <button number = '3'>Март</button>
                <button number = '4'>Апрель</button>
                <button number = '5'>Май</button>
                <button number = '6'>Июнь</button>
                <button number = '7'>Июль</button>
                <button number = '8'>Август</button>
                <button number = '9'>Сентябрь</button>
                <button number = '10'>Октябрь</button>
                <button number = '11'>Ноябрь</button>
                <button number = '12'>Декабрь</button>
            </div>
            <div className="manage_buttons">
                <button>Отмена</button>
                <button>Добавить</button>
            </div>
        </div>
    )
}

export default InputsMonthData;