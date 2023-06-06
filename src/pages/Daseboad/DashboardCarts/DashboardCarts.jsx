import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCarts from "../../../hooks/useCarts";

const DashboardCarts = () => {

    const [, cart] = useCarts();

    const sum = cart.reduce((pre, cur) => cur.price + pre, 0);

    return (
        <div>
            <SectionTitle subHeading="urry Up!" heading={'MANAGE ALL ITEMS'} />
            <div className="grid place-items-center">
                <div className="bg-white p-8 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-semibold uppercase">total items : {cart.length}</h3>
                        <div className="flex items-center space-x-2">
                            <h4>total Price : $ {sum}</h4>
                            <button className="btn bg-yellow-600 normal-case">pay</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="">
                                    <th> # </th>
                                    <th>Items Image</th>
                                    <th>Items Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* body  */}
                                {cart.map((item, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td><img className="w-16 h-16 rounded-lg" src={item?.image} alt="" /></td>
                                    <td><h3 className="text-xl"> Name{item?.name}</h3></td>
                                    <td><h6 className="text-end">$ {item?.price}</h6></td>
                                    <td><button className="btn btn-ghost btn-xs">delete</button></td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCarts;