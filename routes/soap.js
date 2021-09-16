const express = require('express');
const router = express.Router();

const soap = require('soap');
const xml2js = require('xml2js');
const _ = require('underscore');


const url = process.env.SOAP_URL || 'http://localhost/ws/service.wsdl';

router.get('/', async function (req, res, next) {

    const xml = '<root>value</root>';

    const args = {parametro: `<![CDATA[${xml}]]>`};

    const SERVICE_NAME = 'crearSolicitudInspeccionAsync';

    const client = await soap.createClientAsync(url, {escapeXML: false, preserveWhitespace: true});

    const responseSOAP = await client[SERVICE_NAME](args);

    console.log(`Response from SOAP ${responseSOAP}`);

    const responseObject = getObject(responseSOAP);

    const parseStringPromise = xml2js.parseStringPromise;
    const response = await parseStringPromise(responseObject['SolicitudInspeccionRespuesta']['ESTADO']);

    console.log(`String xml ${JSON.stringify(response)}`);

    res.status(200).json({message: 'Hi', soap: response});
});


const getObject = (array) => {
    return _.first(array.filter(element => element instanceof Object));
};

module.exports = router;
