
// const http = require("http") // מיישמים את המודול http
const http_hadas = require('http')


// יצירת שרת חדש
const server_123 = http_hadas.createServer((req, res) => {

    // הגדרת כותרת התגובה לסוג JSON
    res.setHeader("Content-Type", "application/json")

    // בדיקת הנתיב של הבקשה ושליחת תגובה מתאימה
    if (req.url === "/") {
        return res.end(JSON.stringify({
            message: "Server Working"
        }))
    }
   
    // הוספת נתיבים נוספים לבדיקת הנתיב ולשליחת תגובות מתאימות
    if (req.url === "/users") {
        return res.end(JSON.stringify({
            message: "users route"
        }))
    }

    // הוספת נתיב נוסף לבדיקת הנתיב ולשליחת תגובה מתאימה
    if (req.url === "/products") {
        return res.end(JSON.stringify({
            message: "products route 222222"
        }))
    }

    // נטיב דיפולטי למקרה שהנתיב לא נמצא - הגדרת קוד סטטוס 404 ושליחת תגובה מתאימה
    res.statusCode = 404

    console.log("Route Not Found for", req.url)

    res.end(JSON.stringify({
        message: "Route Not Found"
    }))
})

// הפעלת השרת והאזנה על פורט 3000
server_123.listen(3000, () => {
    console.log("Server running on port 3000")
})