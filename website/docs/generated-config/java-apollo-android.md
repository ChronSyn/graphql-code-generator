This plugin and presets creates generated mappers and parsers for a complete type-safe GraphQL requests, for developers that uses Apollo Android runtime.

## Installation

:::shell Using `yarn`

    $ yarn add -D @graphql-codegen/java-apollo-android

:::

## API Reference

### `package`

type: `string`

Customize the Java package name for the generated operations. The default package name will be generated according to the output file path.

#### Usage Examples

```yml
generates:
./app/src/main/java/:
  preset: java-apollo-android
  config:
    package: "com.my.package.generated.graphql"
  plugins:
    - java-apollo-android
```

### `typePackage`

type: `string`

Customize the Java package name for the types generated based on input types.

#### Usage Examples

```yml
generates:
./app/src/main/java/:
  preset: java-apollo-android
  config:
    typePackage: "com.my.package.generated.graphql"
  plugins:
    - java-apollo-android
```

### `fragmentPackage`

type: `string`

Customize the Java package name for the fragments generated classes.

#### Usage Examples

```yml
generates:
./app/src/main/java/:
  preset: java-apollo-android
  config:
    fragmentPackage: "com.my.package.generated.graphql"
  plugins:
    - java-apollo-android
```

### `fileType`

type: `FileType`



### `scalars`

type: `ScalarsMap`

Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type.

#### Usage Examples

```yml
config:
  scalars:
    DateTime: Date
    JSON: "{ [key: string]: any }"
```

### `namingConvention`

type: `NamingConvention`
default: `pascal-case#pascalCase`

Allow you to override the naming convention of the output.
You can either override all namings, or specify an object with specific custom naming convention per output.
The format of the converter must be a valid `module#method`.
Allowed values for specific output are: `typeNames`, `enumValues`.
You can also use "keep" to keep all GraphQL names as-is.
Additionally you can set `transformUnderscore` to `true` if you want to override the default behavior,
which is to preserves underscores.

#### Usage Examples

##### Override All Names
```yml
config:
  namingConvention: lower-case#lowerCase
```

##### Upper-case enum values
```yml
config:
  namingConvention:
    typeNames: pascal-case#pascalCase
    enumValues: upper-case#upperCase
```

##### Keep names as is
```yml
config:
  namingConvention: keep
```

##### Remove Underscores
```yml
config:
  namingConvention:
    typeNames: pascal-case#pascalCase
    transformUnderscore: true
```

### `typesPrefix`

type: `string`
default: ``

Prefixes all the generated types.

#### Usage Examples

```yml
config:
  typesPrefix: I
```

### `skipTypename`

type: `boolean`
default: `false`

Does not add __typename to the generated types, unless it was specified in the selection set.

#### Usage Examples

```yml
config:
  skipTypename: true
```

### `nonOptionalTypename`

type: `boolean`
default: `false`

Automatically adds `__typename` field to the generated types, even when they are not specified
in the selection set, and makes it non-optional

#### Usage Examples

```yml
config:
  nonOptionalTypename: true
```