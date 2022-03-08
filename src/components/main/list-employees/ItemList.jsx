import React from "react";
import { connect } from "react-redux";
import { removeItemList } from '../../../redux/actions';

const ItemList = ({ info, removeItemList }) => {

    return (
        <div className='item_list' key={info.id}>
            <div className="info_manage_item">
                <div className="wrap_fio_position">
                    <div className="fio_item">{info.fio}</div>
                    <div className="position_item">{info.position}</div>
                </div>
                <div className="derar_item">{info.depar}</div>
                <div className="wrap_manage_item">
                    <button onClick={() => removeItemList(info.id)}>Удалить</button>
                    <button>Редактировать</button>
                </div>
            </div>
            <div className="list_tables_empl">
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
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeItemList,
}

export default connect(null, mapDispatchToProps)(ItemList);