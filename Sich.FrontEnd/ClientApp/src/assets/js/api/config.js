//Definición de config para exportar

const { apiUrl } = require("../env/environment");

const urlAPIBase = `${apiUrl}/api/`;

//Exportación de variables

export const urlAPI = urlAPIBase;

//Exportación de funciones

export const getUrlAPI = (inURL) => `${urlAPIBase}${inURL}`;
