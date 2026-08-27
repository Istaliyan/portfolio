## The problem

Geospatial models fail when sampling, spatial splitting, and experiment tracking are not designed as one system. A random split can place neighboring pixels in training and validation sets, inflating metrics without improving geographic generalization.

## Approach

The dataset is split into spatial blocks before samples are extracted. Every run preserves the data version, configuration, and model artifacts so that its result can be compared or reproduced.

![Conceptual representation of satellite data becoming land-cover classes](../../../assets/projects/land-cover-model.png)

For $C$ classes, training minimizes weighted cross-entropy. The $w_c$ weights compensate for imbalance between frequent and minority land-cover classes:

$$
\mathcal{L} = -\sum_{c=1}^{C} w_c y_c \log(\hat{y}_c)
$$

```python
from sklearn.model_selection import GroupKFold

folds = GroupKFold(n_splits=5)
for train_idx, valid_idx in folds.split(features, labels, groups=spatial_blocks):
    train_model(features[train_idx], labels[train_idx])
    evaluate(features[valid_idx], labels[valid_idx])
```

## Architecture

1. Build and version the spatial dataset.
2. Train and validate on independent geographic blocks.
3. Record parameters, metrics, and artifacts.
4. Run batch inference with the same preprocessing pipeline.

The technology stack combines `PyTorch`, `scikit-learn`, `MLflow`, and `DVC`. Macro F1, experiment count, and drift remain pending metrics until the sample data is replaced.
