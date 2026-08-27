## El problema

Los datasets urbanos 3D suelen vivir en herramientas aisladas. Este proyecto de muestra los reúne en una interfaz web progresiva y comprensible, manteniendo separados los activos de visualización, los servicios geoespaciales y el estado de la aplicación.

## Enfoque

Los modelos se transforman a un sistema de coordenadas común y se publican como teselas jerárquicas. El cliente solicita únicamente el nivel de detalle necesario para la cámara actual, de modo que el coste depende de lo visible y no del tamaño completo de la ciudad.

Una cota sencilla para la selección de detalle compara el error geométrico $e_g$ con la distancia $d$ a la cámara:

$$
e_{pantalla} \propto \frac{e_g}{d}
$$

```ts
viewer.scene.globe.depthTestAgainstTerrain = true;

const tileset = await Cesium3DTileset.fromUrl(tilesetUrl, {
  maximumScreenSpaceError: 12,
});

viewer.scene.primitives.add(tileset);
```

## Arquitectura

1. Preparación, georreferenciación y teselado de activos 3D.
2. Exposición de capas y consultas desde servicios geoespaciales.
3. Visualización progresiva y herramientas de análisis en el cliente.
4. Medición de errores, tiempos de carga e interacción.

La propuesta utiliza `CesiumJS`, `TypeScript`, `3D Tiles` y `PostGIS`. El volumen servido, el tiempo de interacción y el número de capas se medirán cuando el visor se conecte a datos reales.
