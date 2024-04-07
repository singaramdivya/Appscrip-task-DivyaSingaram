import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Sidebar = ({ idealFor, handleIdealForChange, category, handleCategoryChange, sortBy, handleSortByChange }) => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className='sidebar-section'>
      <label>
        
        <input type="checkbox" /> Customizable
      </label>
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>IDEAL FOR</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
      {showCategories && (
        <div>
            <p className='text'>Deselect all</p>
          <label>
            <input type="checkbox" name="men" checked={category.men} onChange={handleCategoryChange} />
            Men
          </label>
          <br />
          <label>
            <input type="checkbox" name="women" checked={category.women} onChange={handleCategoryChange} />
            Women
          </label>
          <br />
          <label>
            <input type="checkbox" name="kids" checked={category.kids} onChange={handleCategoryChange} />
            Kids
          </label>
          <br />
        </div>
      )}
      <br />
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>OCCASSION</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
      <br/>
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>WORK</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
      <br/>
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>FABRIC</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
      <br/>
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>SEGMENT</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
      <br/>
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>SUITABLE FOR</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
      <br/>
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>RAW MATERIALS</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
      <br/>
      <div className='ideal-dropdown'>
        <div className='dropdown-heading'>
            <h4>PATTERN</h4>
            <div>
                <button value={idealFor} onChange={handleIdealForChange} onClick={toggleCategories}>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>   
      </div>
    </div>
  );
};

export default Sidebar;
