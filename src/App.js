import CategoryItem from '../src/components/category-items/category-item.component.jsx';
import categories from '../src/components/categories-main/categories.json';
import '../src/components/categories-main/categories.styles.scss';

const App = () => {

  return (  
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key= {category.id} category = {category}/>
      ))}
    </div>
  );
};

export default App;