// import { dataProducts } from "../data/data";

// export default function getItemProd() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(dataProducts);
//     }, 2000);
//   });
// }

// export function getDetailItemProd(id) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let itemReq = dataProducts.find((item) => item.id === Number(id));

//       if (itemReq) {
//         res(itemReq);
//       } else {
//         rej(new Error("No existe el id"));
//       }
//     }, 2000);
//   });
// }

// export function getItemProdCategory(category) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let itemCategoryReq = dataProducts.filter(
//         (item) => item.category === category
//       );

//       if (itemCategoryReq) {
//         res(itemCategoryReq);
//       } else {
//         rej(new Error("No existe la categoria"));
//       }
//     }, 2000);
//   });
// }
