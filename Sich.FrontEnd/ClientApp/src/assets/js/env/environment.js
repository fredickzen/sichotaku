const envURLs = {
  bkndLocalHost: "http://localhost:4000",
  bkndProduccion: "http://localhost:4000",
  bkndQa: "http://localhost:4000",
  frontLocalHost: "http://localhost:3000",
  frontProduccion: "http://localhost:3000",
  frontQa: "http://localhost:3000",
};
const env = () => {
  if (process.env.REACT_APP_SUBENVIRONMENT === "production") {
    envURLs.bkndLocalHost = envURLs.bkndProduccion;
  }
  if (process.env.REACT_APP_SUBENVIRONMENT === "qa") {
    envURLs.bkndLocalHost = envURLs.bkndQa;
  }
  let api, front;
  if (process.env.NODE_ENV === "production") {
    if (process.env.REACT_APP_ENVIRONMENT === "production") {
      api = envURLs.bkndProduccion;
      front = envURLs.frontProduccion;
    } else if (process.env.REACT_APP_ENVIRONMENT === "qa") {
      api = envURLs.bkndQa;
      front = envURLs.frontQa;
    }
  } else if (process.env.NODE_ENV === "development") {
    api = envURLs.bkndLocalHost;
    front = envURLs.frontLocalHost;
  }
  return { api, front };
};
export const apiUrl = () => env().api;
export const frontUrl = () => env().front;
