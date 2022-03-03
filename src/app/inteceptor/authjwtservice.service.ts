import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthjwtserviceService {

  constructor() {}
  
//   {
//     "success": true,
//     "user": {
//         "_id": "62175be26ca42fcce939c3be",
//         "username": "test",
//         "hash": "2ef1e27847d2da580f573b9a809b1315a919e2bffc60673d614182ba4ce3e110826891c2cdcebd9f1ea82e50500ae48a88e81b2c58433079f1cc03892337fb73",
//         "salt": "64f76f8486d38d78d9378f07794452c1c9ebcf575179e5efd01b02a53d60dbae",
//         "__v": 0
//     },
//     "token": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE3NWJlMjZjYTQyZmNjZTkzOWMzYmUiLCJpYXQiOjE2NDU2OTg0MDE5NzcsImV4cCI6MTY0NTY5ODQ4ODM3N30.OtaZdQ9Z_9BxUZH6ldTPUPGTn070AuRkcAtAJDUrZy_xUi_csJg3k_h0vT5sWYSbrICLVgLHlu59CVqylDv8jUF6NJ3s_A8l89Py8Tv68ECHODwQK0NxlhMzL4EMhKDMDuxsqZ9d45a9Hp-DgHSpxfBb6Z6i5gGvtsTs2ECoZXDVsL9Wdvo_1I6Yz5HFHBwG8wlpUeCkG_yft-X1NzLK5FkYpZ4gc7aNl-d7CV1o1MmvJArhINAoRbjenaHyOt0Z_ojOk8kpZfYInUaKPKsH4aPk54BmGlGKbX5aazZZlXw670BtQEHp4jk_06ERE18Zod_wWKJo1kwAL0F04D0OMcoivC3D4au8YNnwYMFu1cMIlToGVsIGp3-3SCNm5X8hJATJwDvEkZ6Tq8Rny02GCUIXRgP4SOtYQdBHr77EioTjYy5vnURIdQZlrRyCnK6JtNircswh5sSZQXta9iXWuIq60uyazBbfoz1eSUBuVw3a7UD-c961n0SWp_wt3RayxNbgpKiM7Ipu2ANsCwtDaxe7zt5QSP0p75pEZ7mzmaQtyN_Azvrf9Y2OXUy0SBYU51FvIGZR_FP0IbdVWNEM36yKDgZ3ajKbNGOuBGPSBXDUvogaAAMhyHlmHiN0Xh13u6LLyrtex86-Y5pYrxzcmFach0HH2_jHsYQlGyTPDjw",
//     "expiresIn": "1d"
// }



  setLocalStorage(responseObj) {

      // Adds the expiration time defined on the JWT to the current moment
      const expiresAt = moment().add(Number.parseInt(responseObj.expiresIn), 'days');

      localStorage.setItem('id_token', responseObj.token);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration(), "second");
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      if (expiration) {
          const expiresAt = JSON.parse(expiration);
          return moment(expiresAt);
      } else {
          return moment();
      }
  }    


}



