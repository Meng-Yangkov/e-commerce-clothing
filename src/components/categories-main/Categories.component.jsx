import CategoryItem from "../category-items/category-item.component";
import './categories.styles.scss';

const MainCategories = ({categories}) => {
  return(
   <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key= {category.id} category = {category}/>
      ))}
    </div>
  )
}

export default MainCategories;