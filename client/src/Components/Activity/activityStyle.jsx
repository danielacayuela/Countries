import styled from 'styled-components';

export const ActivityStyle = styled.div`

    background-image: url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F12%2F18%2Fsnow-yoga-in-france-WINTERWILD1220.jpg');
    background-size:cover;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-repeat:no-repeat;

    form{
        text-align: center;
        justify-content: center;
        background-color:#779be7;
        width:600px;
        height: 320px;
        margin:auto;
        border-radius: 15px;
        opacity:0.9;
        color:#0e1730;
        border: 4px solid #000814;

        label{
            font-weight:500;
        };

        .countries{

            option{
                background-color:#bfccf2;
            };
            p{
                font-size:10px;
            };
        };

        .countriesname{
            margin-top:10px;
        };

        select{
            background-color:white;
            border: 1px solid #1c2d61;
            border-radius: 10px;
        };

        input{
            background-color:white;
            border: 1px solid #1c2d61;
            border-radius: 10px;
        };

        button{
            background-color: #0e1730;
            border: none;
            color: white;
            padding: 6px 12px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 10px;
            font-weight: 600;
            border-radius: 10px;
        };
    };
`