const User = require("../models/user")
const {Cart} = require("../models/cart")


module.exports = {
  show: (req,res) => {
    User.findAll({_id: req.params.id})
    .populate({
      path: "cart"
    })
    .then(user => {
      res.render("user/show", {user})

    })
  },

  login: (req,res) => {
    res.render("user/login", {message: req.flash("signupMessage")})
  },
  createLogin: (req, res) => {
    const login =passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })

    return login(req,res)
  },
  signUp: (req, res) => {
    red.render("user/signup"), {message: req.flash("signupMessage") )}
  },
  createSignUp: (req,res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup",
      failureFlash: true
    })
    return signup(req, res)
  },
  logout: (req,res) => {
    req.logout()
    res.redirect("/")
  }
}
