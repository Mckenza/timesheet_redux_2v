import { saveAllData } from "../components/local-storage/dataFromLocalStorage";
import { SAVE_MONTH } from "./types";

export function saveMonth(data){
    return dispatch => {
        try{
            const bufObj = {
                [`${data.date.year}-${data.date.month}`]: data.info,
            }
            saveAllData(`data_tables_empl_${data.id}`, bufObj);
            dispatch({
                type: SAVE_MONTH,
                payload: data,
            })

            console.log('Создание календаря успешно');
        } catch (e) {
            console.log('Создание календаря провалено', e);
        }
    }
}