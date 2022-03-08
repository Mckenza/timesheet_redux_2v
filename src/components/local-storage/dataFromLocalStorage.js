/*
function checkNameLocal(nameKey){
    if(!localStorage.getItem(nameKey)){
        return false;
    } else {
        return true;
    }
}
*/
const ARRAY_ID = 'id_for_empl';
const checkNameLocal = nameKey => localStorage.getItem(nameKey) ? true : false;

export function saveLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function removeLocalStorage(key){
    localStorage.removeItem(key);
}

export function saveIdInLocal(id){
    if(!checkNameLocal(ARRAY_ID)){
        localStorage.setItem(ARRAY_ID, JSON.stringify([id]));
    } else {
        const buff = JSON.parse(localStorage.getItem(ARRAY_ID));
        buff.push(id);
        localStorage.setItem(ARRAY_ID, JSON.stringify(buff));
    }
}

export function removeIdFromLocal(id){
    const buff = JSON.parse(localStorage.getItem(ARRAY_ID));
    const newArray = buff.filter(item => Number(item) !== Number(id));
    localStorage.setItem(ARRAY_ID, JSON.stringify(newArray));
}

export function getData(key){
    return JSON.parse(localStorage.getItem(key));
}

export function checkAndCreate(key, data){
    if(!checkNameLocal(key)){
        localStorage.setItem(key, JSON.stringify(data));
        return data;
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
}