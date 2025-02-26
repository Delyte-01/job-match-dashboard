"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";


export interface Item {
  id: string;
  title: string;
  description: string;
  location: string;
  company: string;
  salary: string;
  type:string;
  skills:string [];
  roles:string [];
  matchScore:number;
  jobScope:string;
}

export interface DataContextType {
  data: Item[];
  isLoading: boolean;
  error: string | null;
  getPostById:( id:string)=> Item | undefined;
  userSkills: string[];
  setUserSkills:(skills:string[]) => void ;
  missingSkills: string[];
  setMissingSkills:(skills:string[]) => void ;
  // fetchData: () => void;
}


const DataContext = createContext< DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);
  const [userSkills, setUserSkills] = useState<string []>(["React","JavaScript","CSS","TypeScript","Node.js","AWS","Figma","Adobe XD","Machine Learning","JIRA"]);
  
  const Api = "https://67bdc78d321b883e790de388.mockapi.io/jobs/lists";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      try {
     const response = await fetch(`${Api}`);
     const  result = await response.json()
     setData(result)

      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(data)
  const getPostById = (id:string )=> data.find((post)=> post.id === id);

  
  return (
    <DataContext.Provider value={{ data, isLoading, error,getPostById,userSkills,setUserSkills,missingSkills,setMissingSkills }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
}