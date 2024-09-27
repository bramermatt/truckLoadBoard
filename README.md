# truckLoadBoard
Truck Load Board application to manage trucks, loads, and assignments, built using Java, SQL, and XHTML. The project demonstrates database connectivity with JDBC in Eclipse for practicing full-stack development.


## Database Design (SQL)
- **Relational Database**: Uses MySQL to create and manage relational database tables for trucks, loads, assignments, and shippers.
- **JDBC Integration**: Leverages Java Database Connectivity (JDBC) for seamless interaction between the Java back-end and SQL database.
- **Connection Pooling**: Manages efficient use of database connections to prevent resource exhaustion and improve performance.
- **Parameterized Queries**: Uses prepared statements to protect against SQL injection and enhance security during database operations.
- **Table Relationships**: Establishes relationships between tables using foreign keys, such as linking `trucks` and `loads` via `assignments`.
- **Auto-Incremented Primary Keys**: Ensures unique identification of records through auto-incremented primary keys in each table (e.g., `truck_id`, `load_id`).
- **Transaction Management**: Supports atomic transactions, ensuring data consistency and integrity when performing multiple database operations.
- **Data Validation**: Enforces validation at the database level, such as non-null constraints, default values, and proper data types (e.g., VARCHAR, INT).
- **Efficient Queries**: Implements optimized SQL queries for retrieving, updating, and deleting data with minimal overhead.
- **Scalable Schema**: Designed with scalability in mind, allowing for future expansion of database tables and relationships to support additional features.
- **Database Setup Script**: Includes SQL scripts for creating and populating the database tables, making it easy to set up and start the application.

## Back-end (Java)
- **Database Connectivity**: Utilizes JDBC to connect to a MySQL database for storing and retrieving truck, load, and assignment data.
- **CRUD Operations**: Implements Create, Read, Update, and Delete functionality for managing trucks, loads, and shippers in the database.
- **Object-Oriented Design**: Follows object-oriented principles for modularity, encapsulating business logic within Java classes like `Truck`, `Load`, and `Shipper`.
- **Error Handling**: Includes exception handling mechanisms to manage SQL errors, connection issues, and invalid data inputs.
- **Data Persistence**: Ensures consistent data storage and retrieval through well-structured SQL queries.
- **Modular Code Structure**: Separates concerns between different layers (database access, business logic, and front-end interaction) for maintainability.
- **Scalability**: Designed with a flexible structure to easily extend and scale the application (e.g., adding new features like load tracking or route optimization).
- **Connection Management**: Manages database connections efficiently, ensuring connections are closed properly to avoid memory leaks.
- **SQL Queries**: Executes custom SQL queries to filter, sort, and retrieve data based on user inputs (e.g., finding available trucks or loads).
- **Eclipse Integration**: Fully integrated with Eclipse IDE for easy project management, development, and debugging.

## Front-end (XHTML)
- **Responsive Design**: Uses XHTML to create web pages with a focus on accessibility and well-structured markup.
- Load Listings: Displays available loads with details like origin, destination, and weight.
- **Truck Management**: View and manage trucks with information such as driver name, location, and capacity.
- **Assignment Overview**: Provides a summary of current assignments, showing which trucks are assigned to which loads.
- **Form Submissions**: XHTML forms are used for adding and updating trucks, loads, and assignments.
- **Cross-Browser Compatibility**: Ensures that the application works smoothly across different web browsers.
- **Separation of Concerns**: XHTML focuses on the structure and content, making it easy to integrate with back-end services with Java.