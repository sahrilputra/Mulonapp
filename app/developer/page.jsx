import React from "react";
import styles from './styles.module.scss'
export default function Home() {
  return (
    <>
      <h1>Developer api guide</h1>

      <h3>
        Base url <span>http://localhost:3000/api</span>
      </h3>
      <main>
        <div>
          <p>Admin</p>
          <h4>Get List Admin</h4>
          <h5></h5>
          <p>Mendapatkan list Admin</p>

          <div className="cont m-4">
            <ul>
              <li>
                Url : <span className="urlRoute">/list</span>
              </li>
              <li>Method : GET</li>
              <li>Response :</li>
            </ul>

            <div className="Response">
              <p>
                {`
              {"_id": "6557b06b09ab032c7a7fa718",
              "name": "Qwetyuip",
              "email": "qetyufx@gmail.com",
              "password": "123456778ety",
              "role": "admin",
              "team": "",
              "avatar": "https://i.pravatar.cc/150",
              "createdAt": "2023-11-17T18:26:51.060Z",
              "updatedAt": "2023-11-17T18:26:51.060Z",
              "__v": 0}
              `}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4>Post New Admin</h4>
          <p>Membuat Admin baru</p>

          <div className="cont m-4">
            <ul>
              <li>
                Url : <span className="urlRoute">/admin/register</span>
              </li>
              <li>Method : POST</li>
              <li>Body : </li>
              <p>
                {`
              {"name": "Hendro",
    "email": "mulonhendro@gmail.com",
    "team": "other",
    "password": "endos1234"
}
`}
              </p>
              <li>Response :</li>
            </ul>

            <div className="Response">
              <p>
                {`
                {
                  "message": "Pendaftaran berhasil",
                  "data": {
                      "name": "Hendro",
                      "email": "mulonhendro@gmail.com",
                      "password": "endos1234",
                      "role": "admin",
                      "team": "other",
                      "avatar": "https://i.pravatar.cc/150",
                      "_id": "655b65d8f691f564683deae1",
                      "createdAt": "2023-11-20T13:57:44.181Z",
                      "updatedAt": "2023-11-20T13:57:44.181Z",
                      "__v": 0
                  }
              }
                `}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4>Delete Admin</h4>
          <p>Meghapus data Admin</p>

          <div className="cont m-4">
            <ul>
              <li>
                Url : <span className="urlRoute">/admin/{`{ID}`}</span>
              </li>
              <li>
                Example :{" "}
                <span className="urlRoute">
                  /admin/6557700f56c2c71c7fa7646c
                </span>
              </li>
              <li>Method : Delete</li>
              <li>Response :</li>
            </ul>

            <div className="Response">
              <p>
                {`
                {
                  "_id": "6557700f56c2c71c7fa7646c",
                  "name": "boby anggara",
                  "email": "boby@gmail.com",
                  "password": "tolol123",
                  "role": "admin",
                  "team": "",
                  "avatar": "https://i.pravatar.cc/150",
                  "createdAt": "2023-11-17T13:52:15.523Z",
                  "updatedAt": "2023-11-17T13:52:15.523Z",
                  "__v": 0
              }
                `}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h6>USER</h6>
          <h4>Post Get Customer</h4>
          <p>Register Untuk User</p>

          <div className="cont m-4">
            <ul>
              <li>
                Url : <span className="urlRoute">/user/register</span>
              </li>
              <li>Method : POST</li>
              <li>Body : </li>
              <p>
                {`
             {
              "name": "Hendro",
              "email": "hen@gmail.com",
              "password": "apasih123",
              "phone": "12667474387487599",
              "username": "EndosBos"
          }
`}
              </p>
              <li>Response :</li>
            </ul>

            <div className="Response">
              <p>
                {`
               {
                "message": "Pendaftaran berhasil",
                "data": {
                    "name": "Hendro",
                    "email": "hen@gmail.com",
                    "password": "apasih123",
                    "phone": "12667474387487599",
                    "role": "user",
                    "username": "EndosBos",
                    "avatar": "https://i.pravatar.cc/150",
                    "isDriver": false,
                    "_id": "655b88f3f691f564683deb1d",
                    "address": [],
                    "trashHistory": [],
                    "createdAt": "2023-11-20T16:27:31.950Z",
                    "updatedAt": "2023-11-20T16:27:31.950Z",
                    "__v": 0
                }
            }
                `}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4>Get List User</h4>
          <h5></h5>
          <p>Mendapatkan list User</p>

          <div className="cont m-4">
            <ul>
              <li>
                Url : <span className="urlRoute">/user/list</span>
              </li>
              <li>Method : GET</li>
              <li>Response :</li>
            </ul>

            <div className="Response">
              <p>
                {`
            [
              {
                  "_id": "65579ca7510b5182434d254b",
                  "name": "hello",
                  "email": "user@gmail.com",
                  "password": "qwe213131",
                  "phone": "9213213131",
                  "role": "user",
                  "username": "qweryt",
                  "avatar": "https://i.pravatar.cc/150",
                  "isDriver": false,
                  "address": [],
                  "trashHistory": [
                      {
                          "serviceType": "your_service_type",
                          "collectionDate": "2023-11-17T21:34:45.785Z",
                          "trashType": "none",
                          "weight": 5,
                          "price": 21,
                          "location": "Offline",
                          "_id": "6557dc757cb40b45194b8aa0"
                      },
                      {
                          "serviceType": "Collect Waste",
                          "collectionDate": "2023-11-17T21:36:09.879Z",
                          "trashType": "none",
                          "weight": 10,
                          "price": 210000,
                          "location": "Offline",
                          "_id": "6557dcc97cb40b45194b8aa4"
                      },
                      {
                          "serviceType": "Collect Waste",
                          "collectionDate": "2023-11-17T22:39:11.919Z",
                          "trashType": "none",
                          "weight": 20,
                          "price": 100000,
                          "location": "Offline",
                          "_id": "6557eb8f6d3d59cd847566d4"
                      },
                      {
                          "serviceType": "Collect Waste",
                          "collectionDate": "2023-11-17T23:08:40.938Z",
                          "trashType": "none",
                          "weight": 99,
                          "price": 99999,
                          "location": "Offline",
                          "_id": "6557f27866105862579e10b3"
                      },
                      {
                          "serviceType": "Collect Waste",
                          "collectionDate": "2023-11-17T23:51:08.302Z",
                          "trashType": "none",
                          "weight": 199,
                          "price": 99999,
                          "location": "Offline",
                          "_id": "6557fc6c1a33088045ae311c"
                      }
                  ],
                  "createdAt": "2023-11-17T17:02:31.058Z",
                  "updatedAt": "2023-11-17T23:51:08.323Z",
                  "__v": 5
              }
              `}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4>Post Waste Collector</h4>
          <p>Membuat pos Pemulung</p>

          <div className="cont m-4">
            <ul>
              <li>
                Url : <span className="urlRoute">/service/wasteCollector</span>
              </li>
              <li>Method : POST</li>
              <li>Body : </li>
              <p>
                {`
             {
              "phone": "9213213131",
              "price": 99999,
              "weight": 199
          }
`}
              </p>
              <li>Response :</li>
            </ul>

            <div className="Response">
              <p>
                {`
               {
                "message": "Data berhasil ditambahkan ke trashHistory",
                "data": {
                    "_id": "65579ca7510b5182434d254b",
                    "name": "hello",
                    "email": "user@gmail.com",
                    "password": "qwe213131",
                    "phone": "9213213131",
                    "role": "user",
                    "username": "qweryt",
                    "avatar": "https://i.pravatar.cc/150",
                    "isDriver": false,
                    "address": [],
                    "trashHistory": [
                        {
                            "serviceType": "your_service_type",
                            "collectionDate": "2023-11-17T21:34:45.785Z",
                            "trashType": "none",
                            "weight": 5,
                            "price": 21,
                            "location": "Offline",
                            "_id": "6557dc757cb40b45194b8aa0"
                        },
                        {
                            "serviceType": "Collect Waste",
                            "collectionDate": "2023-11-17T21:36:09.879Z",
                            "trashType": "none",
                            "weight": 10,
                            "price": 210000,
                            "location": "Offline",
                            "_id": "6557dcc97cb40b45194b8aa4"
                        },
                        {
                            "serviceType": "Collect Waste",
                            "collectionDate": "2023-11-17T22:39:11.919Z",
                            "trashType": "none",
                            "weight": 20,
                            "price": 100000,
                            "location": "Offline",
                            "_id": "6557eb8f6d3d59cd847566d4"
                        },
                        {
                            "serviceType": "Collect Waste",
                            "collectionDate": "2023-11-17T23:08:40.938Z",
                            "trashType": "none",
                            "weight": 99,
                            "price": 99999,
                            "location": "Offline",
                            "_id": "6557f27866105862579e10b3"
                        },
                        {
                            "serviceType": "Collect Waste",
                            "collectionDate": "2023-11-17T23:51:08.302Z",
                            "trashType": "none",
                            "weight": 199,
                            "price": 99999,
                            "location": "Offline",
                            "_id": "6557fc6c1a33088045ae311c"
                        },
                        {
                            "serviceType": "Collect Waste",
                            "collectionDate": "2023-11-20T16:14:14.965Z",
                            "trashType": "none",
                            "weight": 199,
                            "price": 99999,
                            "location": "Offline",
                            "_id": "655b85d6f691f564683deb10"
                        }
                    ],
                    "createdAt": "2023-11-17T17:02:31.058Z",
                    "updatedAt": "2023-11-20T16:14:15.094Z",
                    "__v": 6
                }
            }
                `}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4>Delete User</h4>
          <p>Meghapus data User</p>

          <div className="cont m-4">
            <ul>
              <li>
                Url : <span className="urlRoute">/user/{`{ID}`}</span>
              </li>
              <li>
                Example :{" "}
                <span className="urlRoute">/user/6557b10409ab032c7a7fa71d</span>
              </li>
              <li>Method : Delete</li>
              <li>Response :</li>
            </ul>

            <div className="Response">
              <p>
                {`
                {
                  "_id": "6557b10409ab032c7a7fa71d",
                  "name": "Phone tester",
                  "email": "youuu@gmail.com",
                  "password": "qwerty123",
                  "phone": "852437501323",
                  "role": "user",
                  "username": "Phonetes",
                  "avatar": "https://i.pravatar.cc/150",
                  "isDriver": false,
                  "address": [],
                  "trashHistory": [
                      {
                          "serviceType": "Collect Waste",
                          "collectionDate": "2023-11-17T22:56:01.889Z",
                          "trashType": "none",
                          "weight": 20,
                          "price": 120000,
                          "location": "Offline",
                          "_id": "6557ef8166105862579e1094"
                      },
                      {
                          "serviceType": "Collect Waste",
                          "collectionDate": "2023-11-17T22:58:02.856Z",
                          "trashType": "none",
                          "weight": 20,
                          "price": 120000,
                          "location": "Offline",
                          "_id": "6557effa66105862579e1098"
                      }
                  ],
                  "createdAt": "2023-11-17T18:29:24.546Z",
                  "updatedAt": "2023-11-17T22:58:02.875Z",
                  "__v": 2
              
                `}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
