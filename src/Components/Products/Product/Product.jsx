import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({ product }) => {

    const style = useStyles()

    return (
        <Card className={style.root}>
            <CardMedia className={style.media} image='' title={product.name}>
                <CardContent>
                    <div className={style.CardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="h2" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={style.CardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </CardMedia>
        </Card>
    )
}

export default Product