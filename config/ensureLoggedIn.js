module.exports = function (req, res, next) {
    if (req.isAuthenticated() ) return next();
    // redirect if not logged in 
    res.redirect('/auth/google');
}; 