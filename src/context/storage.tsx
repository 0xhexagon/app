import { Storage } from "@ionic/storage";
import { ReactNode, createContext, useContext } from "react";

const storage = new Storage()
const db = await storage.create()

// Context  
const StorageContext = createContext<Storage>(db)

// Hook 
export const useStorage = () => useContext(StorageContext)

// Provider
interface Props {
	children: ReactNode
}
const StorageProvider: React.FC<Props> = ({ children }) => {
	return (
		<StorageContext.Provider value={db}>
			{children}
		</StorageContext.Provider>
	)
}

export default StorageProvider
