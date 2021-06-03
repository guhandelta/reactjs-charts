import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function MultiSelectTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
      <TreeItem nodeId="5" label="Jon Summers">
      <TreeItem nodeId="11" label="Team Leader Name ">
          <TreeItem nodeId="111" label="App Group Leader Name">
            <TreeItem nodeId="1111" Label="Application A"></TreeItem>
            <TreeItem nodeId="1112" Label="Application B"></TreeItem>
            <TreeItem nodeId="1113" Label="Application C"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="112" label="App Group Leader Name">
            <TreeItem nodeId="1121" Label="Application A"></TreeItem>
            <TreeItem nodeId="1122" Label="Application B"></TreeItem>
            <TreeItem nodeId="1123" Label="Application C"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="113" label="App Group Leader Name">
            <TreeItem nodeId="1132" Label="Application B"></TreeItem>
            <TreeItem nodeId="1133" Label="Application C"></TreeItem>
            <TreeItem nodeId="1131" Label="Application A"></TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="2" label="Team Leader Name">
            <TreeItem nodeId="121" label="App Group Leader Name">
              <TreeItem nodeId="1211" Label="Application A"></TreeItem>
              <TreeItem nodeId="1212" Label="Application B"></TreeItem>
              <TreeItem nodeId="1213" Label="Application C"></TreeItem>
            </TreeItem>
            <TreeItem nodeId="2" label="App Group Leader Name">
              <TreeItem nodeId="1221" Label="Application A"></TreeItem>
              <TreeItem nodeId="1222" Label="Application B"></TreeItem>
              <TreeItem nodeId="1223" Label="Application C"></TreeItem>
            </TreeItem>
        </TreeItem>
      </TreeItem>
      <hr />
      <TreeItem nodeId="1" label="Vishy Gopalakrishnan">
        <TreeItem nodeId="11" label="Team Leader Name">
          <TreeItem nodeId="111" label="App Group Leader Name">
            <TreeItem nodeId="1111" Label="Application A"></TreeItem>
            <TreeItem nodeId="1112" Label="Application B"></TreeItem>
            <TreeItem nodeId="1113" Label="Application C"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="112" label="App Group Leader Name">
            <TreeItem nodeId="1121" Label="Application A"></TreeItem>
            <TreeItem nodeId="1122" Label="Application B"></TreeItem>
            <TreeItem nodeId="1123" Label="Application C"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="113" label="App Group Leader Name">
            <TreeItem nodeId="1132" Label="Application B"></TreeItem>
            <TreeItem nodeId="1133" Label="Application C"></TreeItem>
            <TreeItem nodeId="1131" Label="Application A"></TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="2" label="Team Leader Name">
            <TreeItem nodeId="121" label="App Group Leader Name">
              <TreeItem nodeId="1211" Label="Application A"></TreeItem>
              <TreeItem nodeId="1212" Label="Application B"></TreeItem>
              <TreeItem nodeId="1213" Label="Application C"></TreeItem>
            </TreeItem>
            <TreeItem nodeId="2" label="App Group Leader Name">
              <TreeItem nodeId="1221" Label="Application A"></TreeItem>
              <TreeItem nodeId="1222" Label="Application B"></TreeItem>
              <TreeItem nodeId="1223" Label="Application C"></TreeItem>
            </TreeItem>
        </TreeItem>
        <TreeItem nodeId="3" label="Team Leader Name">
            <TreeItem nodeId="131" label="App Group Leader Name">
              <TreeItem nodeId="1311" Label="Application A"></TreeItem>
              <TreeItem nodeId="1312" Label="Application B"></TreeItem>
              <TreeItem nodeId="1313" Label="Application C"></TreeItem>
            </TreeItem>
            <TreeItem nodeId="2" label="App Group Leader Name">
              <TreeItem nodeId="1321" Label="Application A"></TreeItem>
              <TreeItem nodeId="1322" Label="Application B"></TreeItem>
              <TreeItem nodeId="1323" Label="Application C"></TreeItem>
            </TreeItem>

        </TreeItem>
      </TreeItem>
      <hr />
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
      <hr />
    </TreeView>
  );
}
