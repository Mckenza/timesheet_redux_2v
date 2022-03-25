import React from "react";
import { useParams } from "react-router-dom";

const Calendar = () => {

    const params = useParams();
    console.log(params);

    return (
        <div className="wrap_calendar">
            <div className="manage_calendar">
                <div className="info_about_employee">
                    <div className="wrap_name_">
                        <div className="last_name">
                            Буяк
                        </div>
                        <div className="first_name">
                            Евгений
                        </div>
                        <div className="patronymic">
                            Иванович
                        </div>
                    </div>
                    <div className="month_and_hours">
                        <h4>Краткая статистика</h4>
                        <div className="name_month">
                            Январь
                        </div>
                        <div className="amount_hours">
                            176 часов
                        </div>
                    </div>
                </div>
                <div className="enter_time">
                    <h4>Время работы</h4>
                    <h5>Начало рабочего дня</h5>
                    <div className="start_time">
                        <input type="number"></input>
                        <input type="number"></input>
                    </div>
                    <h5>Конец рабочего дня</h5>
                    <div className="finish_time">
                        <input type="number"></input>
                        <input type="number"></input>
                    </div>
                </div>
                <div className="manage_buttons">
                    <div className="type_work">
                        <h4>Тип деятельности</h4>
                        <button>Основная</button>
                        <button>Заместительство</button>
                        <button>Дежурство</button>

                    </div>
                    <div className="edit_calendar">
                        <h4>Управление</h4>
                        <button>Редактировать</button>
                        <button>Сохранить</button>
                        <button>Отменить</button>
                    </div>
                </div>
            </div>
            <div className="calendar">

            </div>
        </div>
    )
}


export default Calendar;