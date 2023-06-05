import { useContext } from 'react';
import { Btn } from '../../../components/Btn/Btn';
import { AuthContext } from '../../../Proveider/AuthProveider';
import { Navigate, useLocation } from 'react-router-dom';
import useCarts from '../../../hooks/useCarts';

const Product = ({ item }) => {

    const { image, name, recipe, price, category, _id } = item
    const { user } = useContext(AuthContext);
    const [, , refetch] = useCarts()
    const location = useLocation();

    const handlerAddTocart = () => {
        if (user && user?.email) {
            const menuItem = {
                menuItemId: _id,
                email: user?.email,
                name,
                category,
                image,
                price
            }

            fetch(`http://localhost:5000/carts`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(menuItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        alert("item added successfull");
                    }
                });
        }
        else {
            const sureConframe = confirm("Login to Add item");
            if (sureConframe) {
                console.log(sureConframe);
                <Navigate to='/login' state={{ from: location }} replace={true} />
            }
        }
    }

    return (
        <div className="card bg-slate-100 hover:shadow-md">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <span onClick={handlerAddTocart}><Btn text="Add to cart" /></span>
                </div>
            </div>
        </div>
    );
};

export default Product;