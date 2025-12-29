import { createContext, useEffect, useReducer } from "react";

const getStoredJSON = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

const INITIAL_STATE = {
  user: getStoredJSON("user"),
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        token: action.token || null,
        role: action.role || null,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: action.payload,
      };

    case "REGISTER_SUCCESS":
      return { ...state, loading: false, error: null };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    console.log("📌 AuthContext user state:", state.user);

    if (state.user) localStorage.setItem("user", JSON.stringify(state.user));
    else localStorage.removeItem("user");

    state.token
      ? localStorage.setItem("token", state.token)
      : localStorage.removeItem("token");

    state.role
      ? localStorage.setItem("role", state.role)
      : localStorage.removeItem("role");
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        role: state.role,
        token: state.token,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
