import Item from "../item/Item"

const ItemList = ({productos}) => {
    return(
        <div style={{display:'flex', justifyContent:"space-around", alignItems:'center', flexWrap:'wrap'}}>
            {productos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}
export default ItemList