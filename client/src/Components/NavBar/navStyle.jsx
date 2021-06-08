import styled from 'styled-components';

export const NavStyle = styled.div`
    background-color:#000814;
    color: white; 
    text-align: center;
    display: flex;
    flex-direction: column;
    height:100px;

    h1 {
        margin-bottom:5px;
    };

    button {
        margin-bottom:30px;
        background-color:transparent;
        border-color:transparent;
        color: white;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        font-weight: 600;
    };

    .links {
        margin-bottom:40px;
    };
`