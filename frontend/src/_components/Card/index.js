import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Detail } from '../../Detail'
import { assets } from '../../_helpers'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    alignItems: 'center',
    margin: '0 20px',
  },
})
export default function ImgMediaCard(props) {
  const classes = useStyles()
  const { title, src, fecha, desc } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={assets(src)}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            const name = 'Carmen'
            console.log('Hello ' + name)
          }}
          size="small"
          color="primary"
        >
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
