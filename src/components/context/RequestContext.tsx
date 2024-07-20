import { createContext, useState, useEffect, useContext } from "react";
import { ClientRequestType, FetchType, DataType, Nullable, User, type Error } from "../../type";
import { toast } from "react-toastify";


const RequestContext = createContext<ClientRequestType | null> (null)

export const RequestProvider = ({children}: { children: JSX.Element }) => {

    const [error, setError] = useState<Nullable<Error>>(null)
    const [currentUser, setCurrentUser] = useState<Nullable<User>>(null)

    //Remove the token for security purpose and handled it with cookies
    // if (token) {
    //     fetchOptions = {
    //       ...fetchOptions,
    //       headers: [
    //         ...fetchOptions.headers,
    //         ["Authorization", "Bearer " + token],
    //       ],
    //     };
    //   }

  
    useEffect(() => {
        setCurrentUser(
            localStorage.getItem('user') 
            ? JSON.parse(localStorage.getItem('user')!) 
            : undefined);
    }, [])

  const clientRequest = (
    url: string,
    type: string,
    header?: Object,
    data?: DataType
  ) => {
    let fetchOptions: FetchType = {
      method: type,
      mode: "cors",
    };
    if (data) {
      fetchOptions.body = JSON.stringify(data);
    }
    if (header) {
          fetchOptions.headers = Object.entries(header);
        }
    return fetch(url, fetchOptions)
      .then((res) => {
        if (res.status === 401) {
            toast.warn('Unauthorized')
          //throw Error("User not authenticated");  
        }
        if (!res.ok) {
          console.log(res.status);
          toast.warn('Something went wrong, try again')
          //throw Error("Something went wrong, try again");
        }
        return res.json();
      })
      .then((result) => {
        //console.log(result)
        return result;
      })
      .catch((err) => {
        console.log(err);
        toast.warn(err)
      });
  };

  const postReq = (url: string, data: DataType) => {
    return clientRequest(
      url,
      "POST",
      {
        'Content-Type': 'application/json',
      },
      data
    );
  };

  const getReq = (url: string) => {
    return clientRequest(url, "GET",
        {
            'Content-Type': 'application/json',
          }
    );
  };

  const putReq = (url: string, data: DataType) => {
    return clientRequest(
      url,
      "PUT",
      {
        'Content-Type': 'application/json',
      },
      data
    );
  };

  const deleteReq = (url: string) => {
    return clientRequest(url, "DELETE", {
        'Content-Type': 'application/json',
      });
  };
    return(
        <RequestContext.Provider 
            value={{
                postReq,
                putReq,
                getReq,
                deleteReq,
                currentUser, 
                error, 
                setError
            }}>
            {children}
        </RequestContext.Provider>
    )
}

export const useClientRequestContext = () => {
    const {postReq,
        putReq,
        getReq,
        deleteReq,
        currentUser, 
        error, 
        setError} = useContext(RequestContext) as ClientRequestType
    
        return  {postReq,
        putReq,
        getReq,
        deleteReq,
        currentUser, 
        error, 
        setError}
 }
 