// @ts-ignore
import styled from 'styled-components'
// import {
//   Row,
//   // InputNumber,
//   // Input,
//   // Card,
//   // Select,
//   // Table,
//   // Col,
//   // Tabs,
// } from 'antd'

export const StyledHeading = styled.h2`
  margin-bottom: 0;
  font-family: Poppins, sans-serif;
  font-size: 20px;
`

export const Container = styled.div`
  width: ${(props: { width: string }) => (props.width ? props.width : '100%')};
  height: 100%;
  display: flex;
  align-items: ${(props: { align: string }) => (props.align ? props.align : 'center')};
  margin-top: ${(props: { margintop: string }) => (props.margintop ? props.margintop : '0px')};
  justify-content: flex-start;
  flex-direction: column;
`

// export const HorizontalScroll = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: flex-start;
//   overflow-x: scroll;
// `

// export const StyledRow = styled(Row)`
//   && {
//     width: ${(props: { margin: string }) => (props.margin ? props.margin : '100%')};
//     margin-bottom:  ${(props: { margin: string }) => (props.margin ? props.margin : '20px')};
//     margin-right: ${(props: { margin: string }) => (props.margin ? props.margin : '20px')};
//   }
// `

// export const RowContainer = styled(Row)`
// && {
//   display: flex;
//   align-items: space-between;
//   justify-content: center;
//   flex-direction: row;
//   width: ${(props) => (props.margin ? props.margin : '100%')};
//   margin-top: ${(props) => (props.margintop ? props.margintop : '20px')};
//   margin-bottom:  ${(props) => (props.marginbottom ? props.marginbottom : '20px')};
//   margin-right: 0 //${(props) => (props.marginright ? props.marginright : '0px')};
//   margin-left: ${(props) => (props.marginleft ? props.marginleft : '0px')};
// }
// `

// export const StyledInput = styled(Input)`
//   && {
//     width: 40%;
//     border-radius: 2rem;
//     height: 3rem;
//     margin-bottom: 0.5rem;
//     margin-right: 1rem;
//     font-family: Poppins-Medium;
//     font-size: 15px;
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
// export const SearchBar = styled(Input.Search)`
// && {
//
//     border-radius: 25px;
//     height: 50px;
//   & .ant-input-search .ant-input-lg {
//     margin-left: 10px;
//   }
//   & .ant-input-group > .ant-input-affix-wrapper {
//     box-shadow: 0 3px 3px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
//     0 9px 28px 8px rgb(0 0 0 / 5%);
//     border-radius: 25px;
//     height: 50px;
//   }
//   &.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
//     box-shadow: 0 3px 3px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
//     0 9px 28px 8px rgb(0 0 0 / 5%);
//     height: 50px;
//     width: 50px;
//     border-radius: 30px;
//     margin-left: 10px;
//   }
//   & .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child){
//     border-top-left-radius: 25px;
//     border-bottom-left-radius: 25px;
//     height: 50px;
//   }
//   & .ant-input-group-addon {
//     background: rgba(0,0,0,0);
//   }
// }`