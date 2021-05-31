import Tree from "./Tree";


const treeData = [
  {
    key: "0",
    label: "Vishy Gopalakrishnan",
    chief: true,
    icon: "fa fa-folder",
    title: "VP - TRANSFORMATION AND REALIZATION",
    children: [
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
    ],
  },
  {
    key: "1",
    label: "ANDY MARCUS",
    chief: true,
    icon: "fa fa-desktop",
    title: "SVP AND CHIEF DATA OFFICER",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "Bill O`THERN",
    chief: true,
    subLabel: "Random Sublabel",
    icon: "fa fa-download",
    title: "svp & CSO",
    children: [],
  },
];

const TreeList = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Tree Visualization component</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treeData} />
                <hr />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeList;