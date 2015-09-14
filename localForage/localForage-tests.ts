﻿/// <reference path="localForage.d.ts" />

import * as localForage from "localforage";

() => {
    localForage.clear((err: any) => {
        var newError: any = err;
    });

    localForage.iterate((str: string, key: string, num: number) => {
        var newStr: string = str;
        var newKey: string = key;
        var newNum: number = num;
    });

    localForage.length((err: any, num: number) => {
        var newError: any = err;
        var newNumber: number = num;
    });

    localForage.key(0,(err: any, value: string) => {
        var newError: any = err;
        var newValue: string = value;
    });

    localForage.keys((err: any, keys: Array<string>) => {
        var newError: any = err;
        var newArray:  Array<string> = keys;
    });

    localForage.getItem("key",(err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
    });

    localForage.getItem<string>("key").then((value) => {        
        var newStr: string = value
    }); 

    localForage.getItem<number>("keyNumber").then((value) => {        
        var newValue: number = value
    });
  
    localForage.setItem("key", "value",(err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
  });
 
    localForage.setItem("key", "value").then((value) => {
        var v: string = value;
    });

    localForage.setItem("keyNumber", 1337).then((value) => {
        var v: number = value;
    });
  
  localForage.removeItem("key",(err: any) => {
        var newError: any = err; 
    });
    
    localForage.removeItem("key")
        .then( () => {
            
        });

    var config = localForage.default.config({
        name: "testyo",
        driver: localForage.default.LOCALSTORAGE
    });
    
    var store = localForage.default.createInstance({
        name: "da instance",
        driver: localForage.default.LOCALSTORAGE
    });
}
