# RECUPERATORIO DEL SEGUNDO PARCIAL MCGA 2022

Proyecto ABM desarrollada con React utilizando create-react-app.

## DESCRIPCIÓN:

●Cuenta con una lista de recursos siguiendo la lógica de un ABM.
● se utilozó la librería (React-hook-form) para el manejo de formularios. 
● Cuenta con un layout, que contiene:
    ○ Header
    ○ NavBar (barra de navegación)
    ○ Body o contenido
    ○ Footer
                                        
● La app contiene 4 pantallas:
    1 WELCOME o HOME: Donde se describe una breve introduccion a
        la aplicación. Con el que podemos probar el ruteo de la aplicación.
    2 Recurso: en esta pantalla deberán mostrar la lista de recursos con la lógica
    del AMB.
● Comprendido por componentes.. tanto para el Header, Body y Footer, como también un
componente para la lista del recurso. A su vez, estos componentes deben utilizan
componentes compartidos, como los botones, inputs. Estos componentes están vinculados a sus respectivos archivos .css, utilizando CSS modules.
● La APP cuenta con formularios para realizar un POST, un DELETE o un
UPDATE de un nuevo recurso a la lista.
● Cada formulario aseguran validaciones correspondientes para evitar
agregar nuevos recursos con datos erróneos o sin datos.
● Se permite realizar las diferentes request (GET, POST, PUT, DELETE) desde
el ABM de cada recurso.
● Cuenta con: un archivo donde se haga la configuración inicial del store de Redux.
 un reducer por cada recurso y un rootReducer.
 un archivo de actions por cada recurso.
 un archivo de types (constantes) para las actions.
 con actions creators utilizando la librería Redux Thunk, los cuales
son necesarios para realizar la conexión del FE con el BE.

### Modos de uso
Al cargar la Aplicación, el sistema ingresa a la página inicial o HOME, desde el cual se puede acceder a las demás páginas para la manipulación de los datos de los productos.
Luego desde la pagina del CRUD el usuario puede acceder y modificar o borrar los datos de los productos cargada en la base de datos, mediante el uso de los botones de comando.
Tambíen puede ingresar al repositorio Github donde se aloja el código fuente.

#### Datos del alumno:
Luis Alejandro Massad.
De la materia Modelos Computacionales  de Gestión Administrativa.
Del turno mañana y ciclo lectivo 2022 UAI.
