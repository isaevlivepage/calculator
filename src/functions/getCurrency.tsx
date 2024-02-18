const url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_z4Gsj4avmy9YPHsmDsab1eCFGpE7ywJy9vYVD0kx&currencies=RUB';

type response =  {
    code: String;
    value: Number;
}
type getResponse = {
    data: response [];
}
const getCurrency = async () => {
 const response = await fetch(url);
 if(response.status == 200) {
     const data = await response.json();
     const code = data.data.RUB.code;
     const value = data.data.RUB.value;
     const last_updated_at = data.meta.last_updated_at;

     return value;


     // const ddata = (await response.json()) as getResponse;
     // debugger;
     // console.log(ddata);
 }
 // window["response"] = response;
 // console.log('USD = ', response.)
}

export default getCurrency;

