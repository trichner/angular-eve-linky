Angular module to create Eve Online urls ('Auto Linking').

## Install

```
bower install angular-eve-linky --save
```

## Usage

```
app = angular.module('app', ['angular-eve-linky']);

...

app.controller('MyController', function(EveLinky){

    console.log('Linked character: ' +EveLinky.urlCharacter(1234,'CCP Derpalot'));

});
```

