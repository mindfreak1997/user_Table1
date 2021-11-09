import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Maintable() {
    const [data, setdata] = useState([])
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')
    const [searchData, setnewdata] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setdata(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                alert(err.message)
                setError('No data found')
            })
    }, [])
    const find = () => {
        const result = data.filter(ele => {
            return ele.name.toLowerCase().includes(search)
        })
        setnewdata(result)
        console.log(result)

    }
    const handleChange = (e) => {
        setSearch(e.target.value)
        find()
    }
    return (
        <div>
            <input type='search' placeholder='search by name' value={search} onChange={handleChange} />


            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (search ? searchData : data).map(ele => {
                            return (
                                <tr >
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.address.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            )


        </div>
    )
}

export default Maintable
