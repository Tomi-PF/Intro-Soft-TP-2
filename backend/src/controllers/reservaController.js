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
    res.json(reservas)

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

const createReserva = async (req, res) => {
  const { nombre_reserva, id_ciudad, id_hotel, cant_personas, cant_habitaciones, fecha_ingreso, fecha_salida } = req.body

  if (!nombre_reserva || !id_ciudad || !id_hotel) {
    return res.status(400).json({ error: "Los campos nombre, ID de ciudad e ID de hotel son requeridos" })
  }

  try {
    const ciudadExiste = await prisma.ciudad.findUnique({
      where: {
        id: parseInt(id_ciudad)
      }
    })

    const hotelExiste = await prisma.hotel.findUnique({
      where: {
        id: parseInt(id_hotel)
      }
    })

    if(!ciudadExiste || !hotelExiste) {
      return res.status(404).json({
        error: "Ciudad u hotel no encontrados"
      })
    }

    if (new Date(fecha_salida) < new Date(fecha_ingreso)) {
      return res.status(400).json({
        error: "La fecha de salida debe ser posterior a la de ingreso"
      })
    }

    const nuevaReserva = await prisma.reserva.create({
      data: {
        nombre_reserva,
        id_ciudad: parseInt(id_ciudad),
        id_hotel: parseInt(id_hotel),
        cant_personas: parseInt(cant_personas) || 1, // default 1 persona
        cant_habitaciones: parseInt(cant_habitaciones) || 1, // default 1 habitación
        fecha_ingreso: fecha_ingreso || "No especificada",
        fecha_salida: fecha_salida || "No especificada"
      },
      include: {
        ciudad: true, // Trae datos de la ciudad
        hotel: true // Trae datos del hotel
      }
    })
    res.status(201).json(nuevaReserva)

  } catch (error) {
    res.status(500).json({
      error: "Error al crear la reserva"
    })
  }
}

module.exports = {
  getAllReservas,
  getReserva,
  createReserva
}