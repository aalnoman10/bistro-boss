import { useState, useEffect } from "react";

const useMenu = (category) => {

    const [datas, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://bistro-boss-server-lac.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (category) {
        const specufiq = datas.filter(pd => pd.category === category)
        return specufiq;
    } else {
        return loading
    }
};

export default useMenu;