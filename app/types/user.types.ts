import { IProduct } from './product.types'

export interface IUser {
	id: string
	email: string
	password: string
	name: string
	avatarPath: string
	favorites: IProduct[]
}
