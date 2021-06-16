// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import React, { useState } from "react";
// import "../App.css";

// const Tree = ({ data = [] }) => {
//   return (
//     <div className="d-tree">
//       <ul className="d-flex d-tree-container flex-column">
//         {data.map((tree) => (
//           <TreeNode node={tree} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const TreeNode = ({ node }) => {
//   const [childVisible, setChildVisiblity] = useState(false); 

//   const hasChild = node.children ? true : false;

//   return (
//     <>
//       <li className="d-tree-node border-0 mt-3">
//         <div className="entries">
//           <tr className="trow">
//             <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
//               <td>
//               {hasChild && (
//                   <>
//                     <div class='filler'></div>
//                     <div
//                       className={`d-inline d-tree-toggler ${
//                         childVisible ? "active" : ""
//                       }`}
//                     >
//                       <ChevronRightIcon />
//                     </div>
//                   </>
//                 )}
//                 </td>

//               <td className="tcell">
//                 <div className="d-tree-head">
//                   <div className="grid-item">
//                     {!node.app && (
//                       <i className='mr-1'>
//                       {hasChild && (
//                           <div className={`${node.chief ? 'chief' : 'member'}`}>
//                             <AccountCircleIcon />&emsp;&emsp;&emsp;
//                           </div>
//                       )}
//                       </i>)}
//                   </div>
//                   <div className="grid-item">
//                     <div className={`${node.chief ? 'item' : ''}`}>
//                         <p className={`${node.chief ? '' : 'name'}`}>{node.label}</p><br />
//                         {node.chief && node.title &&(
//                           <p className="subtitle">{node.title}</p>
//                         )}
//                     </div>
//                   </div>
//                 </div>
//               </td>
//             </div>
//           </tr>

//           {hasChild && childVisible && (
//             <div className="d-tree-content">
//               <ul className="d-flex">
//                 <li className="child">
//                     <Tree data={node.children} />
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </li>
//     </>
//   );
// };

// export default Tree;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import "../App.css";

// const Tree = ({ data = [] }) => {
//   return (
//     <div className="d-tree">
//       <ul className="d-flex d-tree-container flex-column">
//         {data.map((tree) => (
//           <TreeNode node={tree} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const TreeNode = ({ node }) => {
//   const [childVisible, setChildVisiblity] = useState(false);

//   const hasChild = node.children ? true : false;

//   return (
//     <li className="d-tree-node border-0">
//       <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
//         {hasChild && (
//           <div
//             className={`d-inline d-tree-toggler ${
//               childVisible ? "active" : ""
//             }`}
//           >
//             <FontAwesomeIcon icon="caret-right" />
//           </div>
//         )}

//         <div className="col d-tree-head">
//           <i className={`mr-1 ${node.icon}`}> </i>
//           {node.label}
//         </div>
//       </div>

//       {hasChild && childVisible && (
//         <div className="d-tree-content">
//           <ul className="d-flex d-tree-container flex-column">
//             <Tree data={node.children} />
//           </ul>
//         </div>
//       )}
//     </li>
//   );
// };

// export default Tree;

// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Container } from '@material-ui/core'
// import React, { useState } from "react";
// import styled from 'styled-components';
// // import "../style.scss";


// const TreeRoot = ({ data = [] }) => (
//   <Container maxWidth="md">
//     <div>
//       { data.map((tree) => {
//         return (
//           <div class="treeview">
//             <TreeStart node={ tree } /> <br />
//             <hr />
//           </div>
//         )
//       }) }
//     </div>
//   </Container>
// );


// const TreeStart = ({ node }) => {
//   const [ childVisible, setChildVisiblity ] = useState(false);
//   const childTree = (<ul>
//     {node?.children?.map(item => <Tree node={ node.children } />) }
//   </ul>);
//   return (
//     <>
//       <TreeNodeContent { ...node } onClick={ () => setChildVisiblity(val => !val) } childVisible={ childVisible} />
//       {childVisible ? childTree : null }
//     </>
//   );
// };


// const Tree = ({ node = [] }) => {
//   console.log(node)
//   return (
//     <StyledNodeHolder>
//       {node.map(item => <TreeNode { ...item } />) }
//     </StyledNodeHolder>
//   );
// };

// const TreeNode = (node) => {
//   const { children } = node;
//   const [ childVisible, setChildVisiblity ] = useState(false);

//   return (
//     <StyledElement>
//       <TreeNodeContent { ...node } onClick={ () => setChildVisiblity(val => !val) } childVisible={ childVisible } />
//       {childVisible ? <Tree node={ children } /> : null }
//     </StyledElement>
//   )
// }

// {/* <div className="content"> */}
// const TreeNodeContent = ({ children, chief, label, title, childVisible, onClick}) => (
//   <StyledContent>
//     <div class="flex-row align-item-center" onClick={ onClick }>
//       { !!children && (
//         <div className="expand-collapse-icon flex align-item-center">
//           {childVisible ? <ExpandMoreIcon /> : <ChevronRightIcon /> }
//         </div>
//       ) }
//       <div className={ `flex-row align-item-center ${ chief && children ? 'chief-icon' : 'member-icon' } ${ !children ? 'mr-1': ''}`}>
//         <AccountCircleIcon />&emsp;&emsp;&emsp;
//       </div>
//       <div>
//         <div className={`${chief ? "" : "name"}`}>{ label }</div>
//         { title && <div className="title">{ title }</div> }
//       </div>
//     </div>
//   </StyledContent>
// );
// {/* </div> */}

// const StyledElement = styled.li`
//    display: inline;
//    width: auto;
//    list-style-type: none;
//    padding: 1.1em 0;
//    margin-left: -5.2em;
//    margin-bottom: -0.3em;
// `

// const StyledContent = styled.div`

//   display: flex;
//   flex-direction: row;
//   width: auto;
//   font-family: Arial;
//   font-size: 0.9375em;
//   color: #000;
//   /* line-height: 1.5; */
//   /* padding-left: 1.25625em; */
//   position: relative;
//   bottom: 1.375em;
//   margin-bottom: -2.3em;
  
//   &:before {
//       display: flex;
//       flex-direction: row;
//       content: "";
//       width: 1.875em;
//       height: 1px;
//       position: absolute;
//       /* top: 50%; */
//       bottom: 50%;
//       left: 0;
//       box-sizing: border-box;
//   }
// `

// const StyledNodeHolder = styled.ul`
//   margin: 1.25em 0;
//   li {
//         display: flex;
//         flex-direction: row;
//         margin-top: -1.6em;
//         margin-bottom: -1.6em;
//         margin-left: 0.7em;
//         width: calc(100% - 3.215em);
//         background-color: palevioletred;

//         .content {
//             color: #000;
//             padding-left: 1.625em;
//             margin: 0.2em 0;
//             /* // margin-left: -1.625em; */
//             /* // margin-top: -0.625em; */
//             background-color: chartreuse;

//             &:before {
//                 background-color: #fff;
//                 width: 1.875em;
//                 box-sizing: border-box;
//             }
//         }
//     }
// `

// export default TreeRoot;
