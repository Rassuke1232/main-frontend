import React from 'react';
import  { Link } from 'react-router';
import './Header.css'
//import LoginModal from "../login-modal/LoginModal";
//import RegisterModal from "../register-modal/RegisterModal.tsx"
//import useUser from "../../hooks/useUser.ts";
//import LanguageSwitcher from "../language-switcher/LanguageSwitcher.tsx";
import {useTranslation} from "react-i18next";
const Header: React.FC = () => {

    const { t } = useTranslation();
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const [isLoginModalVisible, setLoginModalVisible] = useState(false);
    // const [isRegisterModalVisible, setRegisterModalVisible] = useState(false);
    //
    // // const { user,  userLogout} = useUser();
    //
    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };
    //
    // const toggleLoginModal = () => {
    //     setLoginModalVisible(!isLoginModalVisible);
    // }
    //
    // const toggleRegisterModal = () => {
    //     setRegisterModalVisible(!isRegisterModalVisible);
    //     console.log(isRegisterModalVisible)
    // }
    //
    // const onLogout = async () => {
    //     // await userLogout();
    //     window.location.reload();
    // }



    return (
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">{t("About me")}</Link>
                    </li>
                    <li>
                        <Link to="/features">{t("Features")}</Link>
                    </li>
                    <li>
                        <Link to="/contact">{t("Contact")}</Link>
                    </li>
                </ul>
            </nav>
            {/*<button onClick={setUserDetails}>Test</button>*/}
            {/*<div className="header-buttons">*/}
            {/*    /!*<LanguageSwitcher></LanguageSwitcher>*!/*/}
            {/*    {user ? (*/}
            {/*        <div className="user-info" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>*/}
            {/*            <span>{user.username}</span>*/}
            {/*            {isDropdownOpen && (*/}
            {/*                <div className="dropdown-menu">*/}
            {/*                    <button onClick={() => console.log('Profile clicked')}>Profile</button>*/}
            {/*                    <button onClick={onLogout}>Logout</button>*/}
            {/*                </div>)}*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <div>*/}
            {/*            <button className="register-button" onClick={toggleRegisterModal}>Register</button>*/}
            {/*            <button className="login-button" onClick={toggleLoginModal}>{t('Login')}</button>*/}
            {/*        </div>*/}
            {/*)}*/}
            {/*</div>*/}
            {/*<RegisterModal isVisible={isRegisterModalVisible} onClose={toggleRegisterModal}></RegisterModal>*/}
            {/*<LoginModal isVisible={isLoginModalVisible} onClose={toggleLoginModal}></LoginModal>*/}
        </header>
    );
};

export default Header;
