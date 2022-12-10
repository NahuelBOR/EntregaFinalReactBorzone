import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetails/ItemDetails"
import { RiseLoader } from "react-spinners"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = ({ darkMode }) => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()





    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'Productos', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className="container my-3 text-center">
            {
                loading
                    ?
                    <div className="">

                        <RiseLoader
                            color="hsla(275, 67%, 53%, 0.97)"
                            cssOverride={{}}
                            margin={34}
                            size={58}
                            speedMultiplier={2}
                        />
                    </div>
                    : <div className="d-inline-flex p-4">
                        <ItemDetail item={item} />
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer