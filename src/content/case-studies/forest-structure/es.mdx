## El problema

Las nubes de puntos brutas requieren una cadena consistente de clasificación, normalización y agregación antes de producir métricas forestales fiables. El reto no es solo calcular alturas: cada producto debe conservar su sistema de referencia, resolución y procedencia.

## Enfoque

El terreno clasificado se interpola para obtener un modelo de elevación. La altura normalizada de cada retorno se calcula como la diferencia entre su coordenada vertical y el terreno estimado en la misma posición:

$$
h_i = z_i - z_{\text{terreno}}(x_i, y_i)
$$

Después se agregan percentiles, densidades y coberturas por celda. Los controles de calidad descartan valores imposibles antes de generar productos ráster o COPC listos para exploración.

```json
{
  "pipeline": [
    "input.copc.laz",
    { "type": "filters.hag_delaunay" },
    { "type": "filters.range", "limits": "HeightAboveGround[0:80]" },
    "output.copc.laz"
  ]
}
```

## Arquitectura

1. Ingesta de teselas y control de metadatos.
2. Clasificación del terreno y normalización de alturas.
3. Cálculo de métricas de estructura y cobertura.
4. Teselado, revisión en QGIS y entrega de productos.

La solución se apoya en `PDAL`, `Python`, `COPC` y `QGIS`. El volumen procesado, la resolución final y las horas ahorradas se documentarán cuando los datos de referencia estén disponibles.
