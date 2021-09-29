import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface postProps{
  posts: post[]
}

interface post{
  author: string;
  download_url: string;
  id: number;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard: React.FC<postProps> = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {props.posts.map((post) =>(
        <Card sx={{ maxWidth: 445,marginTop: 3 }}
        key = {post.id}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.author}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={post.download_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          For the month of August, Jarritos is curating the Food & Drink Topic. From poolside party snacks to picnics on the beach — submit your summer food and drink pictures to the Topic for a chance to be featured.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Best Photo:</Typography>
            <Typography paragraph>
            Submit your best culinary photography directly to the topic for a chance to be featured throughout the month of August.

            Head over to the Food and Drink Topic on Unsplash
            Hit the “Submit to Food & Drink” button
            Submit any photos you’ve shot that meet our Submission Guidelines.
            Your photo(s) will be reviewed as usual, but with the extra opportunity 
            to be selected by the Jarritos team to be featured in the Food & Drink Topic and a higher chance of being promoted on the homepage Editorial feed.
            </Typography>
           
          </CardContent>
        </Collapse>
      </Card>
      ))}
    </div>
  );
}

export default PostCard;