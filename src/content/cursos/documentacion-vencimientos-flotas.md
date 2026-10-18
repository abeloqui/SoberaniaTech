---
title: "Documentación y vencimientos para flotas de transporte de personal"
description: "Qué papeles necesitan el chofer y la unidad, cómo llevar un control de vencimientos con semáforo y cómo evitar retenciones y sanciones."
categoria: "Logística"
level: "Básico"
duracion: "2 horas"
author: "Comunidad SoberaníaTech"
actualizado: 2026-10-18
---

> **Importante:** este curso es una introducción y no es asesoramiento legal. **No reemplaza** las capacitaciones obligatorias de tu empresa ni la normativa vigente. Los requisitos exactos dependen del tipo de servicio, la jurisdicción (municipal, provincial o nacional) y lo que exija cada cliente: **confirmalos siempre** con tu empresa, la autoridad de transporte que corresponda y tu cliente.

## ¿Para quién es y qué vas a poder hacer?

Para choferes, despachadores y administrativos de flotas. Al terminar vas a poder:

- Saber qué documentos suelen exigirse al **chofer** y a la **unidad**.
- Armar una **planilla de vencimientos** con semáforo.
- Organizar quién controla qué, y con cuánta anticipación.
- Evitar el problema más común: descubrir un papel vencido **cuando ya estás en ruta**.

## 1. Por qué importa tanto

Una unidad con documentación vencida puede ser **retenida**, el chofer puede ser sancionado y el cliente puede **rechazar el servicio**. No es teoría: en un operativo realizado en Neuquén capital en agosto de 2025, el municipio retuvo vehículos de transporte de personal por no tener la categoría de licencia necesaria para trasladar pasajeros, y camionetas de empresas del sector por faltantes de licencias profesionales y elementos de seguridad (ver recursos).

Además, el papel vencido suele ser señal de algo más: un seguro sin pagar, un vehículo sin revisión técnica, un chofer sin apto médico. Es **seguridad**, no solo burocracia.

## 2. Documentación del chofer

| Documento | Para qué | Qué controlar |
|---|---|---|
| **DNI** | Identidad | Vigencia y legibilidad |
| **Licencia Nacional de Conducir profesional (clase D para pasajeros)** | Habilita a conducir transporte de pasajeros | Que la **clase** corresponda al tipo de vehículo y servicio, y la fecha de vencimiento. Para servicios interjurisdiccionales (entre provincias) se exige la licencia específica de transporte interjurisdiccional. |
| **Curso de formación / renovación profesional** | Requisito para licencias profesionales de pasajeros | Que esté cumplido según la normativa de la ANSV |
| **Apto psicofísico** | Aptitud médica para conducir | Vigencia. Muchas operadoras exigen renovación **anual** y estudios adicionales (la práctica del IAPG los detalla). |
| **Examen psicotécnico** | Atención, reacción y toma de decisiones | Vigencia (en el sector es habitual cada 2 años) |
| **Curso de manejo defensivo** | Requisito habitual de operadoras | Vigencia, la define cada cliente |
| **Libreta o carnet sanitario / ART** | Cobertura del trabajador | Que figure en nómina y esté activa |
| **Inducciones y habilitaciones del cliente** | Ingreso a locaciones | Vencimientos de cada operadora |

**Dato útil:** la licencia ya puede llevarse en formato **digital** a través de la app Mi Argentina. Igualmente, muchos clientes piden verla; consultá qué aceptan.

## 3. Documentación de la unidad

| Documento | Para qué | Qué controlar |
|---|---|---|
| **Cédula de identificación (verde)** del vehículo | Titularidad | Que sea del vehículo correcto |
| **Cédula azul** (autorización de conducción) | Si el chofer no es titular | A nombre del chofer que conduce |
| **Revisión Técnica Obligatoria (RTO / VTV)** | Aptitud técnica del vehículo | Fecha de vencimiento. **Los vehículos de pasajeros suelen tener revisiones más frecuentes** que los particulares (según medios locales, cada 6 meses en Neuquén). Verificá la periodicidad que te corresponde. |
| **Seguro obligatorio y comprobante de pago** | Cobertura ante siniestros | Póliza vigente **y** último pago al día |
| **Habilitación del servicio** | Autoriza a prestar transporte de personal | Municipal, provincial o nacional (CNRT) según el recorrido |
| **Patente / impuesto automotor al día** | Evita inconvenientes administrativos | Cuotas al día |
| **Licencia de Configuración de Modelo (LCM) y homologaciones** | Que asientos, carrocería y modificaciones estén aprobadas | Especialmente en minibuses u ómnibus. No se debe cambiar asientos sin homologación (recomendación IAPG). |
| **Matafuegos, botiquín, balizas** | Equipamiento de seguridad | Carga y fecha de vencimiento de matafuegos, botiquín completo |
| **Seguro del cliente / documentos específicos** | Ingreso a yacimientos | Lo define cada operadora |

**A bordo del vehículo**, según la práctica del IAPG, deben estar los documentos **originales** de habilitación, la identificación del conductor con foto y el **teléfono de emergencia** visible dentro y fuera de la unidad.

## 4. Manifiesto de pasajeros

En cada viaje: **nombre y número de documento de todos los pasajeros**. Es parte de la seguridad (saber quién va a bordo en una emergencia) y lo piden muchos clientes. Si se completa en papel, guardá copia; si es digital, cuidá los datos personales (ver *Herramientas digitales básicas*).

## 5. Planilla de vencimientos con semáforo

Es la herramienta más útil de este curso. Armala en Google Sheets o LibreOffice Calc.

### Estructura sugerida

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| **Tipo** (chofer/unidad) | **Nombre o patente** | **Documento** | **Fecha de vencimiento** | **Responsable** | **Estado** | **Observaciones** |
| Unidad | AB123CD | RTO | 15/12/2026 | Despacho | (fórmula) | Turno pedido |
| Chofer | Pérez, Juan | Apto psicofísico | 20/11/2026 | Administración | (fórmula) | |

### Fórmula de semáforo (columna Estado)

En español de Argentina, con los datos desde la fila 2:

```
=SI(D2<HOY();"VENCIDO";SI(D2-HOY()<=15;"CRÍTICO";SI(D2-HOY()<=30;"ALERTA";"OK")))
```

Esto muestra:

- **VENCIDO:** la fecha ya pasó. La unidad o el chofer **no salen**.
- **CRÍTICO:** quedan 15 días o menos.
- **ALERTA:** quedan 30 días o menos.
- **OK:** todo en regla.

Después usá **formato condicional** para colorear: rojo, naranja, amarillo y verde.

> Si tu Google Sheets usa coma como separador, reemplazá los `;` por `,`.

### Reglas de oro

1. **Una sola planilla maestra**, con una persona responsable de actualizarla.
2. **Revisión semanal fija** (por ejemplo, los lunes).
3. **Anticipación:** empezá los trámites 60 días antes en documentos con turno o demora (RTO, licencias, aptos).
4. **Foto o PDF de cada documento** en una carpeta ordenada de Drive o Nextcloud (con permisos limitados).
5. **Nada vencido sale a ruta**, sin excepciones.

## 6. Control previo a la salida (2 minutos)

Antes de cada servicio, despacho o el chofer verifican:

- [ ] Licencia del chofer: clase correcta y vigente.
- [ ] Apto psicofísico y cursos exigidos por el cliente.
- [ ] Cédula (verde o azul) y seguro con pago al día.
- [ ] RTO vigente.
- [ ] Habilitación del servicio y manifiesto de pasajeros.
- [ ] Matafuegos, botiquín y balizas.
- [ ] Chofer descansado y en condiciones.

## 7. Qué hacer si se vence algo

1. **No salgas** con el documento vencido.
2. **Avisá a despacho y a tu responsable** de inmediato.
3. **Reemplazá la unidad o el chofer** si es posible.
4. **Iniciá el trámite** y registralo en la planilla con fecha estimada.
5. **Analizá la causa** (¿falló la alerta? ¿nadie se hizo cargo?) para que no se repita.

## 8. Ejercicio práctico (30 min)

1. Armá una planilla con **5 unidades y 5 choferes** (podés usar datos inventados).
2. Cargá al menos **3 documentos** por cada uno.
3. Agregá la fórmula de semáforo y colores.
4. Definí **quién** la revisa y **cada cuánto**.
5. Simulá: una unidad aparece en "CRÍTICO" y tiene un servicio mañana. ¿Qué hacés?

## Para seguir aprendiendo

**Recursos recomendados:**

- **Licencia Nacional de Conducir** (clases, requisitos, profesional e interjurisdiccional). [argentina.gob.ar](https://www.argentina.gob.ar/node/159591)
- **Sistema de turnos y trámites de licencia (LNC Argentina, ANSV).** [lncargentina.seguridadvial.gob.ar](https://lncargentina.seguridadvial.gob.ar/)
- **Disposición ANSV sobre formación y renovación de conductores de transporte de pasajeros** (cursos obligatorios). [Ver norma](https://argentina.gob.ar/normativa/407317_disp177_pdf/archivo)
- **Ley 24.449 de Tránsito** y **Decreto 779/95**. [Ley](https://www.argentina.gob.ar/normativa/nacional/ley-24449-1994-818) · [Decreto](https://www.argentina.gob.ar/normativa/nacional/30389/texto)
- **IAPG — Práctica recomendada de movilidad segura en transporte de personal**: documentación de conductores y vehículos, exámenes médicos y equipamiento (Anexo I). [Ver PDF](https://iapg.org.ar/practicasrecomendadas/PRIAPG-SC-25-2021-00.pdf)
- **Nota: RTO en Neuquén** (talleres, periodicidad y requisitos). [Diario Río Negro](https://www.rionegro.com.ar/?p=2700498)
- **Nota: operativo de control en Av. Mosconi, Neuquén (agosto de 2025).** [Noticias NQN](https://www.noticiasnqn.com.ar/noticias/2025/08/21/318999-operativo-en-mosconi-retuvieron-11-camionetas-y-6-transportes-de-personal-en-neuquen)

**Importante:** los requisitos de RTO, habilitaciones y tasas **cambian**. Confirmá siempre con la Subsecretaría de Transporte de tu municipio, la Provincia o la CNRT, según corresponda.

**Videos:** buscá en YouTube "cómo sacar la licencia profesional clase D" y "cómo hacer la RTO" de canales oficiales o municipales.

¿Encontraste un error o querés mejorar este curso? Contribuí en el repositorio del proyecto.
