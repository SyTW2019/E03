import React, { Component } from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { assets } from '../../_helpers'

export class DetailEvent extends Component {
  render() {
    const { title, src, fecha, desc } = this.props
    return (
      <div>
        <CardMedia
          component="img"
          alt="Concierto"
          height="140"
          image={assets(src)}
          title={title}
        />
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{title}</p>
              <p class="subtitle is-6">{fecha}</p>
            </div>
          </div>

          <div class="content">{desc}</div>
        </div>
      </div>
    )
  }
}
