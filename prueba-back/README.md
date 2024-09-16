# Prueba Back - Sistema de Gestión de Tareas

Este proyecto es el back-end del sistema de gestión de tareas, desarrollado con **ASP.NET Core 6**. Proporciona una REST API que permite la gestión de usuarios, roles y tareas. Implementa autenticación basada en **JWT** (JSON Web Token) y utiliza **Entity Framework Core** para la interacción con la base de datos.

## Requisitos del Sistema

- **.NET 6 SDK** o superior
- **SQL Server** o **SQLite** (según la configuración de la base de datos)
- **Postman** (opcional, para probar la API)

## Tecnologías Utilizadas

- **ASP.NET Core 6**
- **Entity Framework Core**
- **JWT (JSON Web Token)** para la autenticación
- **AutoMapper** para el mapeo de modelos de datos
- **Swagger** para la documentación de la API

## Instalación y Configuración


<!--Configurar la base de datos
El proyecto está configurado para utilizar Entity Framework Core. Asegúrate de configurar correctamente la cadena de conexión en el archivo appsettings.json:

SQL Server:
json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=TaskManagementDB;Trusted_Connection=True;MultipleActiveResultSets=true"
}

<!--Ejecutar migraciones de la base de datos
Ejecuta los siguientes comandos para aplicar las migraciones de Entity Framework Core y crear la base de datos:

dotnet ef database update
Ejecutar migraciones de la base de datos
Ejecuta los siguientes comandos para aplicar las migraciones de Entity Framework Core y crear la base de datos:

La estructura del proyecto sigue las mejores prácticas para proyectos de ASP.NET Core, con una organización clara entre controladores, modelos y servicios:

<!--prueba-back/
│
├── Controllers/         # Controladores de la API
│   ├── AuthController.cs      # Autenticación y registro de usuarios
│   ├── RolesController.cs     # Gestión de roles
│   └── TasksController.cs     # Gestión de tareas
│
├── Data/               # Contexto de base de datos y configuración de EF Core
│   └── ApplicationDbContext.cs
│
├── Dtos/               # Data Transfer Objects (para simplificar respuestas y peticiones)
│   └── UserDto.cs
│   └── TaskDto.cs
│
├── Entities/           # Entidades del dominio (Usuario, Rol, Tarea)
│   └── User.cs
│   └── Role.cs
│   └── Task.cs
│
├── Migrations/         # Migraciones de Entity Framework Core
│
├── Services/           # Servicios para la lógica de negocio (Usuarios, Tareas)
│   └── AuthService.cs
│   └── TaskService.cs
│
├── appsettings.json     # Configuraciones de la aplicación (cadena de conexión, JWT, etc.)
├── Program.cs          # Configuración de servicios y middleware
└── Startup.cs          # Configuración inicial de la aplicación (enrutamiento, autenticación, etc.)
<!--Funcionalidades de la API
1. Autenticación
Registro de usuarios: Los usuarios pueden registrarse proporcionando su nombre, email y contraseña.
Inicio de sesión: Los usuarios registrados pueden autenticarse mediante email y contraseña, recibiendo un token JWT.
2. Sistema de Roles
Administrador: Puede gestionar usuarios (crear, editar, eliminar) y tareas.
Supervisor: Puede asignar tareas y actualizar el estado de las mismas.
Empleado: Puede ver sus tareas asignadas y actualizar su estado.
3. Gestión de Usuarios
Crear usuarios: Los administradores pueden crear nuevos usuarios.
Actualizar y eliminar usuarios: Los administradores pueden actualizar la información de los usuarios o eliminarlos.
Asignación de roles: Los administradores pueden asignar o modificar roles para los usuarios.
4. Gestión de Tareas
Crear tareas: Los administradores y supervisores pueden crear nuevas tareas.
Actualizar y eliminar tareas: Los administradores pueden actualizar o eliminar tareas.
Ver tareas asignadas: Los empleados pueden ver las tareas que se les han asignado.
Actualizar estado de tareas: Los empleados pueden actualizar el estado de sus tareas (Pendiente, En Proceso, Completada).
Endpoints de la API
Autenticación
POST /api/auth/register: Registro de un nuevo usuario
POST /api/auth/login: Inicio de sesión para obtener un token JWT
Gestión de Usuarios
GET /api/users: Obtener la lista de usuarios (solo administradores)
POST /api/users: Crear un nuevo usuario (solo administradores)
PUT /api/users/{id}: Actualizar un usuario (solo administradores)
DELETE /api/users/{id}: Eliminar un usuario (solo administradores)
Gestión de Roles
GET /api/roles: Obtener la lista de roles (solo administradores)
POST /api/roles: Crear un nuevo rol (solo administradores)
PUT /api/roles/{id}: Actualizar un rol (solo administradores)
DELETE /api/roles/{id}: Eliminar un rol (solo administradores)
Gestión de Tareas
GET /api/tasks: Obtener la lista de tareas (según el rol)
POST /api/tasks: Crear una nueva tarea (administradores y supervisores)
PUT /api/tasks/{id}: Actualizar una tarea (administradores y supervisores)
DELETE /api/tasks/{id}: Eliminar una tarea (solo administradores)
PATCH /api/tasks/{id}/status: Actualizar el estado de una tarea (empleados)
Seguridad
Autenticación con JWT
El sistema utiliza JWT (JSON Web Tokens) para asegurar las rutas de la API. El token debe ser enviado en el encabezado de cada petición a las rutas protegidas.

Ejemplo de encabezado de autorización:

http
Copiar código
Authorization: Bearer <token_jwt>
Reglas de autorización por roles
El acceso a ciertos endpoints está restringido según el rol del usuario autenticado:

Administrador: Acceso completo
Supervisor: Acceso para gestionar tareas
Empleado: Acceso solo a sus tareas asignadas
Documentación de la API con Swagger
El proyecto incluye Swagger para documentar y probar los endpoints de la API. Puedes acceder a la documentación en http://localhost:5000/swagger.