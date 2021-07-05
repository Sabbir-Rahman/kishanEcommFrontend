import Grid from '@material-ui/core/Grid'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'চাল', description: 'নাজিরশাইল', price: '500'},
    { id: 2, name: 'ডাল', description: 'মুগ', price: '500'},
]

const Products = () => {
    return(
        <main>
            <Grid container justify='center' spacing={4}>
               { products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} lg={3}>
                        <Product />
                    </Grid>
               ))}
            </Grid>
        </main>
    )
}

export default Products