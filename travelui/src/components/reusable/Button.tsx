// @ts-ignore
import styled from 'styled-components';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export const BorderedButton = styled(Button)`
  && {
    border-radius: 60px;
    background: none;
    color: #fff;
    border: 1.5px solid #fff;
    cursor: pointer;
    font-size: calc(12px + .4vw);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-weight: 100;
    width: ${(props: { width: string }) => (props.width ? props.width : '30%')};
    height: calc(20px + 2vw);

    margin-top: ${(props: { margintop: string }) => props.margintop ? props.margintop : "2rem"};

    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:focus {
      color: #46c7c7;
      background: none;
      border: 2px solid #46c7c7;
    }

    &:hover {
      transform: scale(1.02);
      transition: all 0.1s ease-in-out;
      color: #46c7c7;
      background: none;
      border: 2px solid #46c7c7;
    }
  }
`;