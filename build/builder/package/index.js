"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPackageConfig = void 0;
var description_1 = require("./options/description");
var name_1 = require("./options/name");
var version_1 = require("./options/version");
var scripts_1 = require("./options/scripts");
var dependencies_1 = require("./options/dependencies");
var packageOptions = [
    {
        name: "name",
        build: name_1.buildName
    },
    {
        name: "version",
        build: version_1.buildVersion
    },
    {
        name: "description",
        build: description_1.buildDescription
    },
    {
        name: "scripts",
        build: scripts_1.buildScripts
    },
    {
        name: "dependencies",
        build: dependencies_1.buildDependencies
    },
    {
        name: "devDependencies",
        build: dependencies_1.buildDependencies
    }
];
var createPackageConfigValue = function (appConfig, packageOptionBuilder, val) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, packageOptionBuilder.build(val, appConfig)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// const createPackageConfigValue = async (appConfig: any, pkg: any, options: any[], currentIndex: number): Promise<any> => {
//     const opt = options[currentIndex];
//     const val = await opt.build(appConfig);
//     if(val !== undefined){
//         return val;
//         // pkg[opt.name] = val;
//     }
//     const nextIndex = currentIndex + 1;
//     if(options[nextIndex]){
//         pkg = await createPackageConfigValue(appConfig, {...pkg}, options, nextIndex);
//         return pkg;
//     } else {
//         return pkg;
//     }
// }
var forOptions = function (packageOptions, appConfig) { var packageOptions_1, packageOptions_1_1; return __awaiter(void 0, void 0, void 0, function () {
    var pcg, opt, _a, _b, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                pcg = { name: "new-project" };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 7, 8, 13]);
                packageOptions_1 = __asyncValues(packageOptions);
                _d.label = 2;
            case 2: return [4 /*yield*/, packageOptions_1.next()];
            case 3:
                if (!(packageOptions_1_1 = _d.sent(), !packageOptions_1_1.done)) return [3 /*break*/, 6];
                opt = packageOptions_1_1.value;
                if (!appConfig[opt.name]) return [3 /*break*/, 5];
                _a = pcg;
                _b = opt.name;
                return [4 /*yield*/, opt.build(appConfig[opt.name])];
            case 4:
                _a[_b] = _d.sent();
                _d.label = 5;
            case 5: return [3 /*break*/, 2];
            case 6: return [3 /*break*/, 13];
            case 7:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 13];
            case 8:
                _d.trys.push([8, , 11, 12]);
                if (!(packageOptions_1_1 && !packageOptions_1_1.done && (_c = packageOptions_1.return))) return [3 /*break*/, 10];
                return [4 /*yield*/, _c.call(packageOptions_1)];
            case 9:
                _d.sent();
                _d.label = 10;
            case 10: return [3 /*break*/, 12];
            case 11:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 12: return [7 /*endfinally*/];
            case 13: return [2 /*return*/, pcg];
        }
    });
}); };
exports.createPackageConfig = function (appConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var appConfigCopy, pcg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                appConfigCopy = JSON.parse(JSON.stringify(appConfig));
                return [4 /*yield*/, forOptions(packageOptions, appConfig)];
            case 1:
                pcg = _a.sent();
                return [2 /*return*/, pcg];
        }
    });
}); };
