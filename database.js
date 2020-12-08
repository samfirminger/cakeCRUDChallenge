var sqlite3 = require('sqlite3').verbose();
var md5 = require('md5');

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err
    } else {
        console.log('Connected to the SQLite database.');

        db.run(`CREATE TABLE cake (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            comment text , 
            imageUrl text,
            yumFactor number 
            ); `,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    console.log('here');
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO cake (name, comment, imageUrl, yumFactor) VALUES (?,?,?,?)';
                    db.run(insert, ["Red Velvet", "Good for Halloween", 'https://www.livewellbakeoften.com/wp-content/uploads/2019/01/Red-Velvet-Cake-8.jpg', 9]);
                    db.run(insert, ["Victoria Sponge", "Can be a bit dry", 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001468_10-81b47f5.jpg', 7])
                    db.run(insert, ["Carrot Cake", "Kid yourself it's healthy", 'https://hips.hearstapps.com/vidthumb/images/carrot-cake-horozontal-1520010595.jpg', 8])
                    db.run(insert, ["Wedding Cake", "Too much fondant", 'https://cdn.shopify.com/s/files/1/1703/7103/products/wedding_band_cake_1024x1024.jpg?v=1503056178', 5])
                    db.run(insert, ["Coconut Cake", "Ew coconut!", 'https://i2.wp.com/homemadeinterest.com/wp-content/uploads/2019/04/Coconut-Cake-Reshoot_IG-1.jpg', 3])
                    db.run(insert, ["Chocolate Cake", "Fan favourite", 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/109778.jpg?output-format=auto&output-quality=auto', 9])
                    db.run(insert, ["Christmas Cake", "For the alcohol lovers", 'https://i.pinimg.com/originals/7b/88/a7/7b88a7181e248b51b9f76cf887401618.jpg', 6])
                    db.run(insert, ["Harry Potter Cake", "From Hagrid with love", 'https://1.bp.blogspot.com/-1cFnTbbrc7Q/XZdn4h-5AEI/AAAAAAAAcEQ/lS31JHFJumES1k3q3AbMSJnYHYZ-flPyACLcBGAsYHQ/s1600/1.jpg', 7])
                }
            });
    }
});


module.exports = db;