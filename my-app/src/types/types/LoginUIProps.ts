export type LoginUIProps = {
  email: string;
  password: string;
  loading: boolean;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin: () => Promise<void>;
};