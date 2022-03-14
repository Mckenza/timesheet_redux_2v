import { saveLocalStorage, removeLocalStorage, saveIdInLocal, removeIdFromLocal, getData } from "../components/local-storage/dataFromLocalStorage";
import { ADD_ITEM_LIST, CLOSE_ADD_MONTH, CLOSE_FORM_ADD, LOAD_ITEMS_LIST, OPEN_ADD_MONTH, OPEN_FORM_ADD, REMOVE_ITEM_LIST } from "./types";

export function addItemList(data){
    return dispatch => {
        try{
            saveLocalStorage(`data_empl_num_${data.id}`, data);
            saveIdInLocal(data.id);
            saveLocalStorage('next_id', data.id + 1);
            dispatch({
                type: ADD_ITEM_LIST,
                payload: data,
            })
            console.log('сохранение успешно');
        } catch(e){
            console.log('сохранение провалено', e);
        } 
    }
}

export function removeItemList(id){
    return dispatch => {
        try{
            removeLocalStorage(`data_empl_num_${id}`);
            removeIdFromLocal(id);
            dispatch({
                type: REMOVE_ITEM_LIST,
                payload: id,
            })
            console.log('Удаление успешно');
        } catch(e){
            console.log('Удаление провалено', e);
        }
    }
}

export function loadDataList(){
    return dispatch => {
        try{
            const data = getData('id_for_empl').map(id => {
               return getData(`data_empl_num_${id}`); 
            });
            dispatch({
                type: LOAD_ITEMS_LIST,
                payload: data,
            })
        } catch(e){
            console.log('Ошибка загрузки списка', e);
        }
    }
}

export function viewAddMonth(){
    return {
        type: OPEN_ADD_MONTH,
    }
}

export function closeAddMonth(){
    return {
        type: CLOSE_ADD_MONTH,
    }
}

export function viewAddForm(){
    return {
        type: OPEN_FORM_ADD,
    }
}

export function closeAddForm(){
    return {
        type: CLOSE_FORM_ADD,
    }
}

