// import bcrypt from 'bcrypt';

// const hashPassword = (password) => {
//     const salt = bcrypt.genSaltSync(10);
//     return bcrypt.hashSync(password, salt);
// };

// export default hashPassword;


const crypto = require("crypto")
function generatePassword(password) {
    const salt = crypto.randomBytes(32).toString('hex')
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return {
        salt: salt,
        hash: genHash
    }
}
function validPassword(password, hash, salt) {
    const checkHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === checkHash
}