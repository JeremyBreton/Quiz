const websiteController = {
    getHome(_, response){
        response.render('home');
    },
};

module.exports = websiteController;