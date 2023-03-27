export default async function handler(req, res) {
  try {
    const authRes = await fetch('https://api-demo.airwallex.com/api/v1/authentication/login', {
      method: 'POST',
      headers: {
        'x-client-id': 'u8imqjLuT-mu981tyvXlLA',
        'x-api-key': 'f9aab43aea4d3c0dd4d3ae7e7be6c60ac770f7e8731c3b6b57eb0e471fae3f0afbb02852a5aa3b2e53b9fcaf54cc8af4'
      }
    });

    const auth = await authRes.json();

    const balRes = await fetch('https://api-demo.airwallex.com/api/v1/balances/current', {
      headers: {
        'Authorization': `Bearer ${auth.token}`
      }
    });

    const balanceDetails = await balRes.json();
    res.status(200).json({data: balanceDetails});
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
