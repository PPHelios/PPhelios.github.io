export const apiRequest = async (url, method, formData, token) => {
  try {
    if (method === "GET") {
      // handle get request
      const res = await fetch(url, {
        method: "GET",
        credentials: 'include',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      } else {
        const data = await res.json();
        return data;
      }
    } else {
      // handle other request
      const res = await fetch(url, {
        method: method,
        credentials: 'include',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        console.log("api error");
        if (res.status === 400) {
          throw new Error("Please fill all the fields correctly!");
        } else if (res.status === 401) {
          throw new Error("Invalid email and password combination.");
        } else {
          const err = await res.json();
       
        throw new Error(err.message);
        }
        
      } else {
       
        const data = res.json();
        return data;
      }
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

/* 
useEffect(() => {
        const fetchData = async () => {
            const data = await apiRequest("http://localhost:5000", "GET");
            errDataSet(data.message);
        };
        fetchData();
    }, []);
*/
