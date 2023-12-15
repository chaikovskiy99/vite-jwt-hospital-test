import { useEffect, useState } from "react";
import axios from 'axios';

const UserList = () => {
    const [data, setData] = useState([])
	useEffect(() => {
		const getAll = async () => {
			const token = localStorage.getItem("access_token");
			const res = await axios("http://localhost:3100/users/getAll", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (res.status > 200) {
				console.log(res.data);
                setData(res.data)
			} else {
				console.log(res.statusText);
			}
		};
		getAll();
	}, []);

    

	return (<div>{data && data.length && data.map(d =>{
        (<h1>{d.first_name}</h1>)
    })}</div>)
};

// #endregion

export default UserList;
