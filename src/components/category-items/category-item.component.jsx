import './category-item.component.styles.scss';

const CategoryItem = ({category}) => {
  const {id,title,imageUrl} = category;

  return(
    <div key={id} className="category-container">
    <div className="background-image" style={{
      background : `url(${imageUrl})`
    }}/>
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
  )
  
}

export default CategoryItem;