import Cover from "../Shared/Cover/Cover";
import banner3 from '../../assets/menu/banner3.jpg'
import dessert from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuSection from "../Shared/MenuSection/MenuSection";

const Menu = () => {

    const offeredItems = useMenu('offered')
    const dessertItems = useMenu('dessert')
    const saladItems = useMenu('salad')
    const soupItems = useMenu('soup')
    const pizzaItems = useMenu('pizza')

    console.log(saladItems);

    return (
        <div>
            <Cover coverImg={banner3} coverHeading='our menu' coverDescribtion={'orem ipsum dolor sit, amet '} />
            <SectionTitle subHeading={"Don't miss"} heading={"today's offer"} />
            <MenuSection items={offeredItems} />
            <MenuSection img={pizza} items={pizzaItems} title={'Pizza'} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuSection img={salad} items={saladItems} title={'salads'} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuSection img={soup} items={soupItems} title={'soups'} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuSection img={dessert} items={dessertItems} title={'desserts'} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
        </div>
    );
};

export default Menu;