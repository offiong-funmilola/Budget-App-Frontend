export const setCookie = (name: string, value: string, hour?: number) => {
    let expirationDate = new Date();
    if(hour){
      expirationDate.setDate(expirationDate.getDate() + 1);
    }
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; Secure; HttpOnly; SameSite=None`;
   };

export const getCookie = (name:string) => {
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));
   
    return cookies ? cookies.split("=")[1] : null;
   };

export const deleteCookie = (name: string) => {
    document.cookie = `${name}=;`;
   };