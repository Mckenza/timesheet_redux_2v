import React from "react";
import { connect } from "react-redux";
import { changeTypeWork, changeAction } from "../../../redux/redux_for_calendar/calendarAction";

const ManageButtons = ({ changeTypeWork, changeAction }) => {

    function changeType(e) {
        const parantElement = e.target.parentNode;
        for (let item of parantElement.children) {
            item.classList.remove('colorChange');
        }
        e.target.classList.add('colorChange');
        changeTypeWork(e.target.name);
    }

    function changeAct(e) {
        changeAction(e.target.name);
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
                <button name="edit" onClick={changeAct}>Редактировать</button>
                <button name="save" onClick={changeAct}>Сохранить</button>
                <button name="cancel" onClick={changeAct}>Отменить</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    changeTypeWork,
    changeAction,
}

export default connect(null, mapDispatchToProps)(ManageButtons);