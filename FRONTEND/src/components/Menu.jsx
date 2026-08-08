const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Truffle Mushroom Soup", desc: "Wild mushrooms, cream, truffle oil", price: "$12" },
      { name: "Burrata Caprese", desc: "Creamy burrata, heirloom tomatoes, basil", price: "$14" },
      { name: "Crispy Calamari", desc: "Lemon aioli, fresh parsley", price: "$13" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Grilled Lamb Chops", desc: "Rosemary jus, roasted vegetables", price: "$34" },
      { name: "Pan-Seared Salmon", desc: "Lemon butter, asparagus, baby potatoes", price: "$28" },
      { name: "Wild Mushroom Risotto", desc: "Parmesan, white wine, chives", price: "$22" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Molten Chocolate Cake", desc: "Vanilla bean gelato", price: "$10" },
      { name: "Crème Brûlée", desc: "Vanilla custard, caramelized sugar", price: "$9" },
      { name: "Tiramisu", desc: "Espresso, mascarpone, cocoa", price: "$9" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="section-head">
        <p className="eyebrow">Our Menu</p>
        <h2>Dishes crafted to delight</h2>
        <p>Seasonal ingredients, timeless recipes, and a touch of creativity.</p>
      </div>

      <div className="menu-grid">
        {menuItems.map((group) => (
          <div className="menu-col" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="menu-list">
              {group.items.map((item) => (
                <li key={item.name} className="menu-item">
                  <div className="menu-item-head">
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
