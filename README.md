# [@gliech/semantic-release-config-github-generic][1]

> **Disclaimer:** This configuration does not do much by itself and was mainly
> created so that I won't have to replace configurations in all of my
> repositories if I decide to change the way I do semantic versioning.

A shareable semantic-release config for projects that are on github and do not
need any special build or release steps.

This shareable configuration uses [@gliech/semantic-release-config-base][2],
which serves as the source for most changes to the default options for plugins
included here.

## Usage

As this module and [@gliech/semantic-release-config-base][2] contain all
necessary modules as dependencies, you only have to install the module itself.

In addition this repository provides a reusable GitHub Actions workflow that you
can use in your `.github/workflows`. 

```yaml
---
on:
  push:
name: main
jobs:
  release:
    name: semantic release
    uses:
      gliech/semantic-release-config-github-generic/.github/workflows/release.yml@v1
```

The reusable workflow also defines one optional input, `semrel_config_version`
that can be used to pin the version of the npm module used in the workflow. It
defaults to `"1.x"`

## License

This project is licensed under the terms of the [BSD 4-Clause License](LICENSE)

[1]: https://www.npmjs.com/package/@gliech/semantic-release-config-github-generic
[2]: https://www.npmjs.com/package/@gliech/semantic-release-config-base
