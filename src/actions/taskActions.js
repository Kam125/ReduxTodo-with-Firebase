import firebase from '../config/firebaseConfig'
export const addTask = task =>{
    return(dispatch) =>{
        const firestore = firebase.firestore()
        firestore
            .collection("tasks")
            .add({
                ...task,
                date: Date.now()
            })
            .then(() =>{
                dispatch({
                    type: "ADD_TASK",
                    task
                })
            })
            .catch(err =>{
                dispatch({
                    type: "ADD_TASK_ERR",
                    err
                })
            })
    }
}
export const getTasks = task =>{
    return(dispatch) =>{
        const firestore = firebase.firestore()
        firestore
            .collection("tasks")
            
            .onSnapshot((query) =>{
                let tasks =[]
                query.docs.forEach(doc => {
                    tasks.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                dispatch({
                    type: "GET_TASKS",                    
                    tasks
                })
            })
            
    }
}

export const removeTask  = task =>{
    return(dispatch) =>{
        const firestore = firebase.firestore()
        firestore
            .collection("tasks")
            .doc(task.id)
            .delete()
            .then(() =>{
                dispatch({
                    type: "REMOVE_TASK"
                })
            })
            .catch(err =>{
                dispatch({
                    type: "REMOVE_TASK_ERR",
                    err
                })
            })
    }
}

export const toggleChecked  = task =>{
    return(dispatch) =>{
        const firestore = firebase.firestore()
        firestore
            .collection("tasks")
            .doc(task.id)
            .set(
                {
                    ...task,
                    checked: !task.checked
                },
                {
                    merge: true
                }
            )
            .then(() =>{
                dispatch({
                    type: "TOGGLE_CHECKED",
                    task
                })
            })
            .catch(err =>{
                dispatch({
                    type: "TOGGLE_CHECKED_ERR",
                    err
                })
            })
    }
}

