//정호꺼 : https://github.com/popop25/todolist/blob/main/store/todoContext.jsx
import { createContext, useState, useEffect } from 'react';

export const TodosContext = createContext({
    todolist: [
        {
            id: 1,
            text: '리액트 기초 알아보기',
            checked: true,
        },  
        {
            id: 3,
            text: '잘하고 있...어요',
            checked: false,
            },  
    ],
    handleAdd: () => { },
    handleEdit: () => { },
    handleDelete: () => { },
});

export default function TodosContextProvider({ children }) {
    const [todolist, setTodolist] = useState(() => {
        // 로컬 스토리지 데이터를 가져오기
        const savedTodos = localStorage.getItem('todolist');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todolist));
        console.log('todolist변경')
    }, [todolist]);

    function handleAdd(todo) {
        //const newId = datalist.length + 1;
        setTodolist((prevTodos) => [
            { ...todo, id: Math.random().toString(), status: 'no' },//id랜덤부여
            //{ ...todo, id: newId.toString(), status: 'no' }, 1,2,3 id 부여. 중복현상발생
            ...prevTodos,
        ]);
        console.log('todo added:', todo);
    }

    function handleEdit(id) {
        const updatedList = todolist.map(item =>
            item.id === id ? { ...item, yesno: item.yesno === 'yes' ? 'no' : 'yes' } : item
        );
        setTodolist(updatedList);
    };

    function handleDelete(id) {
        const updatedList = todolist.filter(item => item.id !== id);
        setTodolist(updatedList);
    };

    const todosContext = {
        todolist,
        handleAdd,
        handleDelete,
        handleEdit,
    };

    return (
        <TodosContext.Provider value={todosContext}>
            {children}
        </TodosContext.Provider>
    );
}



// const [datalist, setDatalist] = useState([
//     { id: 1, contents: 'Do the dishes', yesno: 'no' },
//     { id: 2, contents: 'Take out the trash', yesno: 'yes' },
//     { id: 3, contents: 'Mow the lawn', yesno: 'no' },
// ]);