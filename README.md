# 🧙‍♂️ Olivanders Shop API 🪄

## 🌟 Welcome to the Magical World of Wands! 

Welcome to the **Olivanders Shop API**, a RESTful API inspired by the enchanting Harry Potter universe. This API allows users to explore magical wands, wandmakers, woods, wand cores, and characters, with advanced features that will make your development experience truly magical! ✨

## ✨ Features

### 1. 🛠️ CRUD Operations
- Fully functional endpoints for Wands, Wandmakers, Woods, Cores, and Characters
- Supports `GET`, `POST`, `PUT`, and `DELETE` methods (limited to admin users)

### 2. 🌐 Real-Time Translation
- Powered by DeepL for translating responses into the user's preferred language dynamically
- Intelligent language management that translates data only when requested

### 3. 🔐 Role-Based Access Control
- **Admins** 👑: Access to all endpoints and CRUD operations
- **Regular Users** 👤: Restricted to `GET` methods only

### 4. 🔒 Secure Authentication
- JWT (JSON Web Token) authentication
- User-specific language preferences stored securely

### 5. 🧹 Clean Data Responses
- JSON responses sanitized to ensure only essential and formatted information is returned

## 🛠️ Technologies Used

![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-green)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)
![Docker](https://img.shields.io/badge/Containerization-Docker-cyan)
![Jest](https://img.shields.io/badge/Testing-Jest-red)

- **Backend**: JavaScript (Node.js)
- **Database**: MySQL (using Sequelize ORM)
- **Containerization**: Docker
- **Testing**: Jest
- **Translation**: Translate npm library
- **Authentication**: JWT

## 📂 Project Structure

```
Olivanders-Shop/
├── docs/
├── mysql/
├── node_modules/
├── src/
│   ├── config/
│   ├── controllers/
│   │   ├── auth/
│   │   ├── cores/
│   │   ├── languages/
│   │   ├── users/
│   │   ├── wandmakers/
│   │   ├── wands/
│   │   └── woods/
│   ├── helpers/
│   ├── middlewares/
│   ├── models/
│   └── routes/
├── .env
├── .gitignore
├── changelog.md
├── docker-compose.yml
├── Dockerfile
├── jsdoc.json
├── openapi.json
├── package-lock.json
├── package.json
├── README.md
└── swagger.js
```
## 📚 Documentation

### 🔍 JSDoc Technical Documentation

The project includes comprehensive technical documentation generated using JSDoc, available in the `docs/` directory. 

#### 🖥️ Accessing Documentation
- **Location**: `/docs/` folder in the project root
- **Format**: Detailed HTML documentation of code structure, functions, and APIs
- **Coverage**: Includes descriptions, parameters, return types, and usage examples for all project components

#### 🔬 How to View
1. Navigate to the `docs/` directory
2. Open `index.html` in your preferred web browser
3. Explore detailed documentation for:
   - Controllers
   - Models
   - Routes
   - Middleware functions
   - Helper utilities

**Pro Tip**: The JSDoc documentation provides an in-depth view of the project's internal workings, making it easier for developers to understand and contribute to the codebase. 📖✨

## 📖 Swagger API Documentation

### 🌐 Interactive API Documentation

The Olivanders Shop API uses Swagger (OpenAPI) for comprehensive, interactive API documentation. This allows developers to explore and test API endpoints directly through a user-friendly web interface.

#### 🔍 Accessing Swagger Documentation
- **Endpoint**: `/swagger` 
- **Local Access**: `http://localhost:3001/swagger`

#### ✨ Features of Swagger Documentation
- **Interactive Playground**: Try out API endpoints in real-time
- **Complete Endpoint Details**: 
  - Request methods
  - Required parameters
  - Response schemas
  - Authentication requirements
- **Request Example Generator**: Generate code snippets for different programming languages
- **Response Model Previews**: See exact response structures for each endpoint

#### 🚀 How to Use
1. Start the application with `docker-compose up --build`
2. Open a web browser
3. Navigate to `http://localhost:3001/swagger`
4. Explore and interact with the API endpoints
5. Use the "Try it out" button to send test requests
6. View request and response details for each endpoint

**Pro Tip**: Swagger documentation is automatically generated from the OpenAPI specification (`openapi.json`), ensuring it always reflects the latest API structure. 🔧✨

## 🚀 Setup and Installation

### 📋 Prerequisites
1. 💻 Install Node.js
2. 🐳 Install Docker

### 🔧 Installation Steps

1. Clone the repository:
```bash
git@github.com:saulm96/Olivanders-shop.git
cd olivanders-shop
```

2. Set up environment variables:
Create a `.env` file in the root directory with the following configuration:
```env
DB_HOST=olivanders_shop_db
DB_PORT=3306
APP_HOST=olivanders_shop_backend
APP_PORT=3001
DB_USER=user
DB_PASSWORD=1234
DB_DATABASE=Olivanders
DB_ROOT_PASSWORD=olivanders1234
DB_DIALECT=mysql
JWT_SECRET=super_secret_secret
DEEPL_API_KEY=your-deepl-api-key
```

3. Build and run the application:
```bash
docker-compose up --build
```

4. Access the API at:
```
http://localhost:3001
```


## 🌈 Detailed Endpoints

### 🔑 Authentication Endpoints
- **Login**: `POST /auth/login` - Authenticate and get JWT token

### 🪄 Comprehensive CRUD Endpoints

Each entity follows the same CRUD (Create, Read, Update, Delete) pattern:

#### 1. 🧹 Wands Endpoints
- **Get All Wands**: `GET /wands`
- **Get Wand by ID**: `GET /wands/:id`
- **Create Wand** *(Admin only)*: `POST /wands`
- **Update Wand** *(Admin only)*: `PUT /wands/:id`
- **Delete Wand** *(Admin only)*: `DELETE /wands/:id`

#### 2. 🧙‍♂️ Wandmakers Endpoints
- **Get All Wandmakers**: `GET /wandmakers`
- **Get Wandmaker by ID**: `GET /wandmakers/:id`
- **Create Wandmaker** *(Admin only)*: `POST /wandmakers`
- **Update Wandmaker** *(Admin only)*: `PUT /wandmakers/:id`
- **Delete Wandmaker** *(Admin only)*: `DELETE /wandmakers/:id`

#### 3. 🌳 Woods Endpoints
- **Get All Woods**: `GET /woods`
- **Get Wood by ID**: `GET /woods/:id`
- **Create Wood** *(Admin only)*: `POST /woods`
- **Update Wood** *(Admin only)*: `PUT /woods/:id`
- **Delete Wood** *(Admin only)*: `DELETE /woods/:id`

#### 4. 💫 Cores Endpoints
- **Get All Cores**: `GET /cores`
- **Get Core by ID**: `GET /cores/:id`
- **Create Core** *(Admin only)*: `POST /cores`
- **Update Core** *(Admin only)*: `PUT /cores/:id`
- **Delete Core** *(Admin only)*: `DELETE /cores/:id`

#### 5. 👥 Characters Endpoints (not available for now)
- **Get All Characters**: `GET /characters`
- **Get Character by ID**: `GET /characters/:id`
- **Create Character** *(Admin only)*: `POST /characters`
- **Update Character** *(Admin only)*: `PUT /characters/:id`
- **Delete Character** *(Admin only)*: `DELETE /characters/:id`


### 🛡️ Access Control Reminder
- **Admin Users** 👑: Full CRUD access to all endpoints
- **Regular Users** 👤: Read-only access (GET methods only)

### 🔐 Token Usage
Include the JWT token in the `Authorization` header:
```
Authorization: Bearer <your-token>
```

## 🧪 Testing

Run unit tests with Jest:
```bash
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/your-magical-feature
```
3. Commit your changes:
```bash
git commit -m "Add your magical feature"
```
4. Push to the branch:
```bash
git push origin feature/your-magical-feature
```
5. Submit a pull request 🚀

---

**Made with 🧙‍♂️ Magic and ❤️ by Wand Enthusiasts**