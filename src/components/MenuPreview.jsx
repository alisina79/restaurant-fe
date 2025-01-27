import React from "react";
import "../css/menuPreview.css";

function MenuPreview() {
  const menuItems = [
    {
      name: "Qabuli Palow",
      description: "The most dilicious dish",
      img_url:
        "https://www.myspicykitchen.net/wp-content/uploads/2014/02/Kabuli-Pulao-1.jpg",
    },
    {
      name: "Manto",
      description: "A perfect homemade dish",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRTR_-pNpZOkFPRR0Q_SvbMc8APkQ2czm6A&s",
    },

    {
      name: "Chopan Kabab",
      description: "Enjoy your mouth",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hEuh_qQuFU3s8bGrYstKLvUKbAi-Amqsgg&s",
    },
    {
      name: "Chainaky",
      description: "An old and famous Afghan dish",
      img_url:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <section className="menu__preview__sec">
      <h2>Traditional Dishes</h2>
      <div id="menu_items">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu_item"
            style={{
              background: `url(${item.img_url})`,
              backgroundSize: "fit-content",
            }}
          >
            <div id="menu_item_desc">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPreview;
