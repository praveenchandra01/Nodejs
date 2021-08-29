const register = function(name) {
    console.log(`${name} has been successfully registered`)
}
const login = function(username, password) {
    console.log(`User ${username} is logged in`)
}

module.exports = auth = {
    register,    //Key : value ,if key value is same then we can write it like this
    login
};
