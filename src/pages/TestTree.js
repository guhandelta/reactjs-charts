import { useState } from "react";
import styled from "styled-components"
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../App.css';

const TestTree = ({ data = [] }) => {
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
            <StyledGridCard onClick={e => setChildVisiblity(v => !v)}>
                <StyledGridItemOne>
                    {hasChild &&(
                        <div className={`org-tree-toggler ${childVisible ? 'active' : ''}`}>
                            <ChevronRightIcon />
                        </div>
                    )}
                </StyledGridItemOne>
               {/* <div className="col"> */}
                <StyledGridItemTwo>
                        {!node.app && (
                            <StyledUserIcon>
                                {hasChild && (
                                    <StyledUserIcon className={`${node.chief ? `scale=2.5` : `scale = 1.5`}`}>
                                        <AccountCircleIcon />&emsp;&emsp;&emsp;
                                    </StyledUserIcon>
                                )}
                            </StyledUserIcon>
                        )}
                    </StyledGridItemTwo>
                    <StyledGridItemThree>
                        <p>{node.label}</p><br />
                        { node.chief && node.title &&(
                        <p className="subtitle">{node.title}</p>
                        )}
                    </StyledGridItemThree>
               {/* </div> */}
               {hasChild && childVisible && (
                <div className="d-tree-content">
                <ul className="d-flex d-tree-container flex-column">
                    <li className="child">
                        <TestTree data={node.children} />
                    </li>
                </ul>
                </div>
            )}
            </StyledGridCard>
        </>
    )
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-gap: 0.05em;
`

const StyledGridCard = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: auto auto auto;
    grid-gap: 0.05em;
    font-size: 30px;
`
const StyledGridItemOne = styled.div`
    height: 2em;
    width: 2em;
    grid-column: 1/ span 1;
    background-color: paleturquoise;
    padding-top: 1.85em;
`
const StyledGridItemTwo = styled.div`
    height: 2em;
    width: 3em;
    grid-column: 2/ span 1;
    background-color: paleturquoise;
    padding: -0.5em 1em;
`
const StyledGridItemThree = styled.div`
    height: 2em;
    width: auto;
    grid-column: 3/ span 64;
    background-color: paleturquoise;
    padding-left: 0.5em;
    padding-top: -0.4em;
`
const StyledUserIcon = styled.div`
    margin: 2em -4em -2em 4em;
    transform:scale(${props => props.scale ? props.scale : 1.5});
`

export default TestTree
