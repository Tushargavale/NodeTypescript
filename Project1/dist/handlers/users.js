"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUSers = getUSers;
function getUSers(req, resp) {
    resp.send([
        {
            name: 'Tushar',
            ID: 1031055
        }, {
            name: 'Rohit',
            ID: 1546015
        }
    ]);
}
