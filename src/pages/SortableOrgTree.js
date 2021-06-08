import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const orgTreeData = [
    {
      title: "Chicken",
      expanded: true,
      children: [
        {
          title: "Egg",
          children: [
            {
              title: "chick",
              children: [
                {
                  title: "chicken",
                  children: [
                    {
                      title: "Eggs",
                      children: [
                        { title: "Omlette" },
                        { title: "Podimaas" }
                      ]
                    },
                    {
                      title: "Fry",
                      children: [{ title: "Kadai" }, { title: "Pepper" }]
                    },
                    {
                      title: "Biriyani",
                      children: [
                        { title: "Thalapakatti" },
                        { title: "Ambur" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]

// class Tree extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       treeData: 
//     };
//   }

//   render() {
//     return (
//       <div style={{ height: 400 }}>
        
//       </div>
//     );
//   }
// }


const SortableOrgTree = (props) => {

  return(
    <StyledFlexContainer>
      <StyledFlexItem>
        <StyledTreeToggler>
          <ChevronRightIcon />
        </StyledTreeToggler>
        <StyledUserIcon>
          <span>
            <AccountCircleIcon />
          </span>
        </StyledUserIcon>
        <StyledFlexCard>
          <StyledName>
            John Doe
          </StyledName>
          <StyledTitle>
            Manager
          </StyledTitle>
        </StyledFlexCard>
      </StyledFlexItem>
      <StyledFlexItem>
        <StyledTreeToggler>
          <ChevronRightIcon />
        </StyledTreeToggler>
        <StyledUserIcon>
          <span>
            <AccountCircleIcon />
          </span>
        </StyledUserIcon>
        <StyledFlexCard>
          <StyledName>
            John Doe
          </StyledName>
          <StyledTitle>
            Manager
          </StyledTitle>
        </StyledFlexCard>
      </StyledFlexItem>
      <StyledFlexItem>
        <StyledTreeToggler>
          <ChevronRightIcon />
        </StyledTreeToggler>
        <StyledUserIcon>
          <span>
            <AccountCircleIcon />
          </span>
        </StyledUserIcon>
        <StyledFlexCard>
          <StyledName>
            John Doe
          </StyledName>
          <StyledTitle>
            Manager
          </StyledTitle>
        </StyledFlexCard>
      </StyledFlexItem>
    </StyledFlexContainer>
  )
    
}

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledFlexItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: peachpuff;
  width: 10em;
  margin: 0.5em;
  text-align: center;
  padding-left: 0.2em;
  line-height: 75px;
  border: 1px dashed #000;
  font-size: 30px;
`
const StyledUserIcon = styled.div`
  display: flex;
  margin: 0.2em 0.2em 0.2em 0;
  width: 3em;

  span{
    transform: scale(2.6);
    padding-left:0.4em; 
    padding-top: 0.1em;
  }
` 
const StyledFlexCard = styled.div`
  display: grid;
  /* flex-wrap: wrap;
  flex-direction: column; */
  margin: 0.2em 0.2em 0.2em -0.8em;
  /* width: 100%; */
  /* border: 1px dashed #000; */
  background-color: #fff;
  grid-gap: 1px;
` 
const StyledName = styled.p`
  /* flex-wrap: wrap; */
  /* padding: -0.1em 0; */
  /* border: 1px solid #000; */
`
const StyledTitle = styled.p`
  /* flex-wrap: wrap; */
  /* padding: -0.1em 0; */
  /* border: 1px solid #000; */
  color: grey;
`
const StyledTreeToggler = styled.div`
  display: flex;
  margin: 1.1em 0.2em 0.2em 0;
  height: 0.7em;
  width: 0.2em;
   width: 0.5em;
` 

export default SortableOrgTree

// import SortableTree from "react-sortable-tree";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
      
//     };
//   }

//   render() {
//     return (
//       <div style={{ height: 500 }}>
//         <SortableTree
//           treeData={this.state.treeData}
//           onChange={(treeData) => this.setState({ treeData })}
//         />
//       </div>
//     );
//   }
// }
