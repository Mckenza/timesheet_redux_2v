import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { removeItemList, viewAddMonth } from '../../../redux/actions';
import { allDeleteTables } from "../../../redux/actionsMonth";
import { saveLocalStorage } from "../../local-storage/dataFromLocalStorage";
import ListForTables from "./listTables/ListForTables";

const ItemList = ({ info, removeItemList, viewAddMonth, allDeleteTables }) => {

    function currentId(){
        saveLocalStorage('currentIdMonthList', info.id);
        viewAddMonth();
    }

    function composeFunc(){
        removeItemList(info.id);
        allDeleteTables(info.id);
    }

    return (
        <div className='item_list' key={info.id}>
            <div className="info_manage_item">
                <div className="wrap_fio_position">
                    <div className="fio_item">{info.fio}</div>
                    <div className="position_item">{info.position}</div>
                </div>
                <div className="derar_item">{info.depar}</div>
                <div className="wrap_manage_item">
                    <button className="btn_delete" onClick={() => composeFunc()}>Удалить</button>
                    <button className="btn_edit">Редактировать</button>
                    <button className="btn_add" onClick={() => currentId()}>Новый месяц</button>
                </div>
            </div>
            <ListForTables idEmpl={info.id}/>
        </div>
    )
}

const mapDispatchToProps = {
    removeItemList,
    viewAddMonth,
    allDeleteTables,
}

export default connect(null, mapDispatchToProps)(ItemList);