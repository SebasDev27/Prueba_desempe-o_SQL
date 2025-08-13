# Prueba Desempeño SQL

A full-stack practice project designed to demonstrate SQL database management, backend API creation with Express.js, and integration with CSV data sources.  
It includes database seeding, REST endpoints, and a simple frontend interface.

---

##  Features
- **MySQL Database** connection and management using `mysql2`.
- **CSV Importing** with `csv-parser`.
- **Express.js API** to handle CRUD operations.
- **CORS Enabled** for cross-origin requests.
- **Data Seeding** from CSV files.
- **Frontend Integration** served through Vite.

---

## 🛠️ Tech Stack
**Frontend**  
- HTML5  
- Vite

**Backend**  
- Node.js  
- Express.js  
- MySQL2  
- CSV Parser  
- CORS

**Database**  
- MySQL

---

##  Project Structure
```
├── docs/                  # Documentation & diagrams
│   ├── Diagrama sin título.jpg
│   ├── script.sql
│   └── Postman collection
├── server/
│   ├── conexion_db.js     # DB connection config
│   ├── index.js           # API entry point
│   ├── seeders/           # CSV loading scripts
│   └── data/              # CSV data files
├── index.html              # Main HTML file
├── package.json
└── requisitos.txt
```

---

## Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/SebasDev27/Prueba_desempe-o_SQL.git
cd Prueba_desempe-o_SQL
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure the database**  
   - Create a MySQL database.  
   - Update `server/conexion_db.js` with your DB credentials.  
   - Run the SQL script in `docs/script.sql` to create the schema.

4. **Seed the database** (optional)
```bash
node server/seeders/run_seeders.js
```

5. **Start the development server**
```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint                | Description            |
|--------|-------------------------|------------------------|
| GET    | `/api/platforms`        | List all platforms     |
| GET    | `/api/invoices`         | List all invoices      |
| POST   | `/api/invoices`         | Create a new invoice   |


