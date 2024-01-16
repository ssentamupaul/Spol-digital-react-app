// import React, { useState, useEffect } from "react";
// import CategoryListItem from "./CategoryListItem";
// // import electroicImage from '../assets/product.png';
// // import { addCategorySubject } from "../Cart/Store";
// import { cartItemAddedSubject } from "../Cart/store";
// import Roland from "../img/Roland.jpg";
// import piano from "../img/yamapiano.jpg";
// import solo from "../img/solo.jpg";
// import base from "../img/base G.jpg";
// import Ev from "../img/Ev speaker.jpg";
// import beam from "../img/base beam.jpg";
// import Tamedrum from "../img/Tamadrum.jpg";
// import Yamahadrum from "../img/drum.jpg";
// import mixer from "../img/mix.jpg";
// import microphone from "../img/microphone.jpeg";
// import electroicImage from "../img/x.jpg";
// const MasterDetail = ({ onActiveCategoryChange }) => {
//   const [activeItem, setActiveItem] = useState(activeItem);
//   const [categories, setCategories] = useState([
//     {
//       id: 0,
//       name: "yamaha",
//       category: "piano",
//       description: "Multipurpose piano",
//       image: piano,
//       price: "Get yourself one at shs.1000000",
//     },
//     {
//       id: 1,
//       name: "yamaha",
//       category: "piano",
//       description: "Multipurpose piano",
//       image: piano,
//       price: "Get yourself one at shs.1000000",
//     },
//     {
//       id: 2,
//       name: "Roland",
//       category: "piano",
//       description: "Angellic voices",
//       image: Roland,
//       price: "Get yourself one at shs.2400000",
//     },
//     {
//       id: 3,
//       name: "solo guitor",
//       category: "Guitors",
//       description: "8 strings",
//       image: solo,
//       price: "Get yourself one at shs.42000",
//     },
//     {
//       id: 4,
//       name: "Base guitor",
//       category: "Guitors",
//       description: "Good Quality HD Sound",
//       image: base,
//       price: "Get yourself one at shs.300000",
//     },
//     {
//       id: 5,
//       name: "Ev-100v-h out-put",
//       category: "Speakers",
//       description: "Good Quality HD Sound",
//       image: Ev,
//       price: "Get yourself one at shs.20000",
//     },
//     {
//       id: 6,
//       name: "Base beam 700v-h out-put",
//       category: "Speakers",
//       description: "Bbase sound amplified",
//       image: beam,
//       price: "Get yourself one at shs.2300000",
//     },

//     {
//       id: 7,
//       name: "Tama-strong drums",
//       category: "Drums",
//       description: "Double skined drums of product tama",
//       image: Tamedrum,
//       price: "Get yourself one at shs.1000,000",
//     },
//     {
//       id: 8,
//       name: "Yamaha-drums",
//       category: "Drums",
//       description: "Super sound",
//       image: Yamahadrum,
//       price: "Get yourself one at shs.3300,000",
//     },
//     {
//       id: 9,
//       name: "Mixers",
//       category: "Sound",
//       description: "Super fast computers",
//       image: mixer,
//       price: "Get yourself one at shs.1500000",
//     },
//     {
//       id: 9,
//       name: "Mixers",
//       category: "Sound",
//       description: "Super fast computers",
//       image: mixer,
//       price: "Get yourself one at shs.1500000",
//     },

//     {
//       id: 10,
//       name: "Micro phones",
//       category: "Entertainment",
//       description: "Good sound",
//       image: microphone,
//       price: "Get yourself one at shs.200000",
//     },
//   ]);

//   useEffect(() => {
//     console.log("Use effect execued");
//     setTimeout(() => {
//       const div = document.getElementById("piano");
//       const divInnerHTML = div.innerHTML;
//       div.innerHTML = divInnerHTML + "_changed";
//     }, 1000);
//   }, [categories]);

//   cartItemAddedSubject.subscribe(() => {
//     addCategory();
//   });

//   const handleChildClick = (id, isActive) => {
//     let activeItem = null;
//     if (isActive) {
//       activeItem = id;
//     }
//     setActiveItem((previousValue) => {
//       return activeItem;
//     });
//     onActiveCategoryChange(activeItem);
//   };

//   const addCategory = () => {
//     const newCategory = {
//       name: "Edutainment",
//       numberOfItemsInStock: 1,
//       image: electroicImage,
//     };

//     const tempValue = [...categories, newCategory];
//     setCategories(tempValue);
//   };
//   return (
//     <ol className="list-group">
//       {categories
//         .filter((category) => category.numberOfItemsInStock > 0)
//         .map((category) => {
//           return (
//             <CategoryListItem
//               key={category.name}
//               id={category.name}
//               category={category}
//               numberOfItemsInStock={category.numberOfItemsInStock}
//               onChildClick={handleChildClick}
//               activeItem={activeItem}
//             />
//           );
//         })}
//     </ol>
//   );
// };
// export default MasterDetail;

import React, { Component } from "react";
import CategoryListItem from "./CategoryListItem";
// import axios from "axios";
// import electroicImage from '../img/product.png';
export default class MasterDetail extends Component {
  state = {
    activeItem: "piano",
    categories: [
      {
        name: "piano",
        numberOfItemsInStock: 3,
      },
      {
        name: "Guitors",
        numberOfItemsInStock: 2,
        image: "",
      },
      {
        name: "Speakers",
        numberOfItemsInStock: 2,
        image: "",
      },
      {
        name: "Drums",
        numberOfItemsInStock: 2,
        image: "",
      },

      {
        name: "Sound",
        numberOfItemsInStock: 2,
        image: "",
      },
    ],
  };
  handleChildClick = (id, isActive) => {
    let activeItem = null;
    if (isActive) {
      activeItem = id;
    }
    this.setState({ activeItem });
    this.props.onActiveCategoryChange(activeItem);
  };
  render() {
    return (
      <ol className="list-group">
        {this.state.categories
          .filter((category) => category.numberOfItemsInStock > 0)
          .map((category) => {
            return (
              <CategoryListItem
                key={category.name}
                id={category.name}
                category={category}
                numberOfItemsInStock={category.numberOfItemsInStock}
                onChildClick={this.handleChildClick}
                activeItem={this.state.activeItem}
              />
            );
          })}
      </ol>
    );
  }
}
