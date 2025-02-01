const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()

// Busca todos los hoteles
const getAllHoteles = async (req, res) => {
  try {
    const hoteles = await prisma.hotel.findMany()
    res.json(hoteles)

  } catch (error) {
    res.status(500).json({
      error: "Error al obtener los hoteles"
    })
  }
}

// Busca hotel según el id
const getHotel = async (req, res) => {
  const { id } = req.params

  try {
    const ciudad = await prisma.hotel.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    res.json(hotel)

    if(hotel === null) {
      res.status(404).json({
        error: "Hotel no encontrado"
      })
    }

  } catch (error) {
    res.status(500).json({
      error: "Error al buscar ciudad"
    })
  }
}

module.exports = {
    getAllHoteles,
    getHotel
  }