
import { MdKeyboardArrowLeft } from "react-icons/md";

const ProductFilter = ({sortBy, handleSortByChange }) => {

  return (
    <div className='filter-section'>
      <div className='hide-content'>
        <p>3685 items</p>    
        <div className='hide'>
          <MdKeyboardArrowLeft className='icon-hide'/>
          <p>Hide all</p>
        </div>
      </div>
      <select value={sortBy} onChange={handleSortByChange}>
        <option value="">RECOMMENDED</option>
        <option value="newest">Newest First</option>
        <option value="popular">Popular</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
