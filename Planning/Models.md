**MODELS**

C- Creating user profile
R- Breads looked at/Purchased
U- Adding things to Cart
D- Favorite Breads/Items in Cart


User {
  local :{
    email
    password
  },
Viewed: {

  }
}

  Cart: {

  },
  Purchased: {

    ref: "Cart"
  }

}
