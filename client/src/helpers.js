const changeElementClass = (id, elementsClass, classToSet) => {
    const navOptions = document.querySelectorAll(elementsClass);
    navOptions.forEach((e, i) => {
        if(e.id === id){
            e.classList.add(classToSet);
            return;
        }
        e.classList.remove(classToSet);
    })
}

export {changeElementClass}