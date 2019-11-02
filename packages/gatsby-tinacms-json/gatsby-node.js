"use strict";
/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var graphql_1 = require("gatsby/graphql");
exports.setFieldsOnGraphQLNodeType = function (_a) {
    var type = _a.type, getNode = _a.getNode;
    var pathRoot = process.cwd();
    if (!/.*Json$/.test(type.name)) {
        return {};
    }
    return {
        rawJson: {
            type: graphql_1.GraphQLString,
            args: {},
            resolve: function (_a) {
                var children = _a.children, id = _a.id, internal = _a.internal, parent = _a.parent, data = __rest(_a, ["children", "id", "internal", "parent"]);
                return JSON.stringify(data);
            },
        },
        fileRelativePath: {
            type: graphql_1.GraphQLString,
            args: {},
            resolve: function (_a) {
                var children = _a.children, id = _a.id, internal = _a.internal, parent = _a.parent, data = __rest(_a, ["children", "id", "internal", "parent"]);
                var p = getNode(parent);
                return p.absolutePath.replace(pathRoot, '');
            },
        },
    };
};
