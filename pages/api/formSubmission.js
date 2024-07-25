// sending username and password to api provided
export default async function handler(req, res) {
    const { username, password } = req.body;
    const data = { username, password };
    // const url = 'https://sheetdb.io/api/v1/9i0ongodfdtta';
    //https://sheet.best/api/sheets/ee05e664-7147-42c3-9553-1452c08caf63
    //'https://sheet.best/api/sheets/240f5049-3487-451b-97fb-809f1bdbb80d'
    const url = 'https://sheetdb.io/api/v1/6hwujluxee6pr';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
  
      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }