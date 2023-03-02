const prisma = require("../config/db.config")

const registerUser = async (req, res, next) => {

    const { first_name, middle_name, last_name, sex, age, race, hispanic_latino } = req.body

    const newUser = await prisma.user.create({
        data: {
            first_name,
            middle_name,
            last_name,
            sex,
            age,
            race,
            hispanic_latino
        }
    })

    res.status(201).json({ msg: "Account Register successful", data: newUser })
}

const loadUserDetails = async (req, res, next) => {
    const { id } = req.params

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!user) {
        return res.status(404).json({ msg: "404 User not Found", data: null })
    }

    res.status(200).json(user)
}

module.exports = {
    registerUser,
    loadUserDetails
}