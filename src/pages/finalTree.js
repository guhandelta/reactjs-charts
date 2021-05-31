import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content, &$selected > $content': {
      color: 'var(--tree-view-color)',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 20,
    '& $content': {
      paddingLeft: theme.spacing(1),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
  labelInfo: {
    alignItems: 'center'
  },
}));


function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="body2" color="inherit" className={classes.labelInfo}>
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  fontSize:PropTypes.number,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function GmailTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['1']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
	
	 {/* First  */}
      <StyledTreeItem nodeId="1" labelText="VISHY GOPALAKRISHNAN" labelIcon={AccountCircleIcon}>

        <TreeItem
          nodeId="1-1"
          label="Person Information"
          color="#1a73e8"
          bgColor="#e8f0fe"
          fontSize="5"
        />
        
    {/* one  */}
		<StyledTreeItem
          nodeId="1-1"
          labelText="TEAM LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <StyledTreeItem
          nodeId="1-1-1"
          labelText="APP GROUP LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          >
            <StyledTreeItem
              nodeId="1-1-1-1"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem
              nodeId="1-1-1-2"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
         </StyledTreeItem>
       </StyledTreeItem>
	   
	   {/* two  */}
	   <StyledTreeItem
          nodeId="1-2"
          labelText="TEAM LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <StyledTreeItem
          nodeId="1-2-1"
          labelText="APP GROUP LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          >
            <StyledTreeItem
              nodeId="1-2-1-1"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem
              nodeId="1-2-1-2"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
         </StyledTreeItem>
       </StyledTreeItem>
	   
	   {/* three  */}
	   <StyledTreeItem
          nodeId="1-3"
          labelText="TEAM LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <StyledTreeItem
          nodeId="1-3-1"
          labelText="APP GROUP LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          >
            <StyledTreeItem
              nodeId="1-3-1-1"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem
              nodeId="1-3-1-2"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
         </StyledTreeItem>
       </StyledTreeItem>
	   
      </StyledTreeItem>
	  
	  
	  {/* Secound  */}
	  <StyledTreeItem nodeId="1" labelText="ANDY MARKUS" labelIcon={AccountCircleIcon}>
    <TreeItem
          nodeId="1-1"
          label="Person Information"
          color="#1a73e8"
          bgColor="#e8f0fe"
          fontSize="5"
    />

		{/* one  */}
		<StyledTreeItem
          nodeId="2-1"
          labelText="TEAM LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <StyledTreeItem
          nodeId="2-1-1"
          labelText="APP GROUP LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          >
            <StyledTreeItem
              nodeId="2-1-1-1"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem
              nodeId="2-1-1-2"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
         </StyledTreeItem>
       </StyledTreeItem>
	   
	   {/* two  */}
	   <StyledTreeItem
          nodeId="2-2"
          labelText="TEAM LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <StyledTreeItem
          nodeId="2-2-1"
          labelText="APP GROUP LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          >
            <StyledTreeItem
              nodeId="2-2-1-1"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem
              nodeId="2-2-1-2"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
         </StyledTreeItem>
       </StyledTreeItem>
	   
	   {/* three  */}
	   <StyledTreeItem
          nodeId="2-3"
          labelText="TEAM LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        >
          <StyledTreeItem
          nodeId="2-3-1"
          labelText="APP GROUP LEADER NAME"
          labelIcon={AccountCircleIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          >
            <StyledTreeItem
              nodeId="2-3-1-1"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem
              nodeId="2-3-1-2"
              labelText="Application Name"
              labelIcon={AccountCircleIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
         </StyledTreeItem>
       </StyledTreeItem>
	   
	   
      </StyledTreeItem>
	  
    </TreeView>
  );
}
