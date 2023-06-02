import { Btn } from '../../../components/Btn/Btn';

const Product = ({ item }) => {

    const { image, name, recipe, price, _id } = item

    const ha = (item) => {
        console.log(item);

        const menuItem = {
            menuItemId: _id,
            name,
            image,
            price
        }

        console.log(menuItem);

        // todo 
        fetch(`http://localhost:5000/carts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(menuItem)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    return (
        <div className="card bg-slate-100 hover:shadow-md">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <span onClick={() => ha(item)}><Btn text="Add to cart" /></span>
                </div>
            </div>
        </div>
    );
};

export default Product;