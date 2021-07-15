import { createAction } from "typesafe-actions";

export const spinnerStart = createAction("spinner/SPINNER_START")();

export const spinnerStop = createAction("spinner/SPINNER_STOP")();

// export const spinnerStart = () => {
//   return {
//     type: ActionGroupTypes.SPINNER_START,
//     isLoading: true,
//   };
// };
//
// export const spinnerStop = () => {
//   return {
//     type: ActionGroupTypes.SPINNER_STOP,
//     isLoading: false,
//   };
// };
