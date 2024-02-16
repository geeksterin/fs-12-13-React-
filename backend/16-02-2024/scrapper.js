console.log("Web Scrapper");
const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
/**
 * 1. Get the data from a certain page from amazon - axios, fetch = DONE
 * 2. Filter/ find the required data from the page = DONE
 * 3. Store thoese information into an excel file
 */

let products = [
  {
    name: "Realme c20",
    price: 20000,
  },
  {
    name: "Apple iPhone",
    price: 80000,
  },
];

const getDataFromAmazon = async () => {
  try {
    const response = await axios.get(
      "https://www.amazon.com/s?k=phone&page=2&crid=18EUYBSP7O1SQ&qid=1702535235&sprefix=phon%2Caps%2C280&ref=sr_pg_2",
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
    // console.log(response.data);
    const $ = cheerio.load(response.data);
    // const body = $("body");
    const productCards = $("[data-asin]")
      .find("span.a-size-medium.a-color-base.a-text-normal") // name
    //   .find("span.a-price-whole") //price
    //   .find("span.a-icon-alt") //ratings
      .each((index, data) => {
        products.push({ name: $(data).text() });
        // console.log($(data).text());
      });
    //   const body = document.getElementsByTagName("body");
    //   body[0].querySelector("span.a-size-medium.a-color-base.a-text-normal")
    //   .map((data) => {
    //     console.log(data.innerText)
    //   })
    // console.log(titleSpans);

    console.log(products);
    /**
     * 1. Create a workbook (Excel file)
     * 2. Insert the data into sheet
     * 3. Create a sheet (Excel sheet)
     * 5. Attach the sheet to the file
     * 5. Write the file to filesystem
     */
    const workbook = xlsx.utils.book_new();
    // const sheetData = [
    //   ["Name", "Age", "Country"],
    //   ["John Doe", 25, "USA"],
    //   ["Jane Doe", 30, "Canada"],
    //   ["Bob Smith", 22, "UK"],
    // ];

    // const workSheet = xlsx.utils.aoa_to_sheet(sheetData);
    const workSheet = xlsx.utils.json_to_sheet(products);
    xlsx.utils.book_append_sheet(workbook, workSheet, "Sheet1");
    xlsx.writeFile(workbook, "output.xlsx");
  } catch (err) {
    console.log(err);
  }
};

getDataFromAmazon();
