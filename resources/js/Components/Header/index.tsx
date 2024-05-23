import ApplicationLogo from "../ApplicationLogo"
import MenuButton from "../MenuButton"
import Profile from "../Profile"

const Header = () => {
    return (
        <header className="flex items-center justify-between md:h-14 h-12 px-4 md:bg-gray-50 bg-megb-blue-primary shadow-sm">
            <div>
                <div className="md:hidden w-10">
                    <ApplicationLogo />
                </div>
            </div>
            <div>
                <div className="md:hidden relative">
                    <MenuButton />
                </div>
                <Profile />
            </div>
        </header>
    )
}

export default Header