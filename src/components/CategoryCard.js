import card from 'components/ViewCard'
import corpsLogo from 'assets/img/corp.jpg'
import vegetableLogo from 'assets/img/vegetable.jpg'
import fruitLogo from 'assets/img/fruit.png'
import pesticidesLogo from 'assets/img/pesticides.jpeg'
import poultryLogo from 'assets/img/poultry.jpg'
import meatLogo from 'assets/img/meat.png'
import fishLogo from 'assets/img/fish.jpg'
import othersLogo from 'assets/img/others.png'
import { Row, Carousel, Button } from 'react-bootstrap'
const CategoryCard = () => {
    return (
        <Row className='SignInAndUp'>
            <Carousel interval='2500' nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}	>
                <Carousel.Item>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=শস্যওবীজ")}>
                        {card(corpsLogo, 'শস্য ও বীজ', '/category')}
                    </Button>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=শাক-সবজি")}>
                        {card(vegetableLogo, 'শাক-সবজি', '/category')}
                    </Button>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=ফল")}>
                        {card(fruitLogo, 'ফল', '/category', "fruit")}
                    </Button>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=সারওকীটনাশক")}>
                        {card(pesticidesLogo, 'সার ও কীটনাশক', '/category')}
                    </Button>
                </Carousel.Item>
                <Carousel.Item>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=পোল্ট্রিজাতপণ্য")}>
                        {card(poultryLogo, 'পোল্ট্রিজাত পণ্য', '/category')}
                    </Button>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=মাংস")}>
                        {card(meatLogo, 'মাংস', '/category')}
                    </Button>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=মাছ")}>
                        {card(fishLogo, 'মাছ', '/category')}
                    </Button>
                    <Button className='categoryCard'
                        onClick={(e) => localStorage.setItem('search', "category=অন্যান্য")}>
                        {card(othersLogo, 'অন্যান্য', '/category')}
                    </Button>
                </Carousel.Item>
            </Carousel>
        </Row>
    )
}

export default CategoryCard