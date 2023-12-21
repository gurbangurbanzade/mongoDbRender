const router = require("express").Router();
const userControllers = require("./../controllers/userControllers");

router.post("/users", userControllers.postUser);
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getUserById);
router.delete("/users/:id", userControllers.getUserDeleteById);
router.patch("/users/:id", userControllers.getUserUpdate);
router.put("/users/:id", userControllers.getUserPut);

module.exports = router;

// router.post("/posts", async (req, res) => {
// 	const post = new Post({
// 		title: req.body.title,
// 		content: req.body.content,
// 	})
// 	await post.save()
// 	res.send(post)
// })
