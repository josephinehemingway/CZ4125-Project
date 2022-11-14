// @ts-ignore
import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div`
    width: ${(props: { width: string }) =>
        props.width ? props.width : "100%"};
    height: ${(props: { height: string }) =>
        props.height ? props.height : "100%"};
    margin-top: ${(props: { margintop: string }) =>
        props.margintop ? props.margintop : "0"};
    padding-top: ${(props: { paddingtop: string }) =>
        props.paddingtop ? props.paddingtop : "0"};
    padding-bottom: ${(props: { paddingbottom: string }) =>
        props.paddingbottom ? props.paddingbottom : "0"};
    display: flex;
    flex-direction: column;
    justify-content: ${(props: { justify: string }) =>
        props.justify ? props.justify : "flex-start"};
    align-items: ${(props: { align: string }) =>
        props.align ? props.align : "center"};
`;

export const RowContainer = styled.div`
    && {
        display: flex;
        flex-direction: row;
        align-items: ${(props: { align: string }) =>
            props.align ? props.align : "center"};
        justify-content: ${(props: { justify: string }) =>
            props.justify ? props.justify : "center"};
        width: ${(props: { width: string }) =>
            props.width ? props.width : "100%"};
        height: ${(props: { height: string }) =>
            props.height ? props.height : "100%"};
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "0"};
        margin-right: ${(props: { marginright: string }) =>
            props.marginright ? props.marginright : "0"};
        margin-left: ${(props: { marginleft: string }) =>
            props.marginleft ? props.marginleft : "0"};
    }
`;

interface StyledInputSearchProps {
    col: string | undefined;
    nohover: boolean | undefined;
}

export const StyledInputSearch = styled(Input)<
    Partial<StyledInputSearchProps>
>`
    && {
        ${({ col }: any) =>
            col === "white" &&
            `
        color: #fff;
        border: 1.2px solid #fff;
        .ant-input {
            background: none;
            color: #fff;
            margin-left: 0.5rem;
        }
        .anticon {
            color: #fff;
        }
        `}
        ${({ col }: any) =>
            col === "black" &&
            `
        color: #000;
        border: 1.2px solid #000;
        .ant-input {
            background: none;
            color: #000;
            margin-left: 0.5rem;
        }
        .anticon {
            color: #000;
        }
        `}

        ${({ nohover }: any) =>
            !nohover &&
            `
            img {
            -webkit-filter: opacity(60%);
        }

          img:hover {
            transform: scale(1.01);
            -webkit-filter: opacity(100%);
          }
        
        `}
        background: none;
        border-radius: 60px;
        width: ${(props: { width: string }) =>
            props.width ? props.width : "70%"};
        height: calc(22px + 2vw);
        display: flex;
        flex-direction: row;
        padding: 0.9vw;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-family: Poppins-Medium, sans-serif;
        font-size: calc(10px + 0.4vw);

        &:hover {
            border: 2px solid #46c7c7;
        }
    }
`;

export const HorizontalScroll = styled.div`
    width: 100%;
    height: ${(props: { height: string }) =>
        props.height ? props.height : "35em"};
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
`;

interface StyledDoubleInputSearchProps {
    nohover: boolean | undefined;
}

export const StyledDoubleInput = styled.div<
        Partial<StyledDoubleInputSearchProps>
    >`
    && {
        color: #fff;
        background: none;
        border: 1.2px solid #fff;
        border-radius: 60px;
        width: ${(props: { width: string }) =>
              props.width ? props.width : "40%"};
        height: calc(20px + 2vw);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 1.5rem;
        padding-right: 1rem;
        font-size: calc(10px + 0.4vw);
        margin-right: 1rem;
        overflow-x: hidden;

        &:hover {
            border: 2px solid #46c7c7;
        }

        ${({ nohover }: any) =>
              !nohover &&
              `
            img {
            -webkit-filter: opacity(60%);
        }

          img:hover {
            transform: scale(1.01);
            -webkit-filter: opacity(100%);
          }
        
        `}

        input {
            background: none;
            border: none;
        }

        select {
            background: none;
            border: none;
        }

        textarea:focus,
        input:focus,
        select:focus {
            outline: none;
        }
    }
`;

export const StyledTitle = styled.h3`
    && {
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "1rem"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "1rem"};
        font-family: Poppins-SemiBold, sans-serif;
        color: ${(props: { color: string }) =>
            props.color ? props.color : "#fff"};
        font-weight: 600;
        font-size: calc(60px + 0.7vw);
        line-height: calc(80px + 0.2vw);
    }
`;

export const StyledHeading = styled.h3`
    && {
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "0.5rem"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "0.5rem"};
        font-family: Poppins-SemiBold, sans-serif;
        color: ${(props: { color: string }) =>
            props.color ? props.color : "#fff"};
        font-weight: 600;
        font-size: calc(45px + 0.7vw);
        line-height: calc(60px + 0.5vw);
    }
`;

export const StyledSectionTitle = styled.h3`
    && {
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins, sans-serif;
        color: ${(props: { color: string }) =>
            props.color ? props.color : "#232323"};
        font-weight: 600;
        font-size: calc(20px + 0.5vw);
        text-align: center;
    }
`;

export const StyledPageTitle = styled.h3`
    && {
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins-SemiBold, sans-serif;
        color: ${(props: { color: string }) =>
            props.color ? props.color : "#2d2d2d"};
        font-weight: 600;
        font-size: calc(35px + 0.7vw);
        text-align: center;
    }
`;

export const StyledSubtitle = styled.h3`
    && {
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins-Light, sans-serif;
        color: ${(props: { color: string }) =>
            props.color ? props.color : "#fff"};
        font-size: calc(12px + 0.7vw);
        line-height: calc(20px + 0.5vw);
    }
`;

export const StyledLink = styled.a`
    && {
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins, sans-serif;
        color: ${(props: { color: string }) =>
            props.color ? props.color : "#232323"};
        font-size: calc(12px + 0.3vw);
        line-height: calc(20px + 0.5vw);

        &:hover {
            color: #46c7c7;
            transition: all 0.2s ease-in-out;
        }
    }
`;

export const StyledText = styled.p`
    && {
        margin-top: ${(props: { margintop: string }) =>
            props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: string }) =>
            props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins, sans-serif;
        color: ${(props: { color: string }) =>
            props.color ? props.color : "#000"};
        font-size: calc(12px + 0.3vw);
        line-height: calc(20px + 0.5vw);
    }
`;

export const StyledSubSubheading = styled.p`
    && {
        margin-top: ${(props: { margintop: string }) =>
    props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: string }) =>
    props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins-SemiBold, sans-serif;
        color: ${(props: { color: string }) =>
    props.color ? props.color : "#000"};
        font-size: calc(18px + 0.3vw);
        line-height: calc(20px + 0.5vw);
    }
`;
