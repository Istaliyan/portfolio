## The problem

Manually monitoring long coastlines is slow and difficult to reproduce. This sample project turns a Sentinel-2 time series into a verifiable pipeline: select comparable observations, separate water from land, and quantify shoreline displacement.

## Approach

The workflow queries scenes through STAC, applies cloud masks, and normalizes each observation before calculating spectral indices. A first approximation uses the normalized difference water index, where $G$ is the green band and $NIR$ is near infrared:

$$
\operatorname{NDWI} = \frac{G - NIR}{G + NIR}
$$

The threshold is not treated as a universal constant. It is recorded with the acquisition date, cloud coverage, and processing version so that every geometry can be reproduced.

```python
import numpy as np

def ndwi(green: np.ndarray, nir: np.ndarray) -> np.ndarray:
    denominator = green + nir
    return np.divide(
        green - nir,
        denominator,
        out=np.zeros_like(green, dtype=float),
        where=denominator != 0,
    )
```

## Architecture

1. Query and select scenes using spatial and temporal criteria.
2. Correct, normalize, and mask cloud-covered observations.
3. Extract water and validate the resulting geometries.
4. Compare dates and publish traceable products.

The proposed implementation combines `Python`, `Rasterio`, `GeoPandas`, and `STAC` catalogs. Coastline coverage, accuracy, and time-saving metrics remain provisional until the study is run over a validated area.
