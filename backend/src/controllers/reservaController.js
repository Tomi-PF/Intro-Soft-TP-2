const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()

// Busca todas las reservas
const getAllReservas = async (req, res) => {
  try {
    const reservas = await prisma.reserva.findMany({
      include: {
        ciudad: true, // Trae datos de la ciudad
        hotel: true // Trae datos del hotel
      }
    })
    res.json(reserva)

  } catch (error) {
    res.status(500).json({
      error: "Error al obtener las reservas"
    })
  }
}

// Busca reserva según el id
const getReserva = async (req, res) => {
  const { id } = req.params

  try {
    const reserva = await prisma.reserva.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        ciudad: true, // Trae datos de la ciudad
        hotel: true // Trae datos del hotel
      }
    })
    res.json(reserva)

    if(reserva === null) {
      res.status(404).json({
        error: "Reserva no encontrada"
      })
    }

  } catch (error) {
    res.status(500).json({
      error: "Error al buscar la reserva"
    })
  }
}

module.exports = {
  getAllReservas,
  getReserva
}