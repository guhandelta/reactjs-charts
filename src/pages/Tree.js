import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { useState } from "react";
import "../App.css";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false); 

  const hasChild = node.children ? true : false;

  return (
    <li className="d-tree-node border-0">
      <table className="entries">
        {/* <th>
          {!node.app && (
            <AccountCircleIcon />
          )}
        </th> */}
        <tr className="trow">
          <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
            <td>
            {hasChild && (
                <div
                  className={`d-inline d-tree-toggler ${
                    childVisible ? "active" : ""
                  }`}
                >
                  {/* <FontAwesomeIcon icon="caret-right" /> */}
                  <ChevronRightIcon />
                </div>
              )}
              </td>

            <td className="tcell">
              <div className="col d-tree-head">
               <div className="grid-item">
                {!node.app && (
                  <i className={`mr-1 ${node.icon} user`}>
                    <AccountCircleIcon />
                  </i>)}
               </div>
                <div className="grid-item">
                  <div className="item">
                      <p>{node.label}</p><br />
                      { node.chief && node.title &&(
                        <p className="subtitle">{node.title}</p>
                      )}
                  </div>
                </div>
              </div>
            </td>
          </div>
        </tr>

        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <li>
                  <Tree data={node.children} />
              </li>
            </ul>
          </div>
        )}
        {/* <hr /> */}
      </table>
    </li>
  );
};

export default Tree;







