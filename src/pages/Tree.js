import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <table>
        <th>
          <AccountCircleIcon />
        </th>
        <tr className="trow">
          <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
            {hasChild && (
                <div
                  className={`d-inline d-tree-toggler ${
                    childVisible ? "active" : ""
                  }`}
                >
                  {/* <FontAwesomeIcon icon="caret-right" /> */}
                </div>
              )}


            <td className="tcell">
              <div className="col d-tree-head">
                <i className={`mr-1 ${node.icon}`}> </i>
                <p>{node.label}</p><br />
                {node.subLabel &&(
                  <p className="subtitle">{node.subLabel}</p>
                )}
              </div>
            </td>
          </div>
        </tr>

        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <Tree data={node.children} />
            </ul>
          </div>
        )}
        {/* <hr /> */}
      </table>
    </li>
  );
};

export default Tree;