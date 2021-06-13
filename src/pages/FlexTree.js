import { useState } from "react";
import styled from "styled-components"
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../App.css';

const FlexTree = ({ data = [] }) => {
    return (
        <StyledContainer>
          {data.map((tree) => (
            <TreeNode node={tree} />
          ))}
        </StyledContainer>
    );
  };


const TreeNode = ({ node }) => {
    
    const [childVisible, setChildVisiblity] = useState(false); 

    const hasChild = node.children ? true : false;

    return (
        <>  
            <StyledFlexCard onClick={e => setChildVisiblity(v => !v)}>
                <StyledFlexItemOne>
                    {hasChild &&(
                        <div className={`org-tree-toggler ${childVisible ? 'active' : ''}`}>
                            <ChevronRightIcon />
                        </div>
                    )}
                </StyledFlexItemOne>
               {/* <div className="col"> */}
                <StyledFlexItemTwo>
                        {!node.app && (
                            <StyledUserIcon>
                                {hasChild && (
                                    <StyledUserIcon className={`${node.chief ? `` : ``}`}>
                                        <AccountCircleIcon />&emsp;&emsp;&emsp;
                                    </StyledUserIcon>
                                )}
                            </StyledUserIcon>
                        )}
                    </StyledFlexItemTwo>
                    <StyledFlexItemThree>
                        <p>{node.label}</p><br />
                        { node.chief && node.title &&(
                        <p className="subtitle">{node.title}</p>
                        )}
                    </StyledFlexItemThree>
               {/* </div> */}
               {hasChild && childVisible && (
                <div className="d-tree-content">
                <ul className="d-flex d-tree-container flex-column">
                    <li className="child">
                        <FlexTree data={node.children} />
                    </li>
                </ul>
                </div>
            )}
            </StyledFlexCard>
        </>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const StyledFlexCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* padding: 1rem; */
    font-size: 30px;
`
const StyledFlexItemOne = styled.div`
    height: 2em;
    width: 2em;
    /* background-color: paleturquoise; */
    border: 1px solid #000;
    `
const StyledFlexItemTwo = styled.div`
    height: 2em;
    width: 3em;
    /* background-color: paleturquoise; */
    padding: -0.3em 1em;
    border: 1px solid #000;
`
const StyledFlexItemThree = styled.div`
    height: 2em;
    width: auto;
    background-color: paleturquoise;
    padding-left: 0.5em;
    padding-top: -0.4em;
`
const StyledUserIcon = styled.div`
    margin: 2em -4em -2em 4em;
    transform:scale(${props => props.scale ? props.scale : 1.5});
`

export default FlexTree
