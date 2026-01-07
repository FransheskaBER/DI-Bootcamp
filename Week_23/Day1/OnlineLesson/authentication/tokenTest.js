// how to create a token
import jwt from "jsonwebtoken";
import "dotenv/config";

// to create token use jwt.sign()
const token = jwt.sign(
    // payload - this is the data that you want to pass with the token
    { userId: 111, name: "john due", email: "john@example.com" },
    // token secret code
    process.env.SECRET_CODE,
    // expiration time
    { expiresIn: "60s" },
);

// console.log(token);

const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExMSwibmFtZSI6ImpvaG4gZHVlIiwiZW1haWwiOiJqb2huQGV4YW1wbGUuY29tIiwiaWF0IjoxNzY3Nzg0Mzk1LCJleHAiOjE3Njc3ODUyOTV9.WIaUCL7v4IHhSl-PM-L2yTybFVdMoZ1azd3Hfg70nH8";

// to validate this token, you have the jwt.verify
jwt.verify(
    // your token
    // myToken, OR
    token,
    // your token secret code
    process.env.SECRET_CODE,
    // callback function to verify
    (err, decoded) => {
        if(err) {
            console.log(err.message);
            return;
        }
        console.log(decoded); 
        //Output:
        //  {
        //   userId: 111,
        //   name: 'john due',
        //   email: 'john@example.com',
        //   iat: 1767784395,
        //   exp: 1767785295
        // }
    }
);


