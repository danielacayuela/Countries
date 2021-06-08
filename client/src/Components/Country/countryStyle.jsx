import styled from 'styled-components'


export const CountryStyle = styled.div`
    
    width:170px;
    height:110px;
    background-color:white;
    border-radius: 5px;
    border-width: 1px;
    margin:5px;
    opacity:0.8;
    display: flex;
    flex-direction: column;

    h2{
        font-size: 10px;
    };

    h3{
        font-size: 10px;
    };

    img{
        width:60px;
        height:40px;
        margin-left:0px;
        margin-top:0px;
        border-color: #D3D3D3;
        border-style: solid;
        border-width: 0.5px;
        border-radius: 5px;
    };
    
    .firstRow{
        display:flex;
        justify-content: columns;

        .names{
            position:relative;
            justify-content: flex-start;
            width:100px;
            margin-top:15px;
    
            h2{
                justify-content: center;
                font-size: 10px;
            };
    
            h3{
                justify-content: center;
                font-size: 8px;
            };
        };
    };
    
    button {
        justify-content: center;
        border-radius: round;
        width:50px;
        height:15px;
        font-size: 6px;
        background-color:#0a1128;
        color:white;
        font-weight: 200;
        border-color:transparent;
        border-radius: 10px;
    };

    button:hover {
        justify-content: center;
        border-radius: round;
        width:60px;
        height:20px;
        font-size: 5px;
        font-size: 8px;
    };
`