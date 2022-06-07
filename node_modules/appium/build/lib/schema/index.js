"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("source-map-support/register");

var _schema = require("./schema");

Object.keys(_schema).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _schema[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _schema[key];
    }
  });
});

var _cliArgs = require("./cli-args");

Object.keys(_cliArgs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cliArgs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cliArgs[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NjaGVtYS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3NjaGVtYSc7XG5leHBvcnQgKiBmcm9tICcuL2NsaS1hcmdzJztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTs7QUFDQTs7QUFBQTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQSJ9