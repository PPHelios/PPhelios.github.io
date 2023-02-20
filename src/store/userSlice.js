import produce from "immer";
import { apiRequest } from "./apiRequest";
export const userSlice = (set, get) => ({
  user: {
    cart:[]
  },
  allUsers: [],
  getAllUsers: async () => {
    const fetchedUsers = await apiRequest(
      `http://localhost:8000/users/allusers`,
      "GET",null,get().user.token
    );
    set((state) => ({ allUsers: fetchedUsers }));
    console.log(fetchedUsers);
  },

verifyUser: async() =>{
  try{
          const data = await apiRequest("http://localhost:8000/users/refreshToken", "POST")
    const user = data.user
set(
        produce((state) => {
          state.user = {...get().user, token: data.token, email:user.email, firstName:user.firstName, _id:user._id, cart:user.cart};
        })
      )
  } catch(err){
    set(
      produce((state) => {
        state.user = {...get().user, token: null};
      })
    )
    throw new Error(err.message);

  }
  
},
  

  addUser: async (newUser) => {
    const res = await apiRequest(
      "http://localhost:8000/users/signup",
      "POST",
      newUser
    );
    console.log(res);
    return res;
  },


  editUser: async (formData) => {
    const userId = get().user._id
    const usersBeforeSubmit = get().allUsers;

    const newUsersList = get().allUsers.filter((user) => user._id !== userId);
    newUsersList.push(formData);
    console.log(newUsersList);
      set((state) => ({ allUsers: newUsersList }));
    try {
      const data = await apiRequest(
        `http://localhost:8000/users/edituser`,
        "PUT",
        { formData },
get().user.token
      );
    } catch (err) {
      set((state) => ({ allUsers: usersBeforeSubmit }));
      throw new Error(err.message);
    }
  },
  deleteUser: async ({ id }) => {
    const usersBeforeSubmit = get().allUsers;
    const newUsersList = get().allUsers.filter((user) => user._id !== id);
    set((state) => ({ allUsers: newUsersList }));
    try {
      const data = await apiRequest(
        "http://localhost:8000/users/deleteuser",
        "DELETE",
        { id }
      );
      return data.message;
    } catch (err) {
      set((state) => ({ users: usersBeforeSubmit }));
      throw new Error(err.message);
    }
  },

  login: async (userData) => {
    try{
      const user = await apiRequest("http://localhost:8000/users/login",
    "POST",
    userData)

    if (user){
      console.log("Logged in" + user.firstName)
      set(
      produce((state) => {
        state.user = {...get().user, token: user.token, email:user.email, firstName:user.firstName, _id:user._id, cart:user.cart};
      })
    )
    }
    } catch(err){
      throw new Error(err.message);
    }
    

     
  },
   
  logout: async () => {
    console.log("trying Logg Out")
    
    const res = await apiRequest("http://localhost:8000/users/logout", "GET",null,get().user.token)
console.log(res)
      set(
      produce((state) => {
        state.user = {cart:[]};
      })
    )
    set(
      produce((state) => {
        state.allUsers = [];
      })
    )
    console.log("Logged Out!!!")

      window.localStorage.setItem("logout", Date.now());

  },

fetchUserDetails: async() => {
  const userData = await apiRequest("http://localhost:8000/users/userdata", "GET",null,get().user.token) 
  return userData
},


  updateDbCart: async (data) => {
    if(get().user.token){
    const res = await apiRequest(
      `http://localhost:8000/users/updatecart`,
      "PUT",
      data
    );
    return res;
    } else {
      return data.cart
    }
  },
  addItemToCart: async (product) => {
    console.log(get().user._id);
    const cartItems = get().user.cart;
    const existingCartItem = cartItems.findIndex(
      (item) => item._id === product._id
    );
    if (existingCartItem !== -1) {
      set(
        produce((state) => {
          state.user.cart[existingCartItem].quantity =
            state.user.cart[existingCartItem].quantity + 1;
        })
      );
    } else {
      set(
        produce((state) => {
          state.user.cart.push({ ...product, quantity: 1 });
        })
      );
    }
    
      try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: get().user.cart,
      });
    } catch (err) {
      set((state) => ({ user: { ...get().user, cart: cartItems } }));
    
    }
    
  },
  increaseCartItem: async (itemId) => {
    const cartItems = get().user.cart;
    const existingCartItem = cartItems.findIndex((item) => item._id === itemId);
    set(
      produce((state) => {
        state.user.cart[existingCartItem].quantity =
          state.user.cart[existingCartItem].quantity + 1;
      })
    );
    try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: get().user.cart,
      });
    } catch (err) {
      set((state) => ({ user: { ...get().user, cart: cartItems } }));
    }
  },
  decreaseCartItem: async (itemId) => {
    const cartItems = get().user.cart;
    let itemQuantity = cartItems.find((item) => item._id === itemId).quantity;

    const existingCartItem = cartItems.findIndex((item) => item._id === itemId);
    if (itemQuantity > 1) {
      set(
        produce((state) => {
          state.user.cart[existingCartItem].quantity =
            state.user.cart[existingCartItem].quantity - 1;
        })
      );
    } else {
      console.log("delete");
      const deleteItem = get().deleteCartItem;
      deleteItem(itemId);
    }
    try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: get().user.cart,
      });
    } catch (err) {
      set(
        produce((state) => {
          state.user.cart = cartItems;
        })
      );
    }
  },
  deleteCartItem: async (itemId) => {
    const cartItems = get().user.cart;
    const filteredCartItems = cartItems.filter((item) => item._id !== itemId);
    set(
      produce((state) => {
        state.user.cart = filteredCartItems;
      })
    );
    try {
      const updatedCart = await get().updateDbCart({
        userId: get().user._id,
        cart: filteredCartItems,
      });
      console.log("Cart Updated");
    } catch (err) {
      set(
        produce((state) => {
          state.user.cart = cartItems;
        })
      );
    }
  },
  cartTotalItems: () => {
    const cartItems = get().user.cart;
    return cartItems.reduce((total, next) => total + next.quantity, 0);
  },
  cartTotalItemsPrice: () => {
    const cartItems = get().user.cart;
    return cartItems.reduce(
      (total, next) => total + next.quantity * next.discountedPrice,
      0
    );
  },
  cartBeforeDiscountTotalItemsPrice: () => {
    const cartItems = get().user.cart;
    return cartItems.reduce(
      (total, next) => total + next.quantity * next.price,
      0
    );
  },
});

// set((state) => ({ cart: newcart }))

// set(produce((state) =>  state.cart[index].q= newq ));
