function logout (req, res) {

    //this deletes the req.sessions detail
    req.session.userObject=null;
    req.session.email=null;
    req.session.save(() => {
        // res.redirect('/index')
        res.render('indexback')
    });
}
module.exports =  {logout} ;