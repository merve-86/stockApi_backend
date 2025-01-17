"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/user:

const user = require("../controllers/user");
const permissions = require("../middlewares/permissions");

// URL: /users

router.route("/").get(permissions.isAdmin, user.list).post(user.create);

router
  .route("/:id")
  .get(permissions.isLogin, user.read)
  .put(permissions.isLogin, user.update)
  .patch(permissions.isLogin, user.update)
  .delete(permissions.isAdmin, user.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
