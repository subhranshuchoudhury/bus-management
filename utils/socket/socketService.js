// import { io } from "socket.io-client";
// const SOCKET_URL = "https://learnsocket.onrender.com/";

// class WSService {
//   initializeSocket = async () => {
//     try {
//       this.socket = io(SOCKET_URL, {
//         transports: ["websocket"],
//       });
//       console.log(">>> Initializing socket...");

//       // on connect

//       this.socket.on("connect", () => {
//         console.log(">>> Socket Connected.", this.socket.id);
//       });
//       this.socket.on("disconnect", (data) => {
//         console.log("<<<  Socket Disconnected.", data);
//       });
//       this.socket.on("error", (e) => {
//         console.log("<<< Socket Error.", e);
//       });

//       // on declared param

//       this.socket.on("chat message", (msg) => {
//         console.log(msg);
//       });
//     } catch (error) {
//       console.log("<<< Error while connecting socket.", error);
//     }
//   };

//   // emit

//   emit(event, data = {}) {
//     this.socket.emit(event, data);
//   }
//   on(event, callback) {
//     // callback function
//     this.socket.on(event, callback);
//   }
//   removeListener(listenerName) {
//     this.socket.removeListener(listenerName);
//   }
// }

// const socketServices = new WSService();
// export default socketServices;
