# Local development

First of all, install every dependency :

```shell
yarn
```

Then, start the backend server :

```shell
nx serve backend
```

Or, if `nx` is not installed globally on your machine :

```shell
npx nx serve backend
```

Don't forget to run linter before pushing :

```shell
nx lint
```