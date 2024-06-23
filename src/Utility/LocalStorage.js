const getFromLocalStorage = () => {
    const storePdId = localStorage.getItem("storePdId");
    if (storePdId) {
        return JSON.parse(storePdId)
    } else {
        return []
    }
}

const addToLocalStorage = id => {
    const prevStored = getFromLocalStorage();
    const exists = prevStored.find(prevId => prevId === id);
    if (!exists) {
        prevStored.push(id)
        localStorage.setItem("storePdId",JSON.stringify(prevStored))
    }
}





export { addToLocalStorage, getFromLocalStorage}