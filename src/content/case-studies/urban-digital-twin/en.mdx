## The problem

Urban 3D datasets often live in isolated tools. This sample project brings them into a progressive, understandable web interface while keeping visualization assets, geospatial services, and application state separate.

## Approach

Models are transformed into a common coordinate system and published as hierarchical tiles. The client requests only the level of detail needed for the current camera, so cost depends on what is visible rather than on the full size of the city.

A simple bound for detail selection compares geometric error $e_g$ with distance $d$ from the camera:

$$
e_{screen} \propto \frac{e_g}{d}
$$

```ts
viewer.scene.globe.depthTestAgainstTerrain = true;

const tileset = await Cesium3DTileset.fromUrl(tilesetUrl, {
  maximumScreenSpaceError: 12,
});

viewer.scene.primitives.add(tileset);
```

## Architecture

1. Prepare, georeference, and tile 3D assets.
2. Expose layers and queries through geospatial services.
3. Provide progressive visualization and analysis tools in the client.
4. Measure errors, loading times, and interaction performance.

The proposed stack uses `CesiumJS`, `TypeScript`, `3D Tiles`, and `PostGIS`. Served volume, interaction time, and layer count will be measured once the viewer is connected to real data.
