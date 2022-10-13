// @ts-ignore
import styled from 'styled-components'
import {
  Input,
//   InputNumber,
  // Card,
  // Select,
  // Table,
  // Col,
  // Tabs,
} from 'antd'

export const Container = styled.div`
  width: ${(props: { width: string }) => (props.width ? props.width : '100%')};
  height: ${(props: { height: string }) => (props.height ? props.height : '100%')};
  margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0px')};
  padding-top: ${(props: { paddingtop: string }) => (props.paddingtop ? props.paddingtop : '0px')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  height: 35em;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
`

// export const StyledRow = styled(Row)`
//   && {
//     width: ${(props: { margin: string }) => (props.margin ? props.margin : '100%')};
//     margin-bottom:  ${(props: { margin: string }) => (props.margin ? props.margin : '20px')};
//     margin-right: ${(props: { margin: string }) => (props.margin ? props.margin : '20px')};
//   }
// `




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
// export const StyledCard = styled(Card)`
//   && {
//     width: 100%;
//     background-color: #F2F6FE;
//   }
// `
//
// export const StyledTable = styled(Table)`
//   && {
//     width: 100%;
//     margin-bottom: 20px;
//   }
// `
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
// export const LeftColumn = styled.div`
//   width: 72%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `
//
// export const RightColumn = styled(LeftColumn)`
//   width: 28%;
//   padding-left: 30px;
//   margin-top: 55px;
// `
//
// export const StyledTabs = styled(Tabs)`
//   && {
//     width: 100%;
//   }
// `
//
