import { IData } from "../pages/Home/components/Histogram";

export interface IDataState {
  data: IData[];
  isFetching: boolean;
  error: boolean;
}

export default {
  data: [],
  isFetching: false,
  error: false,
} as IDataState;
