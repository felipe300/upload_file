export const getAllProducts = async (req, res) => {
	res.send("Ruta get productos")
}

export const addProductos = (req, res) => {
	res.status(201).send("Ruta post productos.")
}