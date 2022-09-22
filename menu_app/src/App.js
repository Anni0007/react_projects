import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]

function App() {
  const [menuItems, setMeniItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if (category === 'all') {
      setMeniItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category ===category)
    setMeniItems(newItems)
  }
  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='undeline'></div>
          <Categories filterItems={filterItems} categories={categories}/>
          <Menu items={menuItems}/>
        </div>
      </section>
    </main>
  )
}

export default App;
