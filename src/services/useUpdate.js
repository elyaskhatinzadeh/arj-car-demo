const useUpdate = (setState, field) => {

    const push = (newTag) => {
        setState((prevState) => {
            const updatedTags = [...prevState[field], newTag];
            return { ...prevState, [field]: updatedTags };
        });
    }

    const update = (index, newLabel) => {
        setState((prevState) => {
            const updatedTags = [...prevState[field]];
            updatedTags[index] = newLabel;
            return { ...prevState, [field]: updatedTags };
        });
    }

    const remove = (index) => {
        setState((prevState) => {
            const updatedTags = prevState[field];
            updatedTags.splice(index, 1);
            return { ...prevState, [field]: updatedTags };
        });
    }
    
    return { push, update, remove };
};

export default useUpdate;