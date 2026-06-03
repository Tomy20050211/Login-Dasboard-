import { RegisterProps } from "../types/interfaces/RegisterProps";


export const register = async ({name, email, password}: RegisterProps) =>{
      try {
      const response = await fetch("/api/routeRegister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Created user");
    } catch (error) {
      console.error(error);
    }
  };
