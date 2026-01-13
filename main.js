const http = require("http");
const fs = require("fs");
const path = require("path");

/**
    * Assignment: Express User Management API
1. Create an API that adds a new user to your users stored in a JSON file. (ensure that the email of the new user doesn’t exist before)(1
Grades)
o URL: POST /user
 */
// const app = express();
// const usersFilePath = path.join(__dirname, "users.json");

// app.use(express.json()); // Middleware to parse JSON bodies

// // Helper: Read Users
// const readUsers = async () => {
//     try {
//         const data = await fs.readFile(usersFilePath, "utf-8");
//         return JSON.parse(data);
//     } catch (error) {
//         return [];
//     }
// };

// // Helper: Write Users
// const writeUsers = async (users) => {
//     await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
// };

// // 1. POST /user (Add User)
// app.post("/user", async (req, res) => {
//     const newUser = req.body;
//     const users = await readUsers();
    
//     if (users.some(u => u.email === newUser.email)) {
//         return res.status(400).json({ message: "Email already exists" });
//     }
    
//     users.push(newUser);
//     await writeUsers(users);
//     res.status(201).json({ message: "User added successfully" });
// });

// // 4. GET /user/getByName (Query Param)
// // IMPORTANT: Place specific routes BEFORE dynamic :id routes
// app.get("/user/getByName", async (req, res) => {
//     const { name } = req.query;
//     const users = await readUsers();
//     const user = users.find(u => u.name === name);
//     user ? res.json(user) : res.status(404).json({ message: "User not found" });
// });

// // 6. GET /user/filter (Filter by age)
// app.get("/user/filter", async (req, res) => {
//     const { minAge } = req.query;
//     const users = await readUsers();
//     const filtered = users.filter(u => u.age >= Number(minAge));
//     res.json(filtered);
// });

// // 5. GET /user (Get All)
// app.get("/user", async (req, res) => {
//     const users = await readUsers();
//     res.json(users);
// });

// // 7. GET /user/:id (Get by ID)
// app.get("/user/:id", async (req, res) => {
//     const users = await readUsers();
//     const user = users.find(u => u.id == req.params.id);
//     user ? res.json(user) : res.status(404).json({ message: "User not found" });
// });

// // 2. PATCH /user/:id (Update)
// app.patch("/user/:id", async (req, res) => {
//     const { id } = req.params;
//     const users = await readUsers();
//     const index = users.findIndex(u => u.id == id);

//     if (index === -1) return res.status(404).json({ message: "User not found" });

//     users[index] = { ...users[index], ...req.body };
//     await writeUsers(users);
//     res.json({ message: "User updated successfully" });
// });

// // 3. DELETE /user/:id
// app.delete("/user/:id", async (req, res) => {
//     const { id } = req.params;
//     let users = await readUsers();
//     const originalLength = users.length;
//     users = users.filter(u => u.id != id);

//     if (users.length === originalLength) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     await writeUsers(users);
//     res.json({ message: "User deleted successfully" });
// });

// app.listen(3000, () => console.log("Express Server running on port 3000"));
///////////////////////////////////////////////////////////////////////////////////////
/**
 * answer Part 2: ERD Diagram
 * in file ERD Diagram.tldr
 */