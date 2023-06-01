import { Btn } from '../../../components/Btn/Btn';

const Product = ({ item }) => {

    const { image, name, recipe } = item

    return (
        <div className="card bg-slate-100 hover:shadow-md">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <Btn text="Add to cart" />
                </div>
            </div>
        </div>
    );
};

export default Product;