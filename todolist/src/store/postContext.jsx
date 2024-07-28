import React, { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext({
    datalist: [],
    handleAdd: () => { },
    handleEdit: () => { },
    handleDelete: () => { },
});

export default function PostsContextProvider({ children }) {
    const [datalist, setDatalist] = useState(() => {
        const savedPosts = localStorage.getItem('datalist');
        return savedPosts ? JSON.parse(savedPosts) : [
            {},  
        ];
    });

    useEffect(() => {
        localStorage.setItem('datalist', JSON.stringify(datalist));
        console.log('datalist변경')
    }, [datalist]);

    function handleAdd(post) {
        // const newId = Math.random().toString()
        // setDatalist((prevPosts) => [
        //     { ...post, id: newId },//id랜덤부여
        //     //{ ...todo, id: newId.toString(), status: 'no' }, 1,2,3 id 부여. 중복현상발생
        //     ...prevPosts,
        // ]);
        // console.log('post added:', post);
        const newId = datalist.length > 0 ? Math.floor(Math.max(...datalist.map(item => Number(item.id)))) + 1 : 1;
        setDatalist((prevPosts) => [
            { ...post, id: newId.toString()}, // 새로운 ID 할당
            ...prevPosts,
        ]);
        console.log('post added:', post);
    }

    function handleEdit(postId,updatedPost) {
        const updatedList = datalist.map(post =>
            post.id === postId ? { ...post, ...updatedPost } : post
        );
        setDatalist(updatedList);
    };

    function handleDelete(postId) {
        const updatedList = datalist.filter(post => post.id !== postId);
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

