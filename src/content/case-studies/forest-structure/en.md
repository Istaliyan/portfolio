## The problem

Raw point clouds need a consistent classification, normalization, and aggregation pipeline before they can produce reliable forest metrics. The challenge is not only calculating heights: every product must preserve its coordinate reference system, resolution, and provenance.

## Approach

Classified ground points are interpolated into an elevation model. The normalized height of each return is the difference between its vertical coordinate and the estimated terrain at the same position:

$$
h_i = z_i - z_{\text{ground}}(x_i, y_i)
$$

Percentiles, densities, and coverage are then aggregated by cell. Quality controls reject impossible values before producing raster or COPC outputs ready for exploration.

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

## Architecture

1. Ingest tiles and validate metadata.
2. Classify terrain and normalize heights.
3. Compute structure and canopy-coverage metrics.
4. Tile outputs, review them in QGIS, and deliver products.

The solution uses `PDAL`, `Python`, `COPC`, and `QGIS`. Processed volume, final resolution, and hours saved will be documented when reference data is available.
