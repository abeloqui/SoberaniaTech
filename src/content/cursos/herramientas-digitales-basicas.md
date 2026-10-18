---
title: "Herramientas digitales básicas para el trabajo"
description: "WhatsApp Business, planillas, almacenamiento en la nube (Drive y alternativas libres) y GPS con mapas sin conexión, para choferes, despachadores y personal de transporte."
category: "Herramientas digitales"
level: "Básico"
duration: "3 horas"
author: "Comunidad SoberaníaTech"
updated: 2026-10-18
---

> **Importante:** este curso es una introducción. **No reemplaza** las capacitaciones obligatorias de tu empresa ni sus políticas de uso de celulares, datos y sistemas. Antes de usar una herramienta para trabajo (sobre todo con datos de pasajeros), consultá qué está permitido en tu empresa y con tu cliente.

## ¿Para quién es y qué vas a poder hacer?

Para choferes, despachadores y administrativos de empresas de transporte de personal que trabajan **desde el celular**. Al terminar vas a poder:

- Ordenar tus chats de trabajo con **WhatsApp Business**.
- Armar una **planilla simple** de viajes y controles.
- Guardar y compartir archivos sin perderlos, con **Drive o alternativas libres**.
- Navegar con **mapas sin conexión**, porque en yacimiento muchas veces no hay señal.
- Proteger tus datos y los de tus pasajeros.

**Regla de oro:** las herramientas se usan **con el vehículo detenido**. Nunca manejando, ni siquiera con manos libres.

## 1. WhatsApp Business

WhatsApp Business es una app **gratuita** pensada para trabajo. Podés tenerla instalada junto al WhatsApp común, con otro número, para separar lo personal de lo laboral.

### Funciones que más sirven en transporte

| Función | Para qué usarla |
|---|---|
| **Respuestas rápidas** | Atajos para mensajes que repetís mucho: "Salimos a las 5:30, punto de ascenso Rotonda X". Se activan escribiendo `/`. |
| **Mensajes de ausencia y bienvenida** | Avisar fuera de horario: "Despacho atiende de 5 a 22 h. Urgencias: [teléfono]". |
| **Etiquetas** | Clasificar chats: "Cliente", "Chofer", "Reclamo", "Pendiente". Después filtrás por etiqueta. |
| **Perfil de empresa** | Nombre, horario, dirección y descripción visibles. Da confianza. |
| **Catálogo** | Si ofrecés servicios (traslados, turnos, cotizaciones), los mostrás ordenados. |

### Buenas prácticas

- **Un grupo por turno o por ruta**, con nombre claro: "Ruta Añelo 05:30". Evitá un grupo gigante para todo.
- **Mensaje fijado** con las reglas del grupo (horarios, cómo avisar demoras).
- **Ubicación en tiempo real:** sirve para que despacho vea dónde está la unidad. Activala por tiempo limitado y solo con el vehículo detenido.
- **No difundas datos de pasajeros** (DNI, teléfonos, direcciones) en grupos abiertos. Ver sección 5.
- **Respuestas con formato fijo:** quién, qué, dónde, cuándo (ver el curso de *Comunicación efectiva*).
- Activá el modo **"No molestar" mientras conducís** en tu celular. Tanto Android como iPhone lo traen.

## 2. Planillas: lo mínimo que tenés que saber

Una planilla es una tabla. Con tres o cuatro fórmulas ya organizás un servicio entero. Podés usar **Google Sheets** (en el navegador o la app) o **LibreOffice Calc** (software libre, gratuito).

### Ejemplo: planilla de viajes

| Fecha | Móvil | Chofer | Ruta | Salida | Llegada | Pasajeros | Observaciones |
|---|---|---|---|---|---|---|---|
| 18/10 | M-12 | Pérez | Neuquén–Añelo | 05:30 | 07:05 | 14 | Demora por tránsito |

### Fórmulas básicas (en español de Argentina)

- **Sumar:** `=SUMA(G2:G31)` suma la columna de pasajeros.
- **Contar viajes:** `=CONTARA(A2:A31)`.
- **Promedio de pasajeros:** `=PROMEDIO(G2:G31)`.
- **Duración del viaje:** `=F2-E2` (formato hora). 
- **Ocupación:** `=G2/19` si el vehículo tiene 19 asientos (resultado en %).
- **Filtrar y ordenar:** usá la herramienta *Filtro* para ver solo un chofer o una ruta.

> En Google Sheets en español de Argentina, los argumentos de las funciones se separan con **punto y coma** (`;`). Si te da error, probá con coma o con punto y coma.

### Consejos

- **Una fila por hecho** (por viaje, por control). No mezcles todo en una celda.
- **Títulos fijos** arriba y fechas siempre en el mismo formato.
- **No borres datos viejos:** archivalos en otra hoja.
- **Colores con sentido** (rojo = urgente, verde = ok) y no más de tres.

## 3. Archivos en la nube: Google Drive y alternativas libres

### Google Drive (rápido y común)

