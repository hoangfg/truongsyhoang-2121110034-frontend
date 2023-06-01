import React from 'react'

export default function CategoryMenu(props) {
  // console.log(props)
  const categories = props.categories;
  var myView = categories.map((category) => (
    <li key={category.id}><a href="#st" >{category.attributes.categoryName}</a></li>
  ))
  // console.log(categories)
  return (
    <div className="well well-small">
        <nav className="megamenu">
            <ul className="nav nav-list">
          { myView}
            </ul>
        </nav>
    </div>



  )
}
