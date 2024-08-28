import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
} from "react";
import { Feature } from "../../app/api/features/route";
import useSWR from "swr";

type State = {
  features: Feature[] | [];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "FETCH_SUCCESS"; payload: Feature[] }
  | { type: "FETCH_ERROR"; payload: string };

const initialState: State = {
  features: [],
  loading: true,
  error: null,
};

const FeatureContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

const featureReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, features: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const FeatureProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(featureReducer, initialState);

  // Fetch data using SWR
  const { data, error } = useSWR<Feature[]>("/api/features", (url: any) =>
    fetch(url).then((res) => res.json())
  );

  // Dispatch actions based on SWR data and error
  useMemo(() => {
    if (data) {
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    }
    if (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }, [data, error]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  );
};

export const useFeatureContext = () => {
  const context = useContext(FeatureContext);
  if (context === undefined) {
    throw new Error("useFeatureContext must be used within a FeatureProvider");
  }
  return context;
};
