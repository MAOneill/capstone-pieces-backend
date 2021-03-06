const db = require('./conn');  //requre the conn.js file

class Photos{
    constructor (id, user_id, photo_url) {
        this.id = id;
        this.userID = user_id;
        this.photoURL = photo_url
    }

static getPhotoURLs(id) {
    console.log("getPhotoURL from model is working")
    return db.any(`SELECT * from photos WHERE user_id=${id}`)
        .then((urls) => {
            const urlArray = [];
            urls.map(url => {
                const aUrl = new Photos(url.id, url.user_id, url.photo_url)
                urlArray.push(aUrl);
            })
            // console.log("models photos",urlArray)
            return urlArray;
        })     
        .catch((error) => {
            console.log(error);
            return null
        })
}

static addPhotoURL(id,url) {
    return db.result(`INSERT into photos 
    (user_id, photo_url)
    values ($1 , $2)` , [id, url])

}

static deleteURL(id) {
    console.log("DELETE URL PHOTO IS RUNNING")
    db.result(`DELETE from photos where id = $1`, [id])
    .catch((error) => {
        console.error(error);
    })

}
}
module.exports = Photos;