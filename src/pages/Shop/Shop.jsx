import shopImg from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Product from './Product/Product';
import useMenu from '../../hooks/useMenu';

const Shop = () => {

    const salads = useMenu("salad");
    const pizzas = useMenu("pizza");
    const soups = useMenu("soup");
    const desserts = useMenu("dessert");
    const drinks = useMenu("drinks");

    const handle = (index) => {
        console.log(index);
    }

    return (
        <div>
            <Cover coverImg={shopImg} coverHeading={"our shop"} coverDescribtion={"Would you like to try a dish?"} />
            <div className='md:w-10/12 mx-auto py-10'>
                <Tabs onSelect={(index) => handle(index)}>
                    <TabList className='uppercase'>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-8">
                            {salads.map(item => <Product key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-8">
                            {pizzas.map(item => <Product key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-8">
                            {soups.map(item => <Product key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-8">
                            {desserts.map(item => <Product key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-8">
                            {drinks.map(item => <Product key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;