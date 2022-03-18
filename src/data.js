 const Invoices = [
    {
      "name": "Dorustree",
    "number": 1,
    "address": "India",
    "website": "https://www.dorustree.com/"
    },
    {
      "name": "SilverCloud",
    "number": 2,
    "address": "India",
    "website": "https://www.silvercloud.com/"
    },
    {
      "name": "Access Network",
    "number": 3,
    "address": "India",
    "website": "https://www.anwsi.com/"
    },
    {
      "name": "10Decoders",
    "number": 4,
    "address": "India",
    "website": "https://www.10Decoders.com/"
    },
    
  ];
  
  export function getInvoices() {
    return JSON.stringify( Invoices);
  }
  // export function getInvoice(number) {
  //   return Invoices.find(
  //     (invoice) => invoice.number === number
  //   );
  // }

  export function setInvoices(state){
    return Invoices.push(state)
  }
  