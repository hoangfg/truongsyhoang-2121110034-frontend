import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryMenu(props) {
  // console.log(props)
  const categories = props.categories;
  const handleFilterByCategory = props.handleFilterByCategory;
  // console.log(handleFilterByCategory)
  var myView = categories.map((category) => (
    <li key={category.id}>
      <Link to="/product" onClick={handleFilterByCategory}>
        {category.attributes.categoryName}
      </Link>
    </li>
  ));
  // console.log(categories)
  return (
    <div className="well well-small">
      <nav className="megamenu">
        <ul className="nav nav-list">
          <li >
            <Link to="/product" onClick={handleFilterByCategory}>
              All Categories
            </Link>
          </li>
          {myView}
        </ul>
      </nav>
    </div>
  );
}
