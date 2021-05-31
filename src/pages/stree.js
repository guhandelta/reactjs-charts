import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import Typography from "@material-ui/core/Typography";
// import MailIcon from "@material-ui/icons/Mail";
// import DeleteIcon from "@material-ui/icons/Delete";
// import Label from "@material-ui/icons/Label";
// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import InfoIcon from "@material-ui/icons/Info";
// import ForumIcon from "@material-ui/icons/Forum";
// import LocalOfferIcon from "@material-ui/icons/LocalOffer";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowRightIcon from "@material-ui/icons/ArrowRight";
// import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const data = {
  id: "root",
  name: "VISHY GOPALAKRISHNAN",
  icon: "AccountCircleRoundedIcon",

  children: [
    {
      id: "1",
      name: "TEAM LEADER NAME",
      icon: "AccountCircleRoundedIcon",
      children: [
        {
          id: "2",
          name: "APP GROUP LEADER NAME",
          icon: "AccountCircleRoundedIcon",

          children: [
            {
              id: "3",
              name: "Application Name",
              icon: "AccountCircleRoundedIcon"
            },
            {
              id: "4",
              name: "Application Name",
              icon: "AccountCircleRoundedIcon"
            }
          ]
        }
      ]
    }
  ]
};

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function RecursiveTreeView() {
  const classes = useStyles();

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}
