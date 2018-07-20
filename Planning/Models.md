**MODELS**

C- Creating user profile<br/>
R- Breads looked at/Purchased<br/>
U- Adding things to Cart<br/>
D- Favorite Breads/Items in Cart<br/>


User {
  local :{
    email
    password
  },
Viewed: {

  }
}
<br/>
  Cart: {

  },
  Purchased: {

    ref: "Cart"
  }

}
