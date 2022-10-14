// @ts-ignore
import styled from 'styled-components'
import {
  Input
} from 'antd'

export const Container = styled.div`
  width: ${(props: { width: string }) => (props.width ? props.width : '100%')};
  height: ${(props: { height: string }) => (props.height ? props.height : '100%')};
  margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0px')};
  padding-top: ${(props: { paddingtop: string }) => (props.paddingtop ? props.paddingtop : '0px')};
  display: flex;
  flex-direction: column;
  justify-content: ${(props: { justify: string }) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props: { align: string }) => (props.align ? props.align : 'center')};
`

export const RowContainer = styled.div`
&& {
  display: flex;
  flex-direction: row;
  align-items: ${(props: { align: string }) => (props.align ? props.align : 'center')};
  justify-content:  ${(props: { justify: string }) => (props.justify ? props.justify : 'center')};;
  width: ${(props: { width: string }) => (props.width ? props.width : "100%")};
  height: ${(props: { height: string }) => (props.height ? props.height : "100%")};
  margin-top: ${(props: { margintop: string }) => props.margintop ? props.margintop : "0px"};
  margin-bottom:  ${(props: { marginbottom: string }) => props.marginbottom ? props.marginbottom : "0px"};
  margin-right: ${(props: { marginright: string }) => props.marginright ? props.marginright : "0px"};
  margin-left: ${(props: { marginleft: string }) => props.marginleft ? props.marginleft : "0px"};
}
`

export const StyledSearchWhite = styled(Input)`
  && {
    color: #fff;
    background: none;
    border: 1.2px solid #fff;
    border-radius: 60px;
    width: ${(props: { width: string }) => (props.width ? props.width : '70%')};
    height: calc(20px + 2vw);
    display: flex;
    flex-direction: row;
    padding: 1vw;

    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: Poppins-Medium, sans-serif;
    font-size: calc(10px + .4vw);
    
    &:hover {
      border: 2px solid #46c7c7;
    }
    
    .ant-input {
      background: none;
      color: #fff;
      margin-left: 0.5rem;
    }

    .anticon {
      color: white;
    }
  }
`

export const StyledSearch = styled(Input)`
  && {
    color: #000;
    background: none;
    border: 1.2px solid #000;
    border-radius: 60px;
    width: ${(props: { width: string }) => (props.width ? props.width : '70%')};
    height: calc(20px + 2vw);
    display: flex;
    flex-direction: row;
    padding: 1vw;

    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: Poppins-Medium, sans-serif;
    font-size: calc(10px + .4vw);
    
    &:hover {
      border: 2px solid #46c7c7;
    }
    
    .ant-input {
      background: none;
      color: #000;
      margin-left: 0.5rem;
    }
  }
`

export const HorizontalScroll = styled.div`
  width: 100%;
  height: ${(props: { height: string }) => (props.height ? props.height : '35em')};;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
`

export const StyledDoubleInput = styled.div`
  && {
    color: #fff;
    background: none;
    border: 1.2px solid #fff;
    border-radius: 60px;
    width: 40%;
    height: calc(20px + 2vw);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1rem;
    font-size: calc(10px + .4vw);
    margin-right: 1rem;
    overflow-x: hidden;
    
    &:hover {
      border: 2px solid #46c7c7;
    }

    input {
      background: none;
      border: none;
    }

    select {
      background: none;
      border: none;
    }

    textarea:focus, input:focus, select:focus{
      outline: none;
    }
  }
`

export const StyledTitle = styled.h3`
  && {
    margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '1rem')};
    margin-bottom: ${(props: { marginbottom: string }) => (props.marginbottom ? props.marginbottom : '1rem')};
    font-family: Poppins-SemiBold, sans-serif;
    color: ${(props: { color: string }) => (props.color ? props.color : '#fff')};
    font-weight: 600;
    font-size: calc(60px + .7vw);
    line-height: calc(70px + .7vw);
  }
`

export const StyledHeading = styled.h3`
  && {
    margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0.5rem')};
    margin-bottom: ${(props: { marginbottom: string }) => (props.marginbottom ? props.marginbottom : '0.5rem')};
    font-family: Poppins-SemiBold, sans-serif;
    color: ${(props: { color: string }) => (props.color ? props.color : '#fff')};
    font-weight: 600;
    font-size: calc(45px + .7vw);
    line-height: calc(50px + .7vw);
  }
`

export const StyledSectionTitle = styled.h3`
  && {
    margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0')};
    margin-bottom: ${(props: { marginbottom: string }) => (props.marginbottom ? props.marginbottom : '0')};
    font-family: Poppins, sans-serif;
    color: ${(props: { color: string }) => (props.color ? props.color : '#232323')};
    font-weight: 600;
    font-size: calc(20px + .5vw);
    text-align: center;
  }
`

export const StyledSubtitle = styled.h3`
  && {
    margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0')};
    margin-bottom: ${(props: { marginbottom: string }) => (props.marginbottom ? props.marginbottom : '0')};
    font-family: Poppins-Light, sans-serif;
    color: ${(props: { color: string }) => (props.color ? props.color : '#fff')};
    font-size: calc(12px + .7vw);
    line-height: 2vw;
  }
`

export const StyledLink = styled.a`
  && {
    margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0')};
    margin-bottom: ${(props: { marginbottom: string }) => (props.marginbottom ? props.marginbottom : '0')};
    font-family: Poppins, sans-serif;
    color: ${(props: { color: string }) => (props.color ? props.color : '#232323')};
    font-size: calc(12px + .3vw);
    line-height: 2vw;
    
    &:hover {
      color: #46c7c7;
      transition: all 0.2s ease-in-out;
    }
  }
`

export const StyledText = styled.p`
  && {
    margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0')};
    margin-bottom: ${(props: { marginbottom: string }) => (props.marginbottom ? props.marginbottom : '0')};
    font-family: Poppins, sans-serif;
    color: ${(props: { color: string }) => (props.color ? props.color : '#000')};
    font-size: calc(12px + .3vw);
    line-height: 2vw;
  }
`
//
// export const StyledInputNumber = styled(InputNumber)`
//   && {
//     width: 100%;
//     border-radius: 5px;
//   }
// `
//
// export const StyledTextArea = styled(Input)`
//   && {
//     width: 150%;
//     border-radius: 5px;
//   }
// `
//
// export const StyledSelect = styled(Select)`
//   && {
//     margin-left: ${(props) => (props.left ? props.left : '0px')};
//     margin-top: ${(props) => (props.top ? props.top : '10px')};
//     margin-bottom: 10px;
//     width: ${(props) => (props.width ? props.width : '100%')};
//     & .ant-select-selector {
//       border-radius: 5px;
//     }
//   }
// `
//
// export const ContentContainer = styled(Col)`
//   && {
//     padding: ${(props) => (props.padding ? props.padding : '10px')};
//     width: ${(props) => (props.width ? props.width : '100%')};
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: ${(props) => (props.alignitems ? props.alignitems : 'flex-start')};
//   }
// `
//
// export const StyledTabs = styled(Tabs)`
//   && {
//     width: 100%;
//   }
// `
//
