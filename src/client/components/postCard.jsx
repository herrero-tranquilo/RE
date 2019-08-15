import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard(props) {
  const postData = {
    id: props.postData.id,
    area: props.postData.area,
    date: props.postData.data,
    title: props.postData.title,
    content: props.postData.content,
    image: props.postData.image
  };
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const avatarClick = (event) => {
    event.preventDefault();
  }
  const moreVertClick = (event) => {
    event.preventDefault();
  }
  const favoriteClick = (event) => {
    event.preventDefault();
  }
  const shareClick = (event) => {
    event.preventDefault();
  }
  const handleExpandClick = (event) => {
    event.preventDefault();
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Recipe"
            className={classes.avatar}
            onClick={avatarClick}
          >
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings" onClick={moreVertClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={postData.area}
        subheader={postData.date}
      />
      <CardMedia className={classes.media} image={postData.image} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {postData.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" onClick={favoriteClick}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share" onClick={shareClick}>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{postData.content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}