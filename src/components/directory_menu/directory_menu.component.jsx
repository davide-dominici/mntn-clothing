import CategoryItem from '../category_item/category_item.component';
import './directory_menu.styles.scss';

const DirectoryMenu = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default DirectoryMenu;