export const getViews = async (req, res) => {
	res.send({ message: 'ok view' })
}

export const getProfile = async (req, res) => {
	const user = req.user
	res.send(`<h1>Welcome 👋, ${user.username}</h1>`)
}
