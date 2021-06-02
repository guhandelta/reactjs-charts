import React, { useEffect, useState } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

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

    // var data = [
    //     { title: 'Chicken', children: [{ title: 'Egg' }] },
    //     { title: 'Fish', children: [{ title: 'fingerline' }] },
    //   ];

    const [treeData, setTreeData] = useState([])
    
    useEffect(() => {
        setTreeData(orgTreeData);
        console.log('====================================');
        console.log('Constructor');
        console.log('====================================');
    }, [])

    return (
        <>
            <SortableTree
                treeData={treeData}
                onChange={(treeData) => this.setTreeData(treeData)}
            />
        </>
    )
}

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
