import { Link } from "react-router-dom";
import { Btn } from "../../../components/Btn/Btn";
import Cover from "../Cover/Cover";
import ProductItems from "../ProductItems/ProductItems";

const MenuSection = ({ title, img, text, items }) => {
    return (
        <section className="pt-6 pb-10">
            {title && <Cover coverImg={img} coverHeading={title} coverDescribtion={text} />}
            <div className="grid md:grid-cols-2 gap-10 pt-8">
                {
                    items.map(item => <ProductItems
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <Link to="/shop"><Btn text="view full menu" /></Link>
        </section>
    );
};

export default MenuSection;