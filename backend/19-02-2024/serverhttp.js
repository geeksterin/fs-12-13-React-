
// console.log("HTTP SERVER");
const http = require("node:http");

const myServer = (req, res) => {
  console.log(req);

  if (req.url === "/product-list") {
    if (req.method === "GET") {
      const output = {
        success: true,
        results: [
          {
            id: 1,
            name: "T-Shirt",
          },
          {
            id: 2,
            name: "Shoes",
          },
        ],
      };
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(output));
    } else if (req.method === "POST") {
      const output = {
        success: true,
        results: [],
        message: "This is dummy post api",
      };
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(output));
    } else {
        const output = {
            success: false,
            results: [],
            message: "Route not found",
          };
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify(output));
    }
  } else if (req.url === "/order-history") {
    const output = {
      success: true,
      results: [
        {
          orderId: 123,
          name: "T-Shirt",
        },
        {
          orderId: 456,
          name: "Shoes",
        },
      ],
    };
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(output));
  } else {
    const output = {
      success: false,
      message: "Route not found",
    };
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify(output));
  }

  //   const output = {
  //     success: true,
  //     message: "This is my first API",
  //   };
  //   // res.end("This is my first API");
  //   res.writeHead(400, { "content-type": "application/json" });
  //   res.end(JSON.stringify(output));
};

const server = http.createServer(myServer);

server.listen(5000);
