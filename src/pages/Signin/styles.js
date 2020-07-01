import styled from 'styled-components';

export const Container = styled.div`
    height: 621px;
    background: #f1f0f5;
    display: flex;

    .primeiraParte{
        width: 500px;
        height: 500px;
    }

    .imgLogo{
        width: 211px;
        height: 98px;
        margin-left: 200px;
    }

    .logon {
        margin-top: 50px;
        margin-left: 200px;

        h1 {
            font-size: 26px;
            color: #000;
            font-weight: bold;
            margin-bottom: 22px;
        }

        .input1 {
            width: 260px;
            margin: 0 auto;
            padding: 10px;
            border: none;
            margin-bottom: 10px;
            border-radius: 5px;
            font-size: 15px;
            display: block;
            margin-left: 0;
        }

        .btnEntrar {
            width: 280px;
            margin: 0 auto;
            padding: 10px;
            border: none;
            margin-bottom: 10px;
            border-radius: 5px;
            margin-left: 0;
            background: #e02142;
            color: #fff;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
        }

        h3{
            font-size: 17px;
            color: #000;
            font-weight: bold;
        }

        .segundaParte {
            width:500px;
            height: 500px;
        }

        .imgPessoas {
            width: 489px;
            height: 472px;
            margin-left: 570px;
            margin-top: -402px;
        }
`;
