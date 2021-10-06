import bcrypt from "bcryptjs"

const users = [
  {
    name:"admin user",
    email:"admin@example.com",
    password:bcrypt.hashSync("123456",10),
    isAdmin:true
  },
  {
    name:"M zohaib",
    email:"john@example.com",
    password:bcrypt.hashSync("123456",10)
  },
  {
    name:"Ali",
    email:"jane@example.com",
    password:bcrypt.hashSync("123456",10)
  }
]


export default users;
