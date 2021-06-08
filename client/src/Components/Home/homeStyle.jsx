import styled from 'styled-components'

export const HomeStyle = styled.div`

    background-image: url('https://i.pinimg.com/originals/27/28/2b/27282b52cfd66b3d18d768e72bed9e07.jpg');
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    background-repeat:no-repeat;
    margin-bottom:0px;
    margin-top:0px;

    .searchbar{  
        margin-top:5px;
       
        button {
            background-color: #04724d;
            border: none;
            color: white;
            padding: 3px 7px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 10px;
            font-weight: 600;
            border-radius: 3px;
            margin-bottom: 10px;
            margin-left:0px;
        };
    };

    select {
        background-color:white;
        border-radius: 5px;
        background-color: white;
        opacity:0.7;
        border: 2px solid #04724d;
        font-weight: 600;
        color:#000814;
    };

    input {
        background-color: white;
        opacity:0.7;
        border: 2px solid #04724d;
        border-radius: 5px;
        font-weight: 600;
        color:#000814;

        ::placeholder { 
            color: #000814;
          };
    };

    .cards {
        display:flex;
        margin-top:5px ;
        justify-content: space-around;
        flex-wrap:wrap;

        .btn {
            color:#000814;
        };
    };

    .pagination {

        button {
            background-color: #04724d;
            border: none;
            color: white;
            padding: 3px 7px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 10px;
            font-weight: 600;
            border-radius: 3px;
            margin-bottom: 10px;
        };
    };

    p {
        font-weight:600;
    };
`;