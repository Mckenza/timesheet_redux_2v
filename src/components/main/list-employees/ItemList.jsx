import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { removeItemList, viewAddMonth } from '../../../redux/actions';
import ListForTables from "./listTables/ListForTables";

const ItemList = ({ info, removeItemList, viewAddMonth }) => {

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
                    <button onClick={() => viewAddMonth()}>Добавить месяц</button>
                </div>
            </div>
            <ListForTables/>
        </div>
    )
}

const mapDispatchToProps = {
    removeItemList,
    viewAddMonth,
}

export default connect(null, mapDispatchToProps)(ItemList);