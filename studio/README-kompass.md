# Kompass-Studio

Kompass Studio is only a little graphical customization of cosmo Studio.
All original GitHub Workflows / Actions are deactivated in this fork of Wundergraph Cosmo.

## Build an Image
There is a GitHub Action k-studio-ci.yaml that starts the docker build process on every merge request or push to the kompass-studio branch.
[k-studio-ci.yaml](../.github/workflows/k-studio-ci.yaml)

The build image will be pushed to the  [Git Hub Docker Repository](https://github.com/flosk8/kompass-cosmo/pkgs/container/kompass-cosmo%2Fkompass-studio) `kompass-studio` with the tag `latest`.

## Build a Version / Release

To build and tag a new release, sync the main branch of this fork with the original Wundergraph Cosomo repository.
Then merge into the `kompass-studio` branch.
Then create a new tag in the format `kompass-studio@X.Y.Z` where `X.Y.Z` is the original studio version number.
The original studio version number can be found in the `package.json` of the studio. [package.json](../studio/package.json)
