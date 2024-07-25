import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyle = createGlobalStyle`
    ${reset} /* 주로 사용하는 css 초기화 스타일 */
    body{
        background: ${({theme})=> theme.bgColor};
        color: ${({theme})=> theme.textColor};
        position: relative;
        display: ;
        width : 100%;
        height: 100%;
        line-height: ;
        margin: 0 auto;
        font-family:
            "pretendard",
            "NanumSquare";
        word-break: keep-all;
        word-wrap:break-word;
        text-rendering:optimizeLegibility;
        -webkit-font-smoothing: antialiased;

        // white:"#FFFFFF",
        // black:"#323232",
        // navy:"#436996",
        // sky:"#9DCAFF",
        // blue:"#3893FF",

        // whitec:"#FFFFFF",
        // blackc:"#323232",

    }
`;
