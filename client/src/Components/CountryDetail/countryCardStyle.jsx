import styled from 'styled-components'

export const CountryDetailStyle = styled.div`

    background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/257-jira-0018-eye.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=d59b4ad75062808458cb982513570dbb');
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size:cover;
    opacity:0.8;

    img{
        width:300px;
        height:200px;
        border-radius: 10px;
    };

    .generalInfo{
        margin-top:30px;
        background-color:white;
        width:250px;
        height:170px;
        margin-left: 340px;
        font-size:10px;
        padding:10px;
        border-radius: 10px;
        border: 4px solid #000814;
        color:#000814;
        opacity:0.8;
    };

    .activity{
        margin-top:20px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        background-color:white;
        width:250px;
        height:20px;
        margin-left: 340px;
        font-size:13px;
        padding:10px;
        border-radius: 10px;
        border: 4px solid #000814;
        color:#000814;
        opacity:0.8;
    };

    .activities{
        display:flex;
        margin-top:5px ;
        justify-content: space-around;
        flex-wrap:wrap;
          
        .cards{
            margin-top:20px;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            background-color:white;
            width:110px;
            height:100px;
            padding:10px;
            border-radius: 10px;
            border: 4px solid #000814;
            color:#000814;
            margin-top:10px;
            opacity:0.8;

            .name{
            font-size:15px;
            margin:0px;
            };

            .info{
                font-size:10px
            };
        };
    };
`