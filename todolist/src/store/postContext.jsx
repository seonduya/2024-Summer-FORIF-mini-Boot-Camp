import React, { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext({
    datalist: [
            {
                id: '1',
                contents: 'abc',
                yesno: 'yes',
            },  
    ],
    handleAdd: () => { },
    handleEdit: () => { },
    handleDelete: () => { },
});

export default function PostsContextProvider({ children }) {
    const [datalist, setDatalist] = useState(() => {
        const savedPosts = localStorage.getItem('datalist');
        return savedPosts ? JSON.parse(savedPosts) : [
            {
                id: '1',
                contents: 'abc',
                yesno: 'yes',
            },  
        ];
    });

    useEffect(() => {
        localStorage.setItem('datalist', JSON.stringify(datalist));
        console.log('datalist변경')
    }, [datalist]);

    function handleAdd(post) {
        //const newId = datalist.length + 1;
        setDatalist((prevPosts) => [
            { ...post, id: Math.random().toString(), status: 'no' },//id랜덤부여
            //{ ...todo, id: newId.toString(), status: 'no' }, 1,2,3 id 부여. 중복현상발생
            ...prevPosts,
        ]);
        console.log('post added:', post);
    }

    function handleEdit(id) {
        const updatedList = datalist.map(item =>
            item.id === id ? { ...item, yesno: item.yesno === 'yes' ? 'no' : 'yes' } : item
        );
        setDatalist(updatedList);
    };

    function handleDelete(id) {
        const updatedList = datalist.filter(item => item.id !== id);
        setDatalist(updatedList);
    };

    const contextValue = {
        datalist,
        handleAdd,
        handleDelete,
        handleEdit,
    };

    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    );
}



// const [datalist, setDatalist] = useState([
//     { id: 1, contents: 'Do the dishes', yesno: 'no' },
//     { id: 2, contents: 'Take out the trash', yesno: 'yes' },
//     { id: 3, contents: 'Mow the lawn', yesno: 'no' },
// ]);