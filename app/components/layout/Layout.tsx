import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { ScrollView } from 'react-native'

interface ILayout {
	className?: string
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			className={cn('h-full w-full bg-white mt-16 px-4', className)}
		>
			{children}
		</ScrollView>
	)
}

export default Layout
