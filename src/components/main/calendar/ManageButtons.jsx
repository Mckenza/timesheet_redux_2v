import React from "react";
import { connect } from "react-redux";
import { changeTypeWork, changeAction, savetimes } from "../../../redux/redux_for_calendar/calendarAction";

const ManageButtons = ({ params, changeTypeWork, changeAction, savetimes, calendarData }) => {

    function changeType(e) {
        const parantElement = e.target.parentNode;
        for (let item of parantElement.children) {
            item.classList.remove('colorChange');
        }
        e.target.classList.add('colorChange');
        changeTypeWork(e.target.name);
    }

    function changeAct() {
        savetimes(calendarData.infoEmpl.id, calendarData.dataMonth, params);
    }

    return (
        <div className="manage_buttons">
            <div className="type_work">
                <h4>Тип деятельности</h4>
                <button name="mainWork" onClick={changeType}>Основная</button>
                <button name="subWork" onClick={changeType}>Заместительство</button>
                <button name="nightWork" onClick={changeType}>Дежурство</button>

            </div>
            <div className="edit_calendar">
                <h4>Управление</h4>
                <button name="edit" onClick={(e) => changeAction(e.target.name)}>Редактировать</button>
                <button name="save" onClick={changeAct}>Сохранить</button>
                <button name="cancel" onClick={() => {}}>Отменить</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    changeTypeWork,
    changeAction,
    savetimes,
}

const mapStateToProps = state => {
    return {
        calendarData: state.calendar,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageButtons);