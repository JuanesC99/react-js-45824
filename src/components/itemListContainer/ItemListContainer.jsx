import React from 'react'
//import hook
import {useState, useEffect} from 'react'
import {getProducts} from '../../mock/mock.js'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
function ItemListContainer({greeting}) {
  const [productos, setProductos]=useState([])
  const  [loading, setLoading] = useState(false)
  const {categoryId} = useParams()
  
  // useEffect(()=>{
  //   setLoading(true)
  //   getProducts()
  //   .then((res)=>{
  //     if(categoryId){
  //       setProductos(res.filter((prod)=> prod.category === categoryId))
  //     }else{
  //       setProductos(res)
  //     }
  //   })
  //   .catch((error)=> console.log(error, 'todo mal'))
  //   .finally(()=> setLoading(false))
  // },[categoryId])



  //FIREBASE!!!!

  useEffect(()=>{
    setLoading(true)
    //Conectarnos con nuestra collection
    const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
    //pedimos los documentos
    getDocs(productsCollection)
    .then((res)=>{
      const list = res.docs.map((product)=>{
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProductos(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[categoryId])

  
  if(loading){
    return(
    
         <Loader/>
      
    )
  }

  return (
    <div>
      {/* si quiero que salga la categoria */}
       {
       categoryId 
       ?<h1 className='fst-italic text-danger-emphasis'>{greeting} <span style={{color:'violet'}}>{categoryId}</span></h1>
       :<h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
       }
       {/* si no quiero que salga la categoria */}
       {/* <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1> */}
          <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer 
