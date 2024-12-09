# 🚀 Olivanders Shop API Changelog

## [Unreleased]

### 🔧 Improvements
- Added comprehensive error handling
- Enhanced logging mechanisms
- Improved input validation for all endpoints

## [0.2.0] - 2024/12/05
### ✨ New Features
- Implemented JWT authentication
- Added role-based access control
- Integrated DeepL translation service
- Created middleware for language management

### 🛠️ Enhancements
- Completed CRUD operations for all entities
- Implemented comprehensive test suite with Jest
- Added Swagger documentation for API endpoints

## [0.1.0] - 2024/11/30
### 🌟 Initial Release
#### Available Endpoints
- **Users**
  - `user/list`: List all users
  - `user/ID`: Get specific user by ID

- **Wands**
  - `wand/list`: List all wands
  - `wand/ID`: Get specific wand by ID

- **Cores**
  - `core/list`: List all wand cores
  - `core/ID`: Get specific wand core by ID

- **Woods**
  - `wood/list`: List all wand woods
  - `wood/ID`: Get specific wood by ID

- **Wandmakers**
  - `wandmaker/list`: List all wandmakers
  - `wandmaker/ID`: Get specific wandmaker by ID

## Development Journey 🧙‍♂️

### 2024/11/23 - Database Design Begins
- Generated ER diagram for the database
- Initial database structure without multilingual support relations

### 2024/11/24 - Database Expansion
- Added database tables for translations
- Completed database relations
- Prepared for data insertion

### 2024/11/25 - Project Kickoff
- Completed database inserts
- Fixed script-related issues
- Started working on the main application structure

### 2024/11/26 - Containerization
- Successfully Dockerized the backend
- Prepared development environment

### 2024/11/27 - ORM Integration
- Installed Sequelize
- Started developing database models

### 2024/11/28 - Model Development
- Completed all database models
- Prepared for CRUD operations

### 2024/11/29 - CRUD Foundation
- Fixed Sequelize relations
- Implemented basic CRUD functions for all entities

### 2024/11/30 - Response Optimization
- Reorganized JSON responses
- Created a 'cleaner' folder for JSON processing and formatting

### 2024/12/01 - Authentication Development
- Began JWT token implementation
- Created user authentication flows

### 2024/12/02 - Translation Service
- Integrated DeepL translation API
- Added language preference management

### 2024/12/03 - Access Control
- Implemented role-based access control
- Created admin and user role permissions

### 2024/12/04 - Testing
- Developed comprehensive test suite
- Added unit and integration tests for all endpoints

### 2024/12/05 - Documentation
- Generated JSDoc documentation
- Created Swagger API documentation

### 2024/12/06 - Documentation
- Improved the translation system.
- Added a functionality to auto-translate data if it's not available in the users language.

## 🔮 Future Roadmap
- [ ] Implement advanced search capabilities
- [ ] Add more comprehensive error handling
- [ ] Create frontend client application
- [ ] Expand multilingual support

---

**Crafted with ✨ Magical Coding and ❤️ Harry Potter Inspiration**
>>>>>>> dev
