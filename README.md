# plantuml-code-generator

Provides a command line utility to generate code in various languages given a plantuml class diagram.

add extra functions: puml to json & json to puml

## Command line options

```shell
Usage: plantcode [options] <inputFile>

Generates classfile(s) for the provided PlantUML file specified by <input_file>
and writes to standard output.

Options:
  -l, --language <language>          name of the programming language
                                     which the produced class files
                                     will be written in
  -o, --out <output_path>            the path to output the file(s) to
      --show-languages               displays all the current supported
                                     programming languages for use
                                     for with the language option
  -h, --help                         print help and exit
```

The currently supported languages are

- CoffeeScript (coffeescript) [default]
- C# (csharp)
- ECMAScript5 (javascript)
- ECMAScript6 (javascript2.0)
- Java (java)
- PHP (php)
- Python (python)
- Ruby (ruby)
- TypeScript (typescript)
- Swift (swift)
- Kotlin (kotlin)

## PEG.js

The most recent version of [PlantUML](http://plantuml.sourceforge.net/) does not have a defined grammar to use with
parsing the PlantUML code. Below is a guess as to what the grammer for
the language should be, relative to the [PEG.js](https://github.com/dmajda/pegjs) parser. This creates
a parser which is then used in the creation of all output files. This grammar should validate to any valid PlantUML file.

## Goals

Initially this project will only run with node.js and output coffeescript classes.
The general idea is that, given any PlantUML file, we will be able
to generate class files in any output language. Eventually moving on from node.js and supporting
other tools to use for conversion.

## Example

The current example is very basic and features a common example of a car.

### PlantUML Code:

```
@startuml

hide empty members

abstract Car {
  + void setModel(String model)
  + void setMake(String make)
  + void setYear(Number)
  + String getModel()
  + String getMake()
  + Number getYear()
}

class Toyota
class Honda
class Ford

Toyota --|> Car
Honda --|> Car
Ford --|> Car

@enduml
```

### CoffeeScript Produced:

```coffeescript
class Car

  setModel: (model) ->

  setMake: (make) ->

  setYear: (paramX) ->

  getModel:  ->

  getMake:  ->

  getYear:  ->

class Toyota extends Car

class Honda extends Car

class Ford extends Car
```

### Running:

```
npm i
npx plantcode -l coffescript tests/car.pegjs > tests/car.coffee
```

### Testing:

```
npm test
```

### Updating PEGJS grammar:

If you update the PEGJS grammar file `src/plantuml.pegjs`(https://github.com/roryyu/plantuml-code-generator/blob/master/src/plantuml.pegjs) you must run this command to update the corresponding
`src/plantuml.js` file.

```
npm run build
```

## add extra functions

### examples json to puml

```shell
npx plantcode -l puml ./example/world.json > ./example/world.puml
```

### examples puml to json

```shell
npx plantcode -l json ./example/hello.puml > ./example/hello.json
```
