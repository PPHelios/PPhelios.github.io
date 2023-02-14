export const apiRequest = async (url, method, formData) => {
  try {
    if (method === "GET") {
      // handle get request
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
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
