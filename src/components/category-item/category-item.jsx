import './category-item.styles.scss'

const CategoryItem=({category})=>{
     const {Image, title,id} = category;
    return(
    <div className="category-container">
    <div className='background-image' style={{backgroundImage:`url(${Image})`}} />
   <div className="category-body-container">
     <h2>{title}</h2>
     <p>Shop Now</p>
   </div>
   </div>
    )
}
export default  CategoryItem;