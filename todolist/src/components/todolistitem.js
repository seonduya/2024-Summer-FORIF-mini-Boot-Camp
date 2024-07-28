import React,{useContext, useCallback} from "react";

import Delete from '../assets/img/delete.svg'
import Checked from '../assets/img/check.svg'
import Unchecked from '../assets/img/uncheck.svg'

import { TodosContext } from "../store/todoContext";


function TodoItem({item}) {
    
    const {handleDelete, handleEdit}= useContext(TodosContext)
    const {id, value, checked, date} = item;

    const onEditClick = useCallback(() => {
        handleEdit(id);
      }, [id, handleEdit]);
    
      const onDeleteClick = useCallback(() => {
        handleDelete(id);
      }, [id, handleDelete]);
    

    const itemStyles = {
        base: {
          width:'80%',
          height: '100px',
          
          display: 'flex',
          alignItems: 'center',
          gap:'15px',
          padding: '24px 40px ',
          
          borderRadius: '16px',
          boxShadow: '0px 8px 8px 0px rgba(67, 105, 150, 0.10)',
          
        },
        unchecked: {
          color: '#323232',
          backgroundColor: '#FFFFFF',
        },
        checked: {
          color: '#BCBCBC',
          backgroundColor: '#F7F7F7',
          textDecoration: 'line-through',
        },
      };

      const TextBox ={
        flex:1,
        display:'flex',
        flexDirection:'column',
        textAlign:'left',
         gap:'10px'
    }

    const iconStyles = {
        check: { width: '45px', height: '45px', cursor: 'pointer' },
        delete: { width: '35px', height: '35px', cursor: 'pointer'},
      };
    

    return(
        <div className="TodoItem" 
            style={{
                ...itemStyles.base,
                ...(checked ==='true'? itemStyles.checked : itemStyles.unchecked),
            }}>
            <img
                src={checked ==='true' ? Checked: Unchecked}
                style={iconStyles.check}
                onClick={onEditClick}
                alt={checked ==='true' ? '완료':'미완료'}
            />
                    <div style={TextBox}>
                        <p style={{fontSize:'30px',fontWeight: 700}}>{value}</p>
                        <p style={{fontSize:'23px', color:'#BCBCBC'}}>{date}</p>
                    </div>
            <img
                src={Delete}
                style={iconStyles.delete}
                onClick={onDeleteClick}
                alt={'삭제'}
            />   
                
        </div>
        
    );
}

export default TodoItem;
