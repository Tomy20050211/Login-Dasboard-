export type RegisterUIProps = {
  name: string;
  email: string;
  password: string;
  loading: boolean;
  error: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onRegister: () => Promise<void>;
  onGoToLogin: () => void;
};

