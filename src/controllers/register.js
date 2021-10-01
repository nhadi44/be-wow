const { register } = require('../../models')

// Create User
exports.registerUser = async (req, res) => {
    try {
        const data = req.body;

        const createData = await register.create(data)

        res.send({
            status: 'success',
            data: createData
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server error'
        })
    }
}

// Find All
exports.getRegisters = async (req, res) => {
    try {
        const registers = await register.findAll({
            attributes: {
                exclude: ['password', 'role', 'createdAt', 'updatedAt']
            }
        });

        res.send({
            status: 'success',
            data: {
                registers,
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server error'
        })
    }
}

// find One
exports.getRegister = async (req, res) => {
    try {
        const { id } = req.params
        const registers = await register.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['password', 'fullName', 'role', 'createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                registers
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server error'
        })
    }
}

// Update registers data
exports.updateRegister = async (req, res) => {
    try {
        const { id } = req.params

        const updateData = req.body

        await register.update(updateData, {
            where: {
                id: id
            }
        })
        res.send({
            status: 'success',
            message: `Update user id ${id} finished`,
            data: updateData
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Delete data register
exports.deleteRegister = async (req, res) => {
    try {
        const { id } = req.params

        await register.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: `Data register id: ${id} deleted`
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server error'
        })
    }
}