import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    alignItems: 'center',
    margin: '0 20px',
  },
})
export default function ImgMediaCard(props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Libros"
          height="140"
          image={props.src}
          title="Libros"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Esto es una tarjeta para un evento. Aqui se inserta la descripcion y
            detalles del Evento.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
