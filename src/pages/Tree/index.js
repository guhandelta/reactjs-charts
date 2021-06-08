import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from "react";
import "./style.scss";


const TreeRoot = ({ data = [] }) => (<div className="">
  { data.map((tree) => {
    return (
      <div class="treeview">
        <TreeStart node={ tree } />
      </div>
    )
  }) }
</div>);


const TreeStart = ({ node }) => {
  const [ childVisible, setChildVisiblity ] = useState(false);
  const childTree = (<ul>
    {node?.children?.map(item => <Tree node={ node.children } />) }
  </ul>);
  return (
    <>
      <TreeNodeContent { ...node } onClick={ () => setChildVisiblity(val => !val) } childVisible={ childVisible} />
      {childVisible ? childTree : null }
    </>
  );
};


const Tree = ({ node = [] }) => {
  console.log(node)
  return (<ul>
    {node.map(item => <TreeNode { ...item } />) }
  </ul>
  );
};

const TreeNode = (node) => {
  const { children } = node;
  const [ childVisible, setChildVisiblity ] = useState(false);

  return (
    <li>
      <TreeNodeContent { ...node } onClick={ () => setChildVisiblity(val => !val) } childVisible={ childVisible } />

      {childVisible ? <Tree node={ children } /> : null }
    </li>
  )
}

const TreeNodeContent = ({ children, chief, label, title, childVisible, onClick}) => (<div className="content">
  <div class="flex align-item-center">
    { !!children && (
      <div className="expand-collapse-icon flex align-item-center" onClick={ onClick }>
        {childVisible ? <ExpandMoreIcon /> : <ChevronRightIcon /> }
      </div>
    ) }
    <div className={ `flex align-item-center ${ chief ? 'chief-icon' : 'member-icon' } ${ !children ? 'mr-1': ''}`}>
      <AccountCircleIcon fontSize={ chief ? 'large' : 'small' } />&emsp;&emsp;&emsp;
                        </div>
    <div>
      <div>{ label }</div>
      { title && <div>{ title }</div> }
    </div>
  </div>
</div>);

// const TreeNode1 = ({ node }) => {
//   const [ childVisible, setChildVisiblity ] = useState(false);

//   const hasChild = node.children ? true : false;

//   return (
//     <>
//       <li className="d-tree-node border-0 mt-3">
//         <div className="entries">
//           <tr className="trow">
//             <div className="d-flex" onClick={ (e) => setChildVisiblity((v) => !v) }>
//               <td>
//                 { hasChild && (
//                   <div
//                     className={ `d-inline d-tree-toggler ${ childVisible ? "active" : ""
//                       }` }
//                   >
//                     <ChevronRightIcon />
//                   </div>
//                 ) }
//               </td>

//               <td className="tcell">
//                 <div className="col d-tree-head">
//                   <div className="grid-item">
//                     { !node.app && (
//                       <i className='mr-1'>
//                         {hasChild && (
//                           <div className={ `${ node.chief ? 'chief' : 'member' }` }>
//                             <AccountCircleIcon />&emsp;&emsp;&emsp;
//                           </div>
//                         ) }
//                       </i>) }
//                   </div>
//                   <div className="grid-item">
//                     <div className="item">
//                       <p>{ node.label }</p><br />
//                       { node.chief && node.title && (
//                         <p className="subtitle">{ node.title }</p>
//                       ) }
//                     </div>
//                   </div>
//                 </div>
//               </td>
//             </div>
//           </tr>

//           { hasChild && childVisible && (
//             <div className="d-tree-content">
//               <ul className="d-flex d-tree-container flex-column">
//                 <li className={ `child ${ node.chief ? "" : "pad" }` }>
//                   <Tree data={ node.children } />
//                 </li>
//               </ul>
//             </div>
//           ) }
//         </div>
//       </li>
//     </>
//   );
// };

export default TreeRoot;
