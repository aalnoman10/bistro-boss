import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Btn } from "../../../components/Btn/Btn";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const menu = useMenu('popular');

    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Btn text={"view full menu"}/>
        </section>
    );
};

export default PopularMenu;