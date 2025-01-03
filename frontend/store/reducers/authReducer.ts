"use client";

interface AuthState {
  token: string | null;
  user: any | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, token: action.payload.token, user: action.payload.user };
    case 'LOGOUT':
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

// Action creators
export const logout = () => ({
  type: 'LOGOUT',
});

export const login = () => ({
  type: 'LOGIN',
});
export default authReducer;

