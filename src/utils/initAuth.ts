// import { store } from "../store";
// import { addUserInfo } from "../features/user/user-slice";

// // Восстановление пользователя из localStorage
// export function initAuthFromLocalStorage() {
//   const email = localStorage.getItem("email");
//   const password = localStorage.getItem("password");
//   const auth = localStorage.getItem("auth") === "true";

//   if (auth && email && password) {
//     store.dispatch(addUserInfo({ email, password }));
//   }
// }