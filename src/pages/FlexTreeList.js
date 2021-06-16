import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';

const details = [
  {
    key: "0-1",
    label: "TEAM LEADER 1",
    icon: "fa fa-folder",
    children: [
      {
        key: "0-1-1",
        label: "APP GROUP LEADER NAME",
        icon: "fa fa-file",
        children:[
          {
            key: "0-1-1",
            label: "APPLICATION NAME",
            icon: "fa fa-file",
          },
          {
            key: "0-1-1",
            label: "APPLICATION NAME",
            icon: "fa fa-file",
          },
        ],
      },          
      {
        key: "0-1-2",
        label: "APP GROUP LEADER NAME",
        icon: "fa fa-file",
        children:[
          {
            key: "0-1-2-1",
            label: "APPLICATION NAME",
            app: true,
            icon: "fa fa-file",
          },
          {
            key: "0-1-2-2",
            label: "APPLICATION NAME",
            app: true,
            icon: "fa fa-file",
          },
        ],
      },          
    ],
  },
  {
    key: "0-2",
    label: "TEAM LEADER 2",
    icon: "fa fa-folder",
    children: [
      {
        key: "0-2-1",
        label: "APP GROUP LEADER NAME",
        icon: "fa fa-file",
        children:[
          {
            key: "0-2-1-1",
            label: "APPLICATION NAME",
            app: true,
            icon: "fa fa-file",
          },
          {
            key: "0-2-1-2",
            label: "APPLICATION NAME",
            app: true,
            icon: "fa fa-file",
          },
        ],
      },          
      {
        key: "0-1-2",
        label: "APP GROUP LEADER NAME",
        icon: "fa fa-file",
        children:[
          {
            key: "0-1-2-1",
            label: "APPLICATION NAME",
            icon: "fa fa-file",
          },
          {
            key: "0-1-2-2",
            label: "APPLICATION NAME",
            icon: "fa fa-file",
          },
        ],
      },          
    ],
  },
];

const treeData = [
  {
    key: "0",
    label: "VISHY GOPALAKRISHNAN",
    chief: true,
    title: "VP - TRANSFORMATION AND REALIZATION",
    children: details
  },
  {
    key: "1",
    label: " ANDY MARCUS",
    chief: true,
    title: "SVP AND CHIEF DATA OFFICER",
    children: details
  },
  {
    key: "2",
    label: "Bill O'THERN",
    chief: true,
    title: "SVP & CSO",
    children: details,
  },
];

const FlexTreeList = () => {
  return (
    <>
      <StyledFlexContainer>
        <StyledFlexCard>
          <StyledFlexItemOne>
            <p><ChevronRightIcon /></p>
          </StyledFlexItemOne>
          <StyledFlexItemTwo>
              <p>2</p>
          </StyledFlexItemTwo>
          <StyledFlexItemThree>3</StyledFlexItemThree>
        </StyledFlexCard>
        <StyledFlexCard>
          <StyledFlexItemOne>
            <p><ChevronRightIcon /></p>
          </StyledFlexItemOne>
          <StyledFlexItemTwo>
            <p>2</p>
          </StyledFlexItemTwo>
          <StyledFlexItemThree>3</StyledFlexItemThree>
        </StyledFlexCard>
        <StyledFlexCard>
          <StyledFlexItemOne>
            <p><ChevronRightIcon /></p>
          </StyledFlexItemOne>
          <StyledFlexItemTwo>
            <p>2</p>
          </StyledFlexItemTwo>
          <StyledFlexItemThree>3</StyledFlexItemThree>
        </StyledFlexCard>
      </StyledFlexContainer>
    </>
  );
};

export default FlexTreeList;

const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const StyledFlexCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.1rem;
    font-size: 30px;
`
const StyledFlexItemOne = styled.div`
    margin: 0.1em;
    text-align: center;
    height: 2em;
    width: 2em;
    background-color: aquamarine;

    > p{
      vertical-align: text-top;
      margin-top: 0.4em;
    }
  `
const StyledFlexItemTwo = styled.div`
    margin: 0.1em;
    text-align: center;
    height: 2em;
    width: 3em;
    background-color: bisque;
    padding: -0.3em 1em;
  `
const StyledFlexItemThree = styled.div`
    margin: 0.1em;
    text-align: center;
    height: 2em;
    width: auto;
    background-color: paleturquoise;
    padding-left: 0.3em;
    padding-right: 0.2em;
    padding-top: -0.4em;
`
const StyledUserIcon = styled.div`
    margin: 2em -4em -2em 4em;
    transform:scale(${props => props.scale ? props.scale : 1.5});
`

{/*
   <div className="row">
        <div className="col text-center">
          <h2>Tree Visualization component</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <FlexTree data={treeData} />
                <hr />
              </div>
            </div>
          </p>
        </div>
      </div>
*/}