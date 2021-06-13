import STree from "./stree";

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

const TreeListOld = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Tree Visualization component</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <STree data={treeData} />
                <hr />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeListOld;