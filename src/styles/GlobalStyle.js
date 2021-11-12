import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.google.com/specimen/Poppins');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html, body{
    height: 100%;
    background-color: #f1f1f1;
    font-family: 'Poppins', sans-serif;
    margin: 3rem;
}

a{
    text-decoration: none;
    outline: none;
}

input, button{
    border: 0;
    outline: none;
    background: none;
    display: block;
}

button{
    cursor: pointer;
}

ul{
    list-style: none;
}


:root{
    --button-info-color: #3b74f2;
    --button-info-color-hover: #2d67e6;
    --border-color: #f1f1f1;
    --white: #fff;
    --primary-1: #00708d;

    --dark-warning: #ffd336;
    --dark-danger: #de323c;
    --light-green: #9efd9e;
    --dark-green: #10943c;

    --gray-1: #38434b;
    --gray-2: #59646d;
    --gray-3: #a6acb0;
    --gray-4: #ebeced;
    --gray-5: #d0d0d0;
}
`;
