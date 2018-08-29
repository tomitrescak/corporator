export const LocalStorage = {
  get token() {
    return localStorage.getItem('corpix.token');
  },
  set token(token: string) {
    if (token) {
      localStorage.setItem('corpix.token', token);
    } else {
      localStorage.removeItem('corpix.token');
    }
  },
  get userId() {
    return localStorage.getItem('corpix.userId') || undefined;
  },
  set userId(id: string) {
    if (id) {
      localStorage.setItem('corpix.userId', id);
    } else {
      localStorage.removeItem('corpix.userId');
    }
  }
};