- **Carpetas por tema:** `Flota`, `Choferes`, `Clientes`, `Reportes 2026`.
- **Nombres claros:** `2026-10_Vencimientos_Flota.xlsx` (año-mes primero ordena solo).
- **Permisos:** compartí por correo de la persona, como *lector* o *comentarista*. Evitá "cualquiera con el enlace" para documentos con datos personales.
- **Disponible sin conexión:** marcá los archivos que necesitás en ruta (en la app: *Disponible sin conexión*).
- **Copia de seguridad de fotos y documentos** del celular: activala, pero no subas DNI ni licencias a carpetas compartidas.

### Alternativas libres y de código abierto

Si querés no depender de un solo proveedor (principio de SoberaníaTech):

- **LibreOffice** (planillas, textos y presentaciones, compatibles con Excel y Word). Gratuito.
- **Nextcloud** (nube propia o de tu cooperativa/empresa; sincroniza archivos, calendario y contactos). Requiere un servidor o un proveedor que lo ofrezca.
- **Formatos abiertos:** guardá planillas también como `.csv` u `.ods`, así abre en cualquier programa.

**Regla simple de backup 3-2-1:** 3 copias de lo importante, en 2 lugares distintos, 1 fuera del celular.

## 4. GPS y mapas sin conexión

En ruta de yacimiento es común quedarse sin señal. Preparate antes de salir.

### Opciones

| App | Ventaja |
|---|---|
| **Google Maps** | Muy conocida. Permite **descargar áreas** para usar sin conexión. Algunos datos (tránsito) no funcionan offline. |
| **OsmAnd** | Basada en OpenStreetMap, funciona 100 % sin conexión, con mapas descargables por provincia. |
| **Organic Maps** | Libre, liviana, sin publicidad ni rastreo, mapas offline. |

### Cómo prepararte (10 minutos, con wifi)

1. Descargá el mapa del área: Neuquén capital, Añelo y los accesos que uses.
2. Probá con el modo avión: que el mapa abra y se vea tu posición.
3. Guardá **puntos de ascenso y bases** como favoritos con nombres claros.
4. Cargá el **batería externo y el cable** de auto en la checklist.
5. Aprendé a **compartir tu ubicación** o las coordenadas por WhatsApp en caso de emergencia.

**Aviso importante:** los mapas no reemplazan la señalización ni las instrucciones del cliente. Los caminos internos de yacimiento cambian, y tenés que seguir las indicaciones oficiales de cada operadora.

## 5. Seguridad digital y datos personales

Los datos de pasajeros son **datos personales** y están protegidos por la **Ley 25.326**. El órgano de control es la Agencia de Acceso a la Información Pública (AAIP).

- **Poné bloqueo de pantalla** (PIN o huella) y actualizá el celular.
- **Activá la verificación en dos pasos** en WhatsApp, Google y tu correo.
- **No compartas códigos** que te lleguen por SMS (ni a "soporte" ni a conocidos). Es la estafa más común.
- **Desconfiá de enlaces raros** de supuestos "descuentos", "multas" o "premios".
- **Compartí lo mínimo** de los pasajeros (nombre, DNI en el manifiesto) y solo con quien corresponde.
- Si perdés el celular: **bloquealo, cambiá contraseñas y avisá a tu empresa**.

## 6. Ejercicio práctico (30 min)

1. Instalá WhatsApp Business y creá **tres respuestas rápidas** y **cuatro etiquetas**.
2. Armá una planilla de viajes con **cinco filas** y la fórmula de duración y de ocupación.
3. Subila a tu Drive o a Nextcloud, en una carpeta con nombre claro, y compartila con tu encargado/a como *lector*.
4. Descargá el mapa offline de tu zona de trabajo y probalo en modo avión.

## Para seguir aprendiendo

**Recursos recomendados:**

- **WhatsApp Business**: guía oficial de uso para pequeñas empresas (respuestas rápidas, etiquetas, catálogo). [Ver guía](https://whatsappbusiness.com/es-la/resources/resource-library/small-business-use-whatsapp-business-app/)
- **Centro de ayuda de WhatsApp.** [faq.whatsapp.com](https://faq.whatsapp.com)
- **Ayuda de Google Drive**: compartir, permisos y uso sin conexión. [support.google.com/drive](https://support.google.com/drive)
- **LibreOffice** (en español): suite de oficina libre y gratuita. [es.libreoffice.org](https://es.libreoffice.org/)
- **Nextcloud**: nube y colaboración de código abierto. [nextcloud.com](https://nextcloud.com)
- **OpenStreetMap**: el mapa colaborativo y libre del mundo. [openstreetmap.org](https://www.openstreetmap.org)
- **OsmAnd** y **Organic Maps**: apps de mapas offline. [osmand.net](https://osmand.net) · [organicmaps.app](https://organicmaps.app)
- **Agencia de Acceso a la Información Pública (AAIP)**: protección de datos personales. [argentina.gob.ar/aaip](https://www.argentina.gob.ar/aaip)
- **Mi Argentina**: licencia de conducir y otros documentos en formato digital. [argentina.gob.ar/miargentina](https://www.argentina.gob.ar/miargentina)

**Videos:** buscá en YouTube "WhatsApp Business tutorial en español", "fórmulas básicas de Google Sheets" y "mapas offline OsmAnd". Elegí videos recientes (las apps cambian) y de canales confiables.

¿Encontraste un error o querés mejorar este curso? Contribuí en el repositorio del proyecto.
