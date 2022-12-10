import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { DotLoader } from "react-spinners"
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'Productos')
        const q = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                console.log(productosDB)

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])



    return (
        <div className="container my-5 ">
            {
                loading
                    ? <div className="position-absolute top-50 start-50">

                        <DotLoader
                            color="#fd0000"
                            size={100}
                        />
                    </div>
                    : <div className="d-inline-flex p-4">
                        <ItemList productos={productos} />
                    </div>
            }
        </div>
    )
}

export default ItemListContainer