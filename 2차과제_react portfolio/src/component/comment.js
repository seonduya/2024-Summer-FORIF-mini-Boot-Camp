import React,{useState} from "react";

export default function Comment() {

    let comment = '선주는 개발 역량 뿐 아니라 함께 일하기 너후 좋은 동료였습니다. 항상 문제 해결에 적극적이고, 다른 팀원들의 문제에도 발벗고 도움을 주었습니다. 선주와 함께하는 프로젝트는 항상 성과가 좋았습니다. ';

    return <div className='grid-item'>
                <p>{comment}</p>
                <p style={{fontWeight:'800'}}>노인정 팀 우성</p>
            </div>
}