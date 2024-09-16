# Prueba Front - Sistema de Gestión de Tareas

Este proyecto es el front-end del sistema de gestión de tareas desarrollado con **React**. El sistema permite a los usuarios autenticarse, visualizar sus tareas asignadas, y a los administradores y supervisores gestionar tareas. Está conectado al back-end desarrollado en **ASP.NET Core 6**.

## Requisitos del Sistema

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

## Tecnologías Utilizadas

- **React** (con Hooks y Functional Components)
- **React Router** para la navegación
- **Axios** para hacer peticiones HTTP al back-end
- **CSS3** para estilos interactivos
- **React Icons** para iconos en los botones y formularios

## Instalación y Configuración

### 1. Clonar el repositorio

```bash

cd prueba-front

npm install
### Crea un archivo .env en la raíz del proyecto y añade la URL de la API del back-end. Este archivo será utilizado por Axios para conectarse a la API:

yarn install

REACT_APP_API_URL=http://localhost:5000/api
 ###Funcionalidades
1. Autenticación
Inicio de sesión: Los usuarios pueden iniciar sesión con su nombre de usuario y contraseña en la página de inicio de sesión. Si la autenticación es exitosa, el usuario será redirigido a la página de tareas.
Registro de usuario: Un formulario de registro está disponible para los nuevos usuarios.
2. Gestión de Tareas
Ver Tareas: Los usuarios pueden ver las tareas asignadas a ellos después de iniciar sesión.
Crear Tareas: Los administradores y supervisores pueden crear nuevas tareas desde la interfaz de usuario.
Editar Tareas: Los administradores y supervisores pueden editar las tareas existentes.
Eliminar Tareas: Los administradores pueden eliminar tareas.
3. Roles de Usuario
Administrador: Acceso completo al sistema (crear, editar, eliminar usuarios y tareas).
Supervisor: Puede gestionar y asignar tareas a los empleados.
Empleado: Solo puede ver y actualizar el estado de sus tareas asignadas.
Estructura del Proyecto
El proyecto sigue una estructura de carpetas organizada para facilitar el desarrollo y mantenimiento:

prueba-front/
│
├── public/            # Archivos públicos
│   └── index.html
│
├── src/
│   ├── assets/        # Archivos estáticos (imágenes, íconos)
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas del sistema (Login, Register, Tasks, etc.)
│   ├── services/      # Servicios de API (usando Axios)
│   ├── styles/        # Archivos de estilo CSS
│   ├── App.js         # Componente principal de la aplicación
│   └── index.js       # Punto de entrada del proyecto
│
└── .env               # Archivo de configuración de entorno
Componentes Clave
###1. Login (/src/pages/Login.js)
##Este componente contiene el formulario de inicio de sesión. Se conecta al back-end usando Axios para autenticar al usuario y obtener un token JWT.

###2. Register (/src/pages/Register.js)
###Formulario de registro para nuevos usuarios. Los datos son enviados al back-end para crear un nuevo usuario.

##3. TaskList (/src/pages/Tasks.js)
##Pantalla principal donde los usuarios pueden ver sus tareas asignadas y el estado de cada una.

##4. TaskForm (/src/components/TaskForm.js)
##Componente reutilizable para crear o editar una tarea. Los administradores y supervisores tienen acceso a este componente.

##5. AuthService (/src/services/AuthService.js)
##Servicio que maneja la autenticación de los usuarios, como el inicio de sesión y el registro. Utiliza Axios para hacer las peticiones HTTP.

##6. TaskService (/src/services/TaskService.js)
##Servicio para la gestión de tareas (obtener, crear, editar, eliminar). También utiliza Axios para conectarse a la API.

##Estilos y Diseño
##El front-end tiene un diseño moderno e interactivo con la ayuda de CSS3 y React Icons. Se ha optimizado para diferentes tamaños de pantalla, con un diseño responsive para asegurar una buena experiencia de usuario en dispositivos móviles y de escritorio.

##Navegación
#El sistema de rutas utiliza React Router para definir y gestionar las diferentes páginas de la aplicación:

#/login - Página de inicio de sesión
#/register - Página de registro de usuario
#/tasks - Página de gestión de tareas (accesible solo después de iniciar sesión)
#Próximas Mejoras
#Validaciones avanzadas en los formularios de inicio de sesión y registro.
#Notificaciones en tiempo real para tareas asignadas o completadas.
#Gráficos y estadísticas para visualizar el rendimiento de los empleados y las tareas completadas.
#Contribuciones
#Si deseas contribuir al proyecto, puedes hacer un fork del repositorio, realizar tus cambios y enviar un Pull Request.

#Licencia
#Este proyecto está bajo la Licencia MIT. Puedes usarlo y modificarlo según sea necesario.
