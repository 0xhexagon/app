import { createContext, useContext, useState } from "react"
import { useStorage } from "./storage"

export class User {
	id: string
	publicKey: string
	name: string
	username: string
	bio?: string
	profileNft?: string
	poaps?: string[]

	constructor() {
		this.id = ''
		this.publicKey = ''
		this.name = ''
		this.username = ''
	}
}

//Context with default value
interface UserContextType {
	user: User,
	setUser: (u: User) => void
}
const UserContext = createContext<UserContextType>({
	user: new User(),
	setUser: () => {}
})

// Hook  
export const useUser = () => {
	const {user, setUser: update} = useContext(UserContext)
	const storage = useStorage()

	const setUser = async (u: User | null) => {
		if (u) {
			await storage.set('user', JSON.stringify(u))
			update(u)
		} else {
			await storage.remove('user')
			update(new User())
		}
	}

	const getUserFromStorage = async () => {
		const res = await storage.get('user')
		if (res) update(JSON.parse(res))
	}

	return {
		user: user.id ? user : null,
		setUser,
		getUserFromStorage
	}
}

// Provider
interface Props {
	children: React.ReactNode
}
const UserProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = useState<User>(new User())

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
