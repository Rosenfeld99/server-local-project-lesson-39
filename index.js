const express = require('express');
const app = express();

// get - delete - put - patch - post
// הגדרת נתיב הבסיס (root) לשליחת תגובה מתאימה
app.get('/',(req,res)=>{
    res.json({
        message: "Server Working"
    });
});

// הגדרת נתיב /users לשליחת תגובה מתאימה
app.get('/users', (req, res) => {
    res.json({
        message: "users route from express"
    });
});

// הגדרת נתיב /products לשליחת תגובה מתאימה
app.get('/products', (req, res) => {
    res.json({
        message: "products route from express!"
    });
});

// הגדרת נתיב דיפולטי למקרה שהנתיב לא נמצא - הגדרת קוד סטטוס 404 ושליחת תגובה מתאימה
app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found from express"
    });
    console.log("Route Not Found for", req.url);
});

// הפעלת השרת והאזנה על פורט 3000
app.listen(3001, () => {
    console.log("Server running on port 3001 with Express");
}); 